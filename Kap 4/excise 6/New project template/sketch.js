let x = 250;
let y = 250;
let p = 0;
function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(220)
ellipse(x,y,100,100);
if (sqrt((x-mouseX)**2+(y-mouseY)**2) < 50 && mouseIsPressed) {
  fill(0,255,0);
  x = random(50,width-50);
  y = random(50,height-50);
  p++
}
else {
  fill(255,0,0)
}
text("point: "+p,0,height/7);
}