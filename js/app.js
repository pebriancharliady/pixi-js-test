let app;
let player;
let keys = {};
let keysDiv;
let b = new Bump(PIXI);

window.onload = () => {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xfafafa,
  });
  document.body.appendChild(app.view);

  app.loader.baseUrl = "./images/";
  app.loader.add("player", "player.png");
  app.loader.onComplete.add(doneLoading);
  app.loader.onError.add((err) => console.log(err));
  app.loader.onProgress.add((e) => console.log(e.progress));
  app.loader.load();

  //   app.stage.interactive = true;
  //   app.stage.on("pointermove", movePlayerMouse);
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);

  app.ticker.add(gameLoop);

  keysDiv = document.querySelector("#keys");
};

const doneLoading = () => {
  player = new PIXI.Sprite.from(app.loader.resources.player.texture);
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  building = new PIXI.Sprite.from(app.loader.resources.player.texture);
  building.anchor.set(0.5);
  building.x = 300;
  building.y = 300;

  app.stage.addChild(player);
  app.stage.addChild(building);
};

const rectsIntersect = (a, b) => {
  let aBox = a.getBounds();
  let bBox = b.getBounds();

  return (
    aBox.x + aBox.width > bBox.x &&
    aBox.x < bBox.x + bBox.width &&
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.y + bBox.height
  );
};
