let x = 100;
let y = 100;
let x2 = 100;
let y2 = 100;
let ox = 500;
let oy = 250;
let e = 1;
let or = 10;
let eR = 25;
let p = 0;
let cspeed = 10;

function setup() {
  createCanvas(1000, 500);
}
function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= cspeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += cspeed;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= cspeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += cspeed;
  }
if (keyIsDown('65')) {
  x2 -= 5;
}
if (keyIsDown('68')) {
  x2 += 5;
}
if (keyIsDown('87')) {
  y2 -= 5;
}
if (keyIsDown('83')) {
  y2 += 5;
}
background(220);
e++
fill(255,255,0);
  if (e >= 1) {
    circle(ox,oy,20);
    e--
  }
  if (sqrt((x-ox)**2+(y-oy)**2) < 35) {
    ox = random(10,990);
    oy = random(10,490);
    p++
  }
  if (sqrt(((x2+25)-ox)**2+((y2+25)-oy)**2) < 35) {
    ox = random(10,990);
    oy = random(10,490);
    p++
  }
  fill(255, 0, 0);
  ellipse(x, y, 50);
  rect(x2,y2,50);
  text("point: "+p,0,height/7);
}