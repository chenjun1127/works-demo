"use strict";
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	area(a, b) {
		return a * this.x + b * this.y;
	}
}
console.log(Point === Point.prototype.constructor); // true
var point = new Point(10, 5);
console.log(point instanceof Point)
console.log(point.area(2, 2));
// 使用 extends 关键字创建子类
class point1 extends Point {
	info() {
		console.log(this.x + this.y);
	}
}
let point2 = new point1(30, 20);
point2.info();