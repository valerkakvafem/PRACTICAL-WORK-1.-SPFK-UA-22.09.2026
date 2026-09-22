function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Тіло/голова кота
  fill("yellow");
  beginShape();
  vertex(150, 100);
  vertex(150, 300);
  vertex(350, 300);
  vertex(350, 100);
  vertex(300, 150);
  vertex(200, 150);
  vertex(150, 100);
  endShape(CLOSE);

  // "Циліндр"
  fill("black");
  rect(200, 135, 100, 15);
  rect(225, 80, 50, 55);

  // Очі (білки)
  fill("white");
  ellipse(190, 180, 40, 40);
  ellipse(270, 180, 40, 40);

  // Очі (зіниці)
  fill("black");
  ellipse(195, 185, 20, 20);
  ellipse(275, 185, 20, 20);

  // Рот
  fill("red");
  arc(245, 230, 90, 90, 0, PI);

  // Ніс
  fill("black");
  beginShape();
  vertex(250, 210);
  vertex(260, 225);
  vertex(240, 225);
  endShape(CLOSE);
}
