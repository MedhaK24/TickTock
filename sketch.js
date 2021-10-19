var h, m, s;

var ha, ma, sa;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(250, 250);
  h = hour();
  m = minute();
  s = second();
  sa = map(s, 0, 60, 0, 360);
  ma = map(m, 0, 60, 0, 360);
  ha = map(h % 12, 0, 12, 0, 360);
  rotate(-90);

  push();
  rotate(sa);
  stroke("blue");
  strokeWeight(5);
  line(0, 0, 130, 0);
  pop();

  push();
  rotate(ma);
  stroke("red");
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(ha);
  stroke("white");
  strokeWeight(5);
  line(0, 0, 65, 0);
  pop();

  noFill()
  stroke("blue")
  strokeWeight(7)
  arc(0,0,350,350,0,sa)

  noFill()
  stroke("red")
  strokeWeight(7)
  arc(0,0,320,320,0,ma)

  noFill()
  stroke("white")
  strokeWeight(7)
  arc(0,0,290,290,0,ha)

}
