let pos;
let dipWheel;
let exWheel;
let offSet;
let wheelSize = 200;
let exSize = 50;
let bottle;

function setup() {
  createCanvas(400, 600);
  pos = createVector(200, 200);
  dipWheel = createVector(wheelSize / 2, 0);
  exWheel = createVector(exSize, 0);
  bottle = createVector(50, 0);
  exWheel.rotate(-HALF_PI);
}

function draw() {
  background(40);
  stroke(255);
  noFill();
  ellipse(pos.x, pos.y, wheelSize, wheelSize);
  ellipse(pos.x + dipWheel.x, pos.y + dipWheel.y, 100, 100);
  ellipse(pos.x + dipWheel.x, pos.y + dipWheel.y, 10, 10);
  ellipse(pos.x + dipWheel.x + exWheel.x + bottle.x, pos.y + dipWheel.y + exWheel.y + bottle.y, 10, 10);
  ellipse(pos.x + dipWheel.x + exWheel.x, pos.y + dipWheel.y + exWheel.y, 10, 10);
  // line(pos.x + dipWheel.x + exWheel.x, pos.y + dipWheel.y + exWheel.y, pos.x + dipWheel.x, pos.y + dipWheel.y);
  let tempBottle = bottle.copy();
  tempBottle.rotate(PI);
  line(pos.x + dipWheel.x + exWheel.x, pos.y + dipWheel.y + exWheel.y, pos.x + dipWheel.x + exWheel.x + bottle.x, pos.y + dipWheel.y + exWheel.y + bottle.y);
  
  line(pos.x + dipWheel.x + exWheel.x, pos.y + dipWheel.y + exWheel.y, pos.x + dipWheel.x + exWheel.x + tempBottle.x, pos.y + dipWheel.y + exWheel.y + tempBottle.y);
  
  dipWheel.rotate(-0.01);
  exWheel.rotate(-0.02);
  bottle.rotate(-0.01);
  
  line(20, 400, 380, 400);
  
  line(160, 220, 240, 220);
  line(160, 170, 160, 220);
  line(240, 170, 240, 220);
}