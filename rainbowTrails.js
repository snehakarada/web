var draft = function (p) {
  let r, g, b, circleX = 0, circleY = 0;
  p.setup = function () {
    p.createCanvas(1770, 500);
    p.background(244, 248, 211);

  };

  p.draw = function () {
    r = p.random(0, 255);
    g = p.random(0, 255);
    b = p.random(0, 255);
    circleX += 2;
    circleY += 1;
    p.fill(r, g, b);
    p.circle(p.mouseX, p.mouseY, 100);
  };
};

new p5(draft, "sketch-container-2");