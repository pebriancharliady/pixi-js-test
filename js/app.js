let app;
let player;
let keys = {};
let keysDiv;
let b = new Bump(PIXI);
let playerSheet = {};
// let count = 10;

window.onload = () => {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xfafafa,
  });
  document.body.appendChild(app.view);

  app.loader.add("player", "images/base.png");
  app.loader.add("box", "images/player.png");
  app.loader.onComplete.add(doneLoading);
  app.loader.onError.add((err) => console.log(err));
  app.loader.onProgress.add((e) => console.log(e.progress));
  app.loader.load();

  //   app.stage.interactive = true;
  //   app.stage.on("pointermove", movePlayerMouse);
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);

  keysDiv = document.querySelector("#keys");
};

const doneLoading = () => {
  createPlayerSheet();
  createPlayer();
  //   player = new PIXI.Sprite.from(app.loader.resources.player.texture);
  //   player.anchor.set(0.5);
  //   player.x = app.view.width / 2;
  //   player.y = app.view.height / 2;

  building = new PIXI.Sprite.from(app.loader.resources.box.texture);
  building.anchor.set(0.5);
  building.x = 300;
  building.y = 300;

  app.stage.addChild(player);
  app.stage.addChild(building);
  app.ticker.add(gameLoop);
};
