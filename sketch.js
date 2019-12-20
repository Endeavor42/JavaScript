let ship;
let drop;
let flowers = [];
let drops = [];
let winner = false;

Sound.backgroundSound();
function setup() {
  createCanvas(800, 600);
  ship = new Ship();
  for (let i = 0; i < 9; i++) {
    flowers[i] = new Flower(i * 80 + 95, 60);
  }
}
 function draw() {
  background(51);
  ship.show();
  ship.move();

  for (let i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (let j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        flowers[j].shrink();
        drops[i].evaporate();
        flowers[j].opacity -= 150;
        Sound.hitSound();
        if (flowers[j].r < 15) {
          flowers.splice(j, 1);
        }
        console.log(flowers.length);
        if (flowers.length === 0) {
          console.log("Winner winner chicken dinner");
          Sound.winSound();
          Sound.fortniteSound();
        }
      }
    }
  }
  let edge = false;

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (let i = 0; i < flowers.length; i++) {
      flowers[i].reverse();
    }
  }

  for (let i = 0; i < drops.length; i++) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (key != " ") {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === " ") {
    let drop = new Drop(ship.x, height - 59);
    drops.push(drop);
    Sound.dropSound();
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

let overlayClose = document.getElementsByClassName("overlay-text")[0];

overlayClose.addEventListener("click", () => {
  overlayClose.style.display = "none";
  Sound.beginSound();
});

const restart = document.getElementById("restart");

restart.addEventListener("click", () => {
  location.reload(true);
});
