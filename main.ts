class Particle {
  x: number;
  y: number;
  radius: number;
  speedx: number;
  speedy: number;
  rx = 300;
  ry = 200;
  rw = 100;
  rh = 50;
  constructor() {
    this.x = 100;
    this.y = 250;
    this.radius = 10;
    this.speedx = 2;
    this.speedy = 2;
  }
  drawObstacle() {
    ctx.fillRect(this.rx, this.ry, this.rw, this.rh);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    if (
      this.x + this.radius > canvas?.width ||
      this.x - this.radius < 0 ||
      (this.y + this.radius > this.ry &&
        this.y - this.radius < this.ry + this.rh &&
        this.x + this.radius === this.rx)
    ) {
      this.speedx = -this.speedx;
    }
    if (
      this.y + this.radius > canvas?.height ||
      this.y - this.radius < 0 ||
      (this.x + this.radius > this.rx &&
        this.x + this.radius < this.rx + this.rw &&
        this.y + this.radius > this.ry &&
        this.y - this.radius < this.ry + this.rh)
    ) {
      this.speedy = -this.speedy;
    }
    this.x += this.speedx;
    this.y += this.speedy;
    this.draw();
    this.drawObstacle();
  }
  myMove(e) {
    console.log(this.x, this.y);
  }
}

const canvas: any = document.getElementById("canvas");
let particle: Particle;
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

particle = new Particle();

particle.draw();
animate();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas?.width, canvas?.height);
  particle.update();
}
window.onload = () => {
  canvas.addEventListener("mousemove", (e) => console.log("gotit"));
};
