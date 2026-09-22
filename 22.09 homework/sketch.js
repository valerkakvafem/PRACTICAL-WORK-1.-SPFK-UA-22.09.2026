function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 224, 178);
  stroke(0);
  ellipse(200, 200, 200, 200);

  fill(0);
  noStroke();
  ellipse(160, 180, 20, 20);
  ellipse(240, 180, 20, 20);

  stroke(0);
  strokeWeight(2);
  line(170, 240, 230, 240);
}