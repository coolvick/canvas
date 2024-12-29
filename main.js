var Particle = /** @class */ (function () {
    function Particle() {
        this.rx = 300;
        this.ry = 200;
        this.rw = 100;
        this.rh = 50;
        this.x = 100;
        this.y = 250;
        this.radius = 10;
        this.speedx = 2;
        this.speedy = 2;
    }
    Particle.prototype.drawObstacle = function () {
        ctx.fillRect(this.rx, this.ry, this.rw, this.rh);
    };
    Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    };
    Particle.prototype.update = function () {
        if (this.x + this.radius > (canvas === null || canvas === void 0 ? void 0 : canvas.width) ||
            this.x - this.radius < 0 ||
            (this.y + this.radius > this.ry &&
                this.y - this.radius < this.ry + this.rh &&
                this.x + this.radius === this.rx)) {
            this.speedx = -this.speedx;
        }
        if (this.y + this.radius > (canvas === null || canvas === void 0 ? void 0 : canvas.height) ||
            this.y - this.radius < 0 ||
            (this.x + this.radius > this.rx &&
                this.x + this.radius < this.rx + this.rw &&
                this.y + this.radius > this.ry &&
                this.y - this.radius < this.ry + this.rh)) {
            this.speedy = -this.speedy;
        }
        this.x += this.speedx;
        this.y += this.speedy;
        this.draw();
        this.drawObstacle();
    };
    Particle.prototype.myMove = function (e) {
        console.log(this.x, this.y);
    };
    return Particle;
}());
var canvas = document.getElementById("canvas");
var particle;
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
particle = new Particle();
particle.draw();
animate();
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas === null || canvas === void 0 ? void 0 : canvas.width, canvas === null || canvas === void 0 ? void 0 : canvas.height);
    particle.update();
}
window.onload = function () {
    canvas.addEventListener("mousemove", function (e) { return console.log("gotit"); });
};
