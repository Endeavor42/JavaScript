const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

c.fillStyle = "rgba(255, 0,0,0.5)";
c.fillRect(400, 250, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5";
c.fillRect(400, 500, 100, 100);

// Line
c.beginPath();
c.moveTo(320, 400);
c.lineTo(450, 150);
c.lineTo(578, 400);
c.strokeStyle = "orange";
c.stroke();

// Arc / Circle
for (let i = 0; i < 5999; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "orange";
  c.stroke();
}
