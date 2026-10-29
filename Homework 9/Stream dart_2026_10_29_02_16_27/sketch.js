function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(150);
  stroke(0,0,0)
  fill(234,184,146)
  rect(125,200,50,100)
  fill(255,217,178)
  ellipse(150,150,150,180);
  fill(300,300,300)
  ellipse(120,150,35,20);
  ellipse(180,150,35,20);
  fill(0,0,0)
  circle(120,150,20)
  circle(180,150,20);
  fill(255,217,178)
  line(130,200,170,200);
  line(130,200,120,190);
  line(180,190,170,200);
  triangle(140,180,160,180,150,150);
  fill(106,78,66)
  rect(75,100,30,120)
  rect(195,100,30,120)
  rotate(320)
  ellipse(70,140,150,80);
  rotate(-320)
  rotate(20)
  ellipse(170,-140,100,80);
  rotate(-20)
  fill(10,52,99);
  rect(75,275,150,320);
  rect(25,275,50,320);
  rect(225,275,50,320);
  fill(0,0,0)
  stroke(300,300,300)
  textSize(15);
  text('Landon Hickel', 200, 490);
}