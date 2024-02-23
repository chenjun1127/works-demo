var obj = { name: 'jack', age: 20 };
var proxyObj = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('正在读取的数据：', key, receiver);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log('正在修改的数据：', key, ',值为：', value);
    return Reflect.set(target, key, value, receiver);
  }
});
console.log(proxyObj.age);
proxyObj.age = 25;
console.log(proxyObj);

let price = 10, quantity = 2, total = 0;
var deep = new Set();
const effect = () => { total = price * quantity; };
var track = () => { deep.add(effect) };
var trigger = () => {
  deep.forEach((effect) => effect());
}

track();
console.log(`total: ${total}`); // total: 0
trigger();
console.log(`total: ${total}`); // total: 20
price = 20;
trigger();
console.log(`total: ${total}`); // total: 40

function defineReactive(target, key, value) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`get key: ${key} value: ${value}`)
      return value;
    },
    set(newValue) {
      value = newValue;
    }
  })
}
function observer(target) {
  Object.keys(target).forEach((key) => {
    defineReactive(target, key, target[key]);
  });
}
console.log(obj.name);
observer(obj);
obj.name = "tony";
console.log(obj.name)
let arr = [1, 2, 4];
observer(arr);
arr[2] = 3;
console.log(arr);