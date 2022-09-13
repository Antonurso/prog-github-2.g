let y;
let x;
let justHitRightWall;
let yspeed = 3;
let xspeed = 5;
let x2speed = 4;
let y2speed = 5;

function setup() { 
  createCanvas(400, 400);
  y = height / 2;
  x = height / 4;
  y2 = width / 2;
  x2 = width / 3;
} 

function draw() { 
  background(220);
  if (y > height - 25 || y < 0 + 25) {
    yspeed *= -1;
  }
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  if (y2 > height - 50 || y2 < 0 + 50) {
    y2speed *= -1;
  }
  if (x2 > width - 50 || x2 < 0 + 50) {
    x2speed *= -1;
  }
  //Move
  y += yspeed;
  x += xspeed;
  y2 += y2speed;
  x2 += x2speed;
  ellipse(x, y, 50, 50);
  ellipse(x2, y2, 100, 100);
  if (sqrt((x-x2)**2+(y-y2)**2) < 75) {
    fill(0,255,0);
  }
  else {
    fill(255,0,0);
  }
}