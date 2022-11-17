let x = 10;
let y = 10;
let w = 10;
function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 10; i++) {
    fill(random(255), random(255), random(255));
    let x = random(400);
    let y = random(400);
    let w = random(100);
    circle(x, y, w);
  }
}
