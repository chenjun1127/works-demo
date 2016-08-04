/**
 * Created by john on 2016/3/29.
 */
var ship=function (color) {
    this.color="white";
    this.rolation=0;
    this.x=0;
    this.y=0;
    this.width=25;
    this.height=20

    this.showFlame=false;
}
ship.prototype.draw=function (ctx) {
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.rolation)
    ctx.strokeStyle=this.color
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(-20,-40);
    ctx.lineTo(80,0);
    ctx.lineTo(-20,40);
    ctx.closePath();
    ctx.stroke();
    if(this.showFlame){
        ctx.beginPath();
        ctx.moveTo(-8,-15);
        ctx.lineTo(-25,0);
        ctx.lineTo(-8,15);
        ctx.stroke()
    }
    ctx.restore();
}