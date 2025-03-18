var tom = function (t) {
  let shapes = [];
  let screen;
  t.setup = function () {
    t.createCanvas(885, 600);
    shapes.push({ type: 'circle', x: 100, y: 270, radius: 30, isDragging: false });
    shapes.push({ type: 'rect', x: 100, y: 310, breadth: 10, length: 40, isDragging: false });
    screen = t.createGraphics(885, 600);
    screen.clear();
  };

  t.draw = function () {
    // t.background(220);
    t.background('violet');
    t.fill('white');
    t.rect(70, 230, 70, 150);

    t.line(0, 600, 180, 400);
    t.line(180, 400, 170, 0);
    t.line(885, 600, 650, 400);
    t.line(650, 400, 650, 0);
    t.line(180, 400, 650, 400);

    t.fill('pink');
    t.rect(330, 370, 60, 20, 20);//hand1
    t.rect(490, 370, 60, 20, 20);//hand2
    t.ellipse(442, 400, 130, 130);//stomach
    t.circle(490, 450, 50);//left leg
    t.circle(390, 450, 50);//right leg
    t.circle(442, 300, 100);//face
    t.circle(390, 270, 50);//ear1
    t.circle(490, 270, 50);//ear2

    t.fill('white');
    t.circle(442, 400, 80);
    t.ellipse(443, 330, 40, 45);//mouth
    t.ellipse(443, 340, 20, 2);
    // circle(350, 220, 10)
    // circle(330, 200, 15);
    // ellipse(300, 160, 90, 70);
    shapes.forEach((shape) => {
      if (shape.type === 'circle') {
        t.fill('bisque');
        t.circle(shape.x, shape.y, shape.radius);
      }
      if (shape.type === 'rect') {
        t.fill('skyblue');
        t.rect(shape.x, shape.y, shape.breadth, shape.length);
      }
    });
    t.image(screen, 0, 0);

    // ellipse(soapX, soapY, 40, 30);
    t.fill('black');
    t.ellipse(460, 290, 10, 20);//eye
    t.ellipse(420, 290, 10, 20);//eye
    t.circle(443, 310, 10);//nose
    t.text('soap', 85, 295);
    t.text('shower', 85, 366);


  };

  t.mousePressed = function () {
    // print('entered');

    shapes.forEach((shape) => {
      if (shape.type === "circle") {
        let value = t.dist(t.mouseX, t.mouseY, shape.x, shape.y);
        if (value <= shape.radius) {
          // print('inside mousepressed');
          shape['offsetX'] = t.mouseX - shape.x;
          shape['offsetY'] = t.mouseY - shape.y;
          shape.isDragging = true;
        }
      }
      if (shape.type === 'rect') {
        if (
          t.mouseX > shape.x &&
          t.mouseX < shape.x + shape.breadth &&
          t.mouseY > shape.y &&
          t.mouseY < shape.y + shape.length) {
          shape['offsetX'] = t.mouseX - shape.x;
          shape['offsetY'] = t.mouseY - shape.y;
          shape.isDragging = true;
        }
      }
    });
  };


  t.mouseDragged = function () {
    shapes.forEach((shape) => {
      if (shape.type === 'circle') {
        if (shape.isDragging) {
          shape.x = t.mouseX - shape.offsetX;
          shape.y = t.mouseY - shape.offsetY;
          screen.fill(230, 250, 255);
          screen.circle(t.mouseX, t.mouseY, 10);
        }
      }
      if (shape.type === 'rect') {
        if (shape.isDragging) {
          shape.x = t.mouseX - shape.offsetX;
          shape.y = t.mouseY - shape.offsetY;
          setTimeout(() => screen.clear(), 1000);
        }
      }
    });
  };



  t.mouseReleased = function () {
    // print('mouse released');
    shapes.forEach((shape) => {
      if (shape.type === 'circle') {
        shape.isDragging = false;
        shape.x = 100;
        shape.y = 270;
      }
      if (shape.type === 'rect') {
        shape.isDragging = false;
        shape.x = 100;
        shape.y = 310;
      }
    });
  };

};

new p5(tom, 'sketch-1');