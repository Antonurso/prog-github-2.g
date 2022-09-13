function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  if (keyCode === 67){
    circle(mouseX,mouseY,random(20,50));
  }
  if (keyCode === 70) {
    square(mouseX,mouseY,random(20,33));
  }
  if (keyCode === 69) {
    ellipse(mouseX,mouseY,random(10,60),random(20,70));
  }
}
