let shapes = [];
let selectedColor;

function setup() {
  createCanvas(1780, 550);

  shapes.push({ type: "square", x: 250, y: 200, size: 150, color: "white" });
  shapes.push({ type: "triangle", x1: 250, y1: 200, x2: 330, y2: 100, x3: 400, y3: 200, color: "white" });
  shapes.push({ type: "quad", x1: 330, y1: 100, x2: 400, y2: 200, x3: 550, y3: 200, x4: 450, y4: 100, color: "white" });
  shapes.push({ type: "sqr", x: 400, y: 200, size: 150, color: "white" });
  selectedColor = "red";
  shapes.push({ type: 'circle', x: 50, y: 50, radius: 50, color: 'white' });
}

function draw() {
  background(220);

  shapes.forEach((shape) => {
    fill(shape.color);
    switch (shape.type) {
      case 'square': square(shape.x, shape.y, shape.size);
      case 'triangle': triangle(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3);
      case 'quad': quad(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3, shape.x4, shape.y4);
      case 'sqr': square(shape.x, shape.y, shape.size);
      case 'circle': circle(shape.x, shape.y, shape.radius);
    }
  });

  fill("red");
  rect(50, 500, 50, 50);
  fill("green");
  rect(120, 500, 50, 50);
  fill("yellow");
  rect(190, 500, 50, 50);
  fill("blue");
  rect(260, 500, 50, 50);
  fill('black');
  rect(330, 500, 50, 50);
  fill('white');
  rect(400, 500, 50, 50);
  fill("pink");
  rect(470, 500, 50, 50);
  fill(10, 150, 200);
  rect(540, 500, 50, 50);
  fill(200, 20, 200);
  rect(610, 500, 50, 50);
  fill('brown');
  rect(680, 500, 50, 50);
}

function triangleArea(x1, y1, x2, y2, x3, y3) {
  return 0.5 * Math.abs(
    x1 * (y2 - y3) +
    x2 * (y3 - y1) +
    x3 * (y1 - y2)
  );
}

function isInsideTriangle(px, py, x1, y1, x2, y2, x3, y3) {
  let mainArea = triangleArea(x1, y1, x2, y2, x3, y3);
  let area1 = triangleArea(px, py, x2, y2, x3, y3);
  let area2 = triangleArea(x1, y1, px, py, x3, y3);
  let area3 = triangleArea(x1, y1, x2, y2, px, py);

  return Math.abs(mainArea - (area1 + area2 + area3)) < 0.01;
}

function mousePressed() {
  if (mouseY > 500 && mouseY < 550) {
    if (mouseX > 50 && mouseX < 100) selectedColor = "red";
    else if (mouseX > 120 && mouseX < 170) selectedColor = "green";
    else if (mouseX > 190 && mouseX < 240) selectedColor = "yellow";
    else if (mouseX > 260 && mouseX < 310) selectedColor = "blue";
    else if (mouseX > 330 && mouseX < 380) selectedColor = "black";
    else if (mouseX > 400 && mouseX < 450) selectedColor = "white";
    else if (mouseX > 470 && mouseX < 520) selectedColor = "pink";
    else if (mouseX > 540 && mouseX < 590) selectedColor = "skyblue";
    else if (mouseX > 610 && mouseX < 660) selectedColor = "rgb(200,20,200)";
    else if (mouseX > 680 && mouseX < 730) selectedColor = "brown";
  }

  shapes.forEach((shape) => {
    switch (shape.type) {
      case 'square':
        if (
          mouseX > shape.x &&
          mouseX < shape.x + shape.size &&
          mouseY > shape.y &&
          mouseY < shape.y + shape.size
        ) {
          shape.color = selectedColor;
        }
      case 'triangle':
        if (isInsideTriangle(mouseX, mouseY, shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3)) {
          shape.color = selectedColor;
        }
      case 'quad':
        if (isInsideTriangle(mouseX, mouseY, shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3) || isInsideTriangle(mouseX, mouseY, shape.x1, shape.y1, shape.x2, shape.y2, shape.x4, shape.y4)) {
          shape.color = selectedColor;
        }
      case 'sqr':
        if (
          mouseX > shape.x &&
          mouseX < shape.x + shape.size &&
          mouseY > shape.y &&
          mouseY < shape.y + shape.size
        ) {
          shape.color = selectedColor;
        }
      case 'circle':
        let distance = dist(mouseX, mouseY, shape.x, shape.y);
        if (distance <= shape.radius) {
          shape.color = selectedColor;
        }
    }
  });
}
