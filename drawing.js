var drawing = function (d) {
  let selectedColor = 'black';
  d.setup = function () {
    d.createCanvas(1500, 550);
  };

  d.draw = function () {
    d.strokeWeight(10);
    d.stroke('black');
    d.line(0, 0, 0, 900);
    d.line(0, 0, 1500, 0);
    d.line(1500, 0, 1500, 550);
    d.strokeWeight(1);
    d.fill("red");
    d.rect(50, 500, 50, 50);
    d.fill("green");
    d.rect(120, 500, 50, 50);
    d.fill("yellow");
    d.rect(190, 500, 50, 50);
    d.fill("blue");
    d.rect(260, 500, 50, 50);
    d.fill('black');
    d.rect(330, 500, 50, 50);
    d.fill('white');
    d.rect(400, 500, 50, 50);
    d.fill("pink");
    d.rect(470, 500, 50, 50);
    d.fill(10, 150, 200);
    d.rect(540, 500, 50, 50);
    d.fill(200, 20, 200);
    d.rect(610, 500, 50, 50);
    d.fill('brown');
    d.rect(680, 500, 50, 50);
  };


  d.mousePressed = function () {
    if (d.mouseY > 500 && d.mouseY < 550) {
      if (d.mouseX > 50 && d.mouseX < 100) selectedColor = "red";
      else if (d.mouseX > 120 && d.mouseX < 170) selectedColor = "green";
      else if (d.mouseX > 190 && d.mouseX < 240) selectedColor = "yellow";
      else if (d.mouseX > 260 && d.mouseX < 310) selectedColor = "blue";
      else if (d.mouseX > 330 && d.mouseX < 380) selectedColor = "black";
      else if (d.mouseX > 400 && d.mouseX < 450) selectedColor = "white";
      else if (d.mouseX > 470 && d.mouseX < 520) selectedColor = "pink";
      else if (d.mouseX > 540 && d.mouseX < 590) selectedColor = "skyblue";
      else if (d.mouseX > 610 && d.mouseX < 660) selectedColor = "rgb(200,20,200)";
      else if (d.mouseX > 680 && d.mouseX < 730) selectedColor = "brown";
    }
  };

  d.mouseDragged = function () {
    d.strokeWeight(10);
    d.stroke(selectedColor);
    d.point(d.mouseX, d.mouseY);
  };
};

new p5(drawing, 'sketch-container-2');