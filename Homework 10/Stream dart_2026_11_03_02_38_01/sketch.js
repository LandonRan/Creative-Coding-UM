  var x = 180;
  var xx = 25;
  var xmove;
  var xxmove;
  var y = 150;
  var yy = 275;
  var ymove;
  var yymove;
  var xy = 75;
  var yx = 100;
  var xymove;
  var tet = 15;
  var tetg = 2.5;

function setup() {
  createCanvas(300, 500);
  xmove = floor(random() * 10) + 1;
  xxmove = floor(random() * 10) + 1;
  ymove = floor(random() * 10) + 1;
  yymove = floor(random() * 10) + 1;
  xymove = floor(random() * 10) + 1;
}

function draw() {
  background(150);
  stroke(0,0,0)
  fill(234,184,146)
  rect(125,200,50,100)
  fill(255,217,178)
  ellipse(150,y,150,180);
  if(y >= 500 || y <= 70)
  {
    ymove *= -1
  }
  y += ymove;
  fill(300,300,300)
  ellipse(120,150,35,20);
  ellipse(x,150,35,20);
  if(x >= 285 || x <= 15)
  {
    xmove *= -1
  }
  x += xmove;
  fill(0,0,0)
  circle(120,150,20)
  circle(180,150,20);
  fill(255,217,178);
  triangle(140,180,160,180,150,150);
  line(130,200,170,200);
  line(130,200,120,190);
  line(180,190,170,200);
  fill(106,78,66)
  rect(xy,yx,30,120)
  if(yx >= 300 || xy <= 0)
  {
    xymove *= -1
  }
  xy += xymove;
  yx += xymove;
  rect(195,100,30,120)
  rotate(320)
  ellipse(70,140,150,80);
  rotate(-320)
  rotate(20)
  ellipse(170,-140,100,80);
  rotate(-20)
  fill(10,52,99);
  rect(75,275,150,320);
  rect(225,yy,50,320);
  if(yy >= 300 || yy <= 0)
  {
    yymove *= -1
  }
  yy += yymove;
  rect(xx,275,50,320);
  if(xx >= 250 || xx <= 1)
  {
    xxmove *= -1
  }
  xx += xxmove;
  fill(0,0,0)
  stroke(300,300,300)
  textSize(tet);
  if(tet >= 75 || tet <= 3)
  {
    tetg *= -1
  }
  tet += tetg;
  text('Landon Hickel', 60, 490);
}