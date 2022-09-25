let x;
let y;
let a;
let b;
let d;
let speed;
let m1x;
let m2x;
let m1y;
let m2y;
let m2xspeed;
let m2yspeed;
let m1xspeed;
let m1yspeed;
let p;
let img;

function setup() {
  createCanvas(400, 400);
  x = random(0, width - 15); //koordinater for mus
  y = random(0, width - 15);
  d = 30;
  speed = 3;
  a = speed;
  b = 0;
  m1x = random(25, width - 25); // koordinater for kattene
  m1y = random(25, width - 25);
  m2x = random(25, width - 25);
  m2y = random(25, width - 25);
  m1xspeed = 3; //hastighed af katte
  m1yspeed = 3;
  m2xspeed = 3;
  m2yspeed = 3;
  p = 3; //liv
}

function borderCheck() {
  // checker om musen rammer væggen og gør bevæglsen baglens
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
}

function keyPressed() {
  // bevæglese af musen med piletaster
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}

function draw() {
  background(220, 220, 220);
  borderCheck();
  circle(x, y, d); //tegner "musen"
  circle(m1x, m1y, 50); //begge disse cirkle er mine "katte"
  circle(m2x, m2y, 50);
  x += a; // musens hastighed
  y += b;
  m1x += m1xspeed; // kattenes hastighed
  m2x += m2xspeed;
  m1y += m1yspeed;
  m2y += m2yspeed;
  if (m1x <= 0 + 25) {
    // alle disser er for når kattene rammrer væggene
    m1xspeed *= -1;
  } else if (m2x <= 0 + 25) {
    m2xspeed *= -1;
  }
  if (m1y <= 0 + 25) {
    m1yspeed *= -1;
  } else if (m2y <= 0 + 25) {
    m2yspeed *= -1;
  }
  if (m1x >= 400 - 25) {
    m1xspeed *= -1;
  } else if (m2x >= 400 - 25) {
    m2xspeed *= -1;
  }
  if (m1y >= 400 - 25) {
    m1yspeed *= -1;
  } else if (m2y >= 400 - 25) {
    m2yspeed *= -1;
  }

  if (sqrt((x - m1x) ** 2 + (y - m1y) ** 2) <= 40) {
    //checker om musen og kattene rammer hinanden
    p--;
    m1x = random(25, width - 25);
    m1y = random(25, width - 25);
  }
  if (sqrt((x - m2x) ** 2 + (y - m2y) ** 2) <= 40) {
    p--;
    m2x = random(25, width - 25);
    m2y = random(25, width - 25);
  }
  text("point: " + p, 0, height / 7); // skriver dine liv
}
