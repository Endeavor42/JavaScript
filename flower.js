function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.flowersGone = false;
  this.opacity = 300;
  this.xdir = 1;

  this.shrink = function() {
    this.r -= 10;
  };

  this.reverse = function(){
      this.xdir *= -1;
      this.y += 25;
  }

  this.move = function() {
    this.x += this.xdir;
  };

  this.show = function() {
    fill(255, 0, 200, this.opacity);
    rectMode(CENTER);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
