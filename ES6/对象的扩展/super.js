/**
 * ES6新增的关键字super,指向当前对象的原型对象
 */

const proto = {
    foo: 'hello'
};
const obj = {
    find() {
        return super.foo
    }
};
Object.setPrototypeOf(obj, proto);
console.log(obj.find()); // hello
// super 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错