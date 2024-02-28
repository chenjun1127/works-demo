class Singleton {
  constructor() {
    // 私有静态实例变量
    if (!Singleton.instance) {
      // 私有构造函数
      this.data = 'Singleton Instance';
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // 公有方法，提供全局访问点
  static getInstance() {
    return new Singleton();
  }

  getData() {
    return this.data;
  }
}

// 使用示例
const instance1 = Singleton.getInstance();
console.log(instance1.getData()); // 输出: Singleton Instance

const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // 输出: Singleton Instance

console.log(instance1 === instance2); // 输出: true

// 以下为es5来实现
var Singleton = (function () {
  // 私有静态实例变量
  var instance;

  function createInstance() {
    // 私有构造函数
    var object = {};
    object.data = 'Singleton Instance';
    return object;
  }

  return {
    // 公有方法，提供全局访问点
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// 使用示例
var instance3 = Singleton.getInstance();
console.log(instance3.data); // 输出: Singleton Instance

var instance4 = Singleton.getInstance();
console.log(instance4.data); // 输出: Singleton Instance

console.log(instance3 === instance4); // 输出: true