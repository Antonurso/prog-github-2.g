function setup() {
  createCanvas(400, 400);
  fill(30,30,40);
  noStroke();
}

function draw() {
  background(200,30,65);
if (mouseX > 200) {
  square(175,175,50);
}
if (mouseX < 200) {
  circle(200,200,50);
}
}
