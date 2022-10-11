let i = 0;
function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      let x = random(250, 400);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      text(i, x, y);
    }
    if (i % 2 == 0 + 1) {
      let x = random(150);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      text(i, x, y);
    }
  }
}
