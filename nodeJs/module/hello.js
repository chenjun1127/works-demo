/* 
module.exports=function(name,age,money){
	this.name=name;
	this.age=age;
	this.money=money;
	this.say=function(){
		console.log('我的名字叫：'+this.name+'，我今年'+this.age+'岁，月薪为：'+this.money+'元；')
	}
};
 */
function hello(name,age,money){
	this.name=name;
	this.age=age;
	this.money=money;
	this.say=function(){
		console.log('我的名字叫：'+this.name+'，我今年'+this.age+'岁，月薪为：'+this.money+'元；')
	}
}
/* module.exports=hello; */
var Hello=new hello('jone','28','10000');
exports.add=Hello  