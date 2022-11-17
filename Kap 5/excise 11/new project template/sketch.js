let x = -((1 / 8) * width);
let y = 0;
function setup() {
  createCanvas(800, 800);
  background(225);
  fill(0);
  for (let i = 0; i < 5; i++) {
    for (let i = 0; i < 5; i++) {
      x += (1 / 4) * width;
      rect(x, y, (1 / 8) * width);
    }
    y += (1 / 4) * width;
    x = -((1 / 8) * width);
  }
  x = -((1 / 4) * width);
  y = (1 / 8) * width;
  for (let i = 0; i < 6; i++) {
    for (let i = 0; i < 6; i++) {
      x += (1 / 4) * width;
      rect(x, y, (1 / 8) * width);
    }
    y += (1 / 4) * width;
    x = -((1 / 4) * width);
  }
}
