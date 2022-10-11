let x = 10;
let y = 10;
let w = 10;
function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 11; i++) {
    fill(random(255), random(255), random(255));
    let x = 10;
    let y = random(400);
    let w = random(100);
    rect(x, y, w);
  }
  let i = 0;
  while (i < 11) {
    fill(random(255), random(255), random(255));
    let x = random(400);
    let y = random(400);
    let w = random(100);
    rect(x, y, w);
    i++;
  }
}
