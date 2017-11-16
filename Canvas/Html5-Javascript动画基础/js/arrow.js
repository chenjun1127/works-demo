/**
 * Created by john on 2016/3/29.
 */
var arrow=function (color) {
    if(color===undefined) color="#f90";
    this.color=color;
    this.x=0;
    this.y=0;
    this.rolation=0;
    this.scaleX=1;
    this.scaleY=1;
    this.lineWidth=1;
}
arrow.prototype.draw=function (ctx) {
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.moveTo(-40,-15);
    ctx.lineTo(0,-15);
    ctx.lineTo(0,-40);
    ctx.lineTo(60,0);
    ctx.lineTo(0,40);
    ctx.lineTo(0,15);
    ctx.lineTo(-40,15);
    ctx.closePath()
    ctx.fill()
    ctx.restore();

}