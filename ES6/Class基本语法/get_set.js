/**
 * 在类的内部可以使用get和set关键字，对于某个属性设置存值函数和取值函数
 */

class MyClass {
  constructor() {
    // 私有属性
    this._props = 0;
  }

  get props() {
    return this._props;
  }
  set props(value) {
    console.log('setter:' + value);
    this._props = value;
  }
}

let inst = new MyClass();

inst.props = 123; //setter: 123
console.log(inst.props); // getter

// 某个方法之前加上*号 就表示Generator
class Foo {
  constructor(...args) {
    this.args = args;
  }
  *[Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x); // hello world
}
