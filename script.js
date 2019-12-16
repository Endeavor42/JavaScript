let yPosList = [];
let xPosList = [];
let speedList = [];

class Raindrop {
  constructor() {
    this.xPos = Math.random() * 500 + 1;
    this.yPos = Math.random() * 500 + 1;
    this.speed = Math.random() * 3 + 1;
    this.size = Math.random() * 40 + 1;
    this.r = Math.random() * 255;
    this.g = Math.random() * 255;
    this.b = Math.random() * 255;
    //Color
    //Size
  }
  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.xPos, this.yPos, this.size, this.size);
  }

  fall() {
    this.yPos += this.speed;
    this.yPos = this.yPos % 500;
  }
}

let raindropList = [];
for (let i = 0; i < 100; i++) {
  raindropList.push(new Raindrop()); // instantiating 100x
}
console.log(my_first_raindrop);

function setup() {
  createCanvas(500, 500);
  background(0, 100, 200);
}

function draw() {
  //draw loops 60 times per second
  background(0, 100, 200);
  for (let i = 0; i < 60; i++) {
    raindropList[i].display();
    raindropList[i].fall();
  }
}
