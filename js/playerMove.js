const keyDown = (e) => {
  keys[e.keyCode] = true;
};

const keyUp = (e) => {
  keys[e.keyCode] = false;
};

const gameLoop = () => {
  keysDiv.innerHTML = JSON.stringify(keys);

  // KEYBOARD player move listener
  // W
  if (keys["87"]) {
    player.y += -4;
    b.rectangleCollision(player, building);
  }
  // S
  if (keys["83"]) {
    player.y += 4;
    b.rectangleCollision(player, building);
  }
  // A
  if (keys["65"]) {
    player.x += -4;
    b.rectangleCollision(player, building);
  }
  // D
  if (keys["68"]) {
    player.x += 4;
    b.rectangleCollision(player, building);
  }
};

// const movePlayerMouse = (event) => {
//   let position = event.data.global;

//   player.x = position.x;
//   player.y = position.y;
// };
