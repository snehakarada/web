var ball = function (b) {
  let x = 100;
  let y = 100;
  let xspeed = 2.5;
  let yspeed = 2;

  b.setup = function () {
    b.createCanvas(887, 400);
  };

  b.draw = function () {
    x = x + xspeed;
    y = y + yspeed;
    b.background(255, 199, 133);

    if (x > 887 || x < 0) {
      xspeed = xspeed * -1;
    }
    if (y > 400 || y < 0) {
      yspeed = yspeed * -1;
    }

    b.stroke(0);
    b.fill(200);
    b.circle(x, y, 70);
  };
};

new p5(ball, 'sketch-3');