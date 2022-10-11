let x = 100;
let y = 100;
let d = 300;
let x1 = 300;
let y1 = 300;
let i = 0;
function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 31; i++) {
    circle(x, y, d);
    d = d - 10;
  }
}
