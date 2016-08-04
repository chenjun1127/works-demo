/**
 * Created by john on 2016/3/18.
 */
function Ball(radius, color) {
    if (radius === undefined) radius = 30;
    if (color === undefined) color = 'green';
    this.radius = radius;
    this.color = color;
    this.rolation = 0;
    this.x = 0;
    this.y = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
    this.vx = 0;
    this.vy = 0;
}
Ball.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rolation);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    if (ctx.lineWidth > 1) ctx.stroke();
    ctx.restore()
};
Ball.prototype.getBounds = function () {
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2,
    }
}