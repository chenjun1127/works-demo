var util = require('util')
function obj(name, age, money) {
	this.name = name;
	this.age = age;
	this.money = money;
	this.say = function () {
		console.log(this.name + ',' + this.age + ',' + this.money)
	}
	obj.prototype.showname = function (name) {
		console.log(name)
	}
}
function hello() {
	this.name = 'sub';
}
var jone = new obj('jone', 30, 1000)
	jone.say()
	jone.showname('jack')
	util.inherits(hello, obj); //只继承原型中定义的函数，
var lucy = new hello()
	lucy.showname('Lucy')
/*
util.inspect将任意对象转换为字符串
 */
function Person() {
	this.name = 'jone';
	this.toString = function () {
		return this.name;
	}
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));