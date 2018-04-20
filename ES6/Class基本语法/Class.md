# 关于ES6 Class语法相关总结
关于ES6，其实网上已经有很多的资料可供查询，教程可参考阮一峰大神的[ES6入门](http://es6.ruanyifeng.com/)，本文只是对Class这一语法做一个总结：

## 一、Class基本语法

### constructor方法

constructor是类的默认构造方法，new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

### this的指向

类的方法内部如果含有this，它默认指向类的实例。注意，在static静态方法中，this会指向当前类，不是实例；

### 静态方法和实例方法

静态方法是在方法名前面加static关键字，静态方法不会被实例继承，只能通过类来调用。如在实例上调用，则会抛出一个错误；注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。

实例方法可通过new关键字直接调用，同ES5一样；

### 静态属性和实例属性

静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。ES6，定义类的属性，不能定义在类里面，需要在外面定义，见代码：
```javascript
Class Person{
}
Person.school = "Beijing University";
```
ES7中，可定义在类的内部，前面加static关键字即可；

类的实例属性可以用等式，写入类的定义之中。在实例上，可以直接调用这个属性；

## 二、Class继承

Class 可以通过extends关键字实现继承，见代码：
```javascript
class A{
}

class B extends A{
}
```
子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

父类的静态方法，也会被子类继承。

最后，见下面代码：
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static log(text) {
        console.log(`Helow ${text},I'm come from ${this.school}`)
    }
    toString() {
        return (`My name is ${this.name},I'm ${this.age}`)
    }
}
Person.school = "Beijing University";

Person.log("Jack");
// 创建一个实例
var person = new Person("Jason", 30);   		// ==> Helow Jack,I'm come from Beijing University
console.log(person.toString())					// ==> My name is Jason,I'm 30
console.log(person instanceof Person);			// ==> true
console.log(Person instanceof Object);			// ==> true
console.log(person.age); 						// ==> 30
console.log(person.hasOwnProperty('age'));		// ==> true
console.log(person.hasOwnProperty('log'));		// ==> false
console.log(Person.hasOwnProperty('log'));		// ==> true

class People extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
        this.string = super.toString();
    }
    speak() {
        // console.log(super.toString(), this.total)
        console.log(`${this.string}, My sex is a ${this.sex}`)
    }
}

const people = new People('Tome', 30, 'Man');	
people.speak();									// ==> My name is Tome,I'm 30, My sex is a Man
People.log("Lucy");								// ==> Helow Lucy,I'm come from Beijing University
console.log(people.hasOwnProperty('total'));	// ==> false
```
