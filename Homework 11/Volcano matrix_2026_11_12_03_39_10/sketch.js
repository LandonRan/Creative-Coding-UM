var mspeed = 5;
var x = 100;
var y = 100;
var dia = 40;
var xx;
var yy;
var speed;
var xxx;
var yyy;
var speeds;
var mousex = 0;
var mousey = -50;

function setup() {
  createCanvas(700,700);
  xx = random(150,550);
  yy = random(300,500);
  speed = random (5,9);
  xxx = random(300,550);
  yyy = random(150,500);
  speeds = random (9,14);
}

function draw() {
  stroke(0)
  background(0,64,140);
  fill(300);
  rect(50,50,600);
  fill(0);
  rect(70,70,560);
  rect(570,550,80);
  fill(400);
  if (keyIsDown('s')) {
    y +=mspeed;
  } else if (keyIsDown('w')) {
    y -=mspeed;
  }
  if (keyIsDown('d')) {
    x+=mspeed;
  }
  else if (keyIsDown('a')) {
    x-=mspeed;
  }
  if (x >= 615 && y <= 570) {
    x-=5;
  }
  else if (x <= 85) {
    x+=5;
  }
  if (y <= 85) {
    y+=5;
  }
  else if (y >= 615 && x <= 660) {
    y-=5;
  }
  if (y == yy + 10 && x == xx + 10) {
    y = 100
  }
  fill(200,0,100)
  circle(xx,yy,60);
  if (xx >= 600 || xx <= 105) {
    speed *= -1;
    yy = random(250,600)
  }
  xx += speed;
  fill(0,200,100)
  circle(xxx,yyy,30);
  if (yyy >= 700) {
    yyy = 0;
    xxx = random(300,550)
  }
  yyy += speeds;
  fill(0,64,140);
  noStroke();
  rect(0,0,700,50);
  rect(0,650,700,50);
  fill(200,0,0);
  textSize(30);
  text('EXIT',580,600);
  fill(200,0,200)
  textSize(100)
  if (x >= 740)  {
    text('You Won!!!!',100,375)
    mspeed = 0
  }
  stroke(0)
  fill(100,0,200)
  circle(mousex, mousey, 80);
  fill(300)
  circle(x,y,dia);
}
    function mousePressed()
    {
        mousex = mouseX;
        mousey = mouseY; 
    }