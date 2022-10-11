function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 11; i++) {
    fill(0, 255, 0);
    let x = random(400);
    let y = random(400);
    let w = random(100);
    let h = random(100);
    ellipse(x, y, w, h);
  }
  let i = 0;
  while (i < 11) {
    fill(255, 0, 0);
    let x = random(400);
    let y = random(400);
    let w = random(100);
    let h = random(100);
    ellipse(x, y, w, h);
    i++;
  }
}
