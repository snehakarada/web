var paint = function (p) {
  let shapes = [];
  let selectedColor;

  p.setup = function () {
    p.createCanvas(1500, 550);

    shapes.push({ type: "square", x: 250, y: 200, size: 150, color: "white" });
    shapes.push({ type: "triangle", x1: 250, y1: 200, x2: 330, y2: 100, x3: 400, y3: 200, color: "white" });
    shapes.push({ type: "quad", x1: 330, y1: 100, x2: 400, y2: 200, x3: 550, y3: 200, x4: 450, y4: 100, color: "white" });
    shapes.push({ type: "sqr", x: 400, y: 200, size: 150, color: "white" });
    selectedColor = "red";
    shapes.push({ type: 'circle', x: 50, y: 50, radius: 50, color: 'white' });
  };

  p.draw = function () {
    p.background('whiteSmoke');

    shapes.forEach((shape) => {
      p.fill(shape.color);
      switch (shape.type) {
        case 'square': p.square(shape.x, shape.y, shape.size);
        case 'triangle': p.triangle(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3);
        case 'quad': p.quad(shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3, shape.x4, shape.y4);
        case 'sqr': p.square(shape.x, shape.y, shape.size);
        case 'circle': p.circle(shape.x, shape.y, shape.radius);
      }
    });

    p.fill("red");
    p.rect(50, 500, 50, 50);
    p.fill("green");
    p.rect(120, 500, 50, 50);
    p.fill("yellow");
    p.rect(190, 500, 50, 50);
    p.fill("blue");
    p.rect(260, 500, 50, 50);
    p.fill('black');
    p.rect(330, 500, 50, 50);
    p.fill('white');
    p.rect(400, 500, 50, 50);
    p.fill("pink");
    p.rect(470, 500, 50, 50);
    p.fill(10, 150, 200);
    p.rect(540, 500, 50, 50);
    p.fill(200, 20, 200);
    p.rect(610, 500, 50, 50);
    p.fill('brown');
    p.rect(680, 500, 50, 50);
  };

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

  p.mousePressed = function () {
    if (p.mouseY > 500 && p.mouseY < 550) {
      if (p.mouseX > 50 && p.mouseX < 100) selectedColor = "red";
      else if (p.mouseX > 120 && p.mouseX < 170) selectedColor = "green";
      else if (p.mouseX > 190 && p.mouseX < 240) selectedColor = "yellow";
      else if (p.mouseX > 260 && p.mouseX < 310) selectedColor = "blue";
      else if (p.mouseX > 330 && p.mouseX < 380) selectedColor = "black";
      else if (p.mouseX > 400 && p.mouseX < 450) selectedColor = "white";
      else if (p.mouseX > 470 && p.mouseX < 520) selectedColor = "pink";
      else if (p.mouseX > 540 && p.mouseX < 590) selectedColor = "skyblue";
      else if (p.mouseX > 610 && p.mouseX < 660) selectedColor = "rgb(200,20,200)";
      else if (p.mouseX > 680 && p.mouseX < 730) selectedColor = "brown";
    }

    shapes.forEach((shape) => {
      switch (shape.type) {
        case 'square':
          if (
            p.mouseX > shape.x &&
            p.mouseX < shape.x + shape.size &&
            p.mouseY > shape.y &&
            p.mouseY < shape.y + shape.size
          ) {
            shape.color = selectedColor;
          }
          break;
        case 'triangle':
          if (isInsideTriangle(p.mouseX, p.mouseY, shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3)) {
            shape.color = selectedColor;
          }
          break;
        case 'quad':
          if (isInsideTriangle(p.mouseX, p.mouseY, shape.x1, shape.y1, shape.x2, shape.y2, shape.x3, shape.y3) || isInsideTriangle(p.mouseX, p.mouseY, shape.x1, shape.y1, shape.x2, shape.y2, shape.x4, shape.y4)) {
            shape.color = selectedColor;
          }
          break;
        case 'sqr':
          if (
            p.mouseX > shape.x &&
            p.mouseX < shape.x + shape.size &&
            p.mouseY > shape.y &&
            p.mouseY < shape.y + shape.size
          ) {
            shape.color = selectedColor;
          }
          break;
        case 'circle':
          let distance = p.dist(p.mouseX, p.mouseY, shape.x, shape.y);
          if (distance <= shape.radius) {
            shape.color = selectedColor;
          }
      }
    });
  };
};

new p5(paint, 'sketch-container-1');