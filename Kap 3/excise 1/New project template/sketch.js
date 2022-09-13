function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(200,200,10);
  background(200,30,55);
  frameRate(60);
}

function draw() {
  if (mouseIsPressed == true) {
    if (mouseButton == RIGHT) {
      square(mouseX,mouseY,33);
    }
  else if (mouseButton == LEFT) {
    ellipse(mouseX,mouseY,33,33);
  }
  }
  }
