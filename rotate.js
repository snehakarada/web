var rotation = function (r) {
  let x = 300;
  let y = 100;
  let direction = 'left';
  r.setup = function () {
    r.createCanvas(400, 400);
  };

  r.draw = function () {
    r.background(220);
    if (x === 90) {
      direction = 'right';
    }

    if (x === 300 && direction === 'right') {
      direction = 'left';
    }


    if (direction === 'left') {
      x -= 1;
    } else {
      x += 1;
    }

    r.fill('whiteSmoke');
    r.rect(50, 200, 300, 150, 50);
    r.ellipse(200, 200, 300, 50);
    r.fill('lightYellow');
    r.ellipse(200, 200, 250, 30);
    r.fill('grey');
    r.rect(x, y, 10, 110);
  };
};

new p5(rotation, 'sketch-3');