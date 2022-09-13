let x = 250;
let y = 250;
function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(220)
ellipse(x,y,100,100);
if (sqrt((x-mouseX)**2+(y-mouseY)**2) < 50) {
  fill(0,255,0);
}
else {
  fill(255,0,0)
}
}