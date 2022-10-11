let i = 0;
function setup() {
  createCanvas(400, 400);
  i = 1;
  while (i < 101) {
    let x = random(400);
    let y = random(400);
    fill(0, 35, 255);
    text(i, x, y);
    i = i + 2;
  }
  for (i = 2; i < 101; i++) {
    if (i % 2 == 0) {
      let x = random(400);
      let y = random(400);
      fill(250, 45, 0);
      text(i, x, y);
    }
  }
}
