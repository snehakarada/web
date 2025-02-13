var squarePack = function (s) {
  s.setup = function () {
    s.createCanvas(870, 400);
    s.background(220);
  };

  s.draw = function () {
    s.fill(s.random(255), s.random(255), s.random(255));
    let x = s.floor(s.random(850));
    let y = s.floor(s.random(400));
    let size = s.random(20);
    s.square(x, y, size);
  };
};

new p5(squarePack, 'sketch-2');