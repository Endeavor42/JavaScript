const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

// declaring variables
let mouse = {
  x: undefined,
  y: undefined
};

let maxRadius = 40;

let colorArray = ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5", "#ff8b94"];

// Below are objects

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

// Object created
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (
      mouse.x - this.x < 80 &&
      mouse.x - this.x > -80 &&
      mouse.y - this.y < 80 &&
      mouse.y - this.y > -80
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < 800; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dy = (Math.random() - 0.5) * 5; // negative means moving backwards
    let dx = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight); // this has to be at the top / we're clearing every time

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
init();
animate();
