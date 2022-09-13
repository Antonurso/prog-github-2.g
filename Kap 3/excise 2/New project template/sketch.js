function setup() {
  createCanvas(400, 400);
  background(200);
  strokeWeight(20);
  frameRate(120);
}

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}
