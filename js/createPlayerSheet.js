const createPlayerSheet = () => {
  let rawSheet = new PIXI.BaseTexture.from(app.loader.resources["player"].url);
  let width = 16;
  let height = 23;

  playerSheet["standSouth"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(1 * width, 0, width, height)),
  ];
  playerSheet["standWest"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(4 * width, 0, width, height)),
  ];
  playerSheet["standEast"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(7 * width, 0, width, height)),
  ];
  playerSheet["standNorth"] = [
    new PIXI.Texture(
      rawSheet,
      new PIXI.Rectangle(10 * width, 0, width, height)
    ),
  ];
  playerSheet["walkSouth"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(0 * width, 0, width, height)),
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(1 * width, 0, width, height)),
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(2 * width, 0, width, height)),
  ];
  playerSheet["walkWest"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(3 * width, 0, width, height)),
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(4 * width, 0, width, height)),
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(5 * width, 0, width, height)),
  ];
  playerSheet["walkEast"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(6 * width, 0, width, height)),
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(7 * width, 0, width, height)),
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(8 * width, 0, width, height)),
  ];
  playerSheet["walkNorth"] = [
    new PIXI.Texture(rawSheet, new PIXI.Rectangle(9 * width, 0, width, height)),
    new PIXI.Texture(
      rawSheet,
      new PIXI.Rectangle(10 * width, 0, width, height)
    ),
    new PIXI.Texture(
      rawSheet,
      new PIXI.Rectangle(11 * width, 0, width, height)
    ),
  ];
};

const createPlayer = () => {
  player = new PIXI.AnimatedSprite(playerSheet.standSouth);
  player.animationSpeed = 0.3;
  player.loop = false;
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;
  player.scale.set(2, 2);
  app.stage.addChild(player);
  player.play();
};
