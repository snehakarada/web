var rotation = function (r) {
  let x = 550;
  let y = 100;
  let direction = 'left';
  r.setup = function () {
    r.createCanvas(890, 400);
  };

  r.draw = function () {
    r.background(255, 230, 201);
    if (x === 350) {
      direction = 'right';
    }

    if (x === 550 && direction === 'right') {
      direction = 'left';
    }

    if (direction === 'left') {
      x -= 2;
    } else {
      x += 2;
    }

    r.fill('violet');
    r.rect(300, 200, 300, 150, 50);
    r.ellipse(450, 200, 300, 50);
    r.fill('skyblue');
    r.ellipse(450, 200, 250, 30);
    r.fill('grey');
    r.rect(x, y, 10, 110);
  };
};

new p5(rotation, 'sketch-1');