"use strict";
const arr = [1, 2, 3];
var temp = [];
/* arr.map(function(item,index){
console.log(item*10+index);
}) */
arr.map((item, index) => console.log(item * 10 + index));
console.log('\n');
class Person {
	constructor(name, friends) {
		this.name = name;
		this.friends = friends;
	}
	init() {
		return this.friends.forEach(
			(item, index) =>
			console.log('my name is ' + this.name + ',' + item + ' is my ' + (index + 1) + ' friend!')
		)
	}
}
var person = new Person('chenjun', ['jone', 'eric', 'jack']);
person.init();