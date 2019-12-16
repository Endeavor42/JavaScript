function setup() {
  createCanvas(600, 400);
  bubble = new Bubble();
  bubble1 = new Bubble();
  print(bubble.x, bubble.y);
}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
  bubble1.move();
  bubble1.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}
