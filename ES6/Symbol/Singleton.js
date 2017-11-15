/**
 * Singleton模式指的是调用一个类，任何时候返回的都是同一个实例。
 */
const FOO_KEY = Symbol('foo');

function A() {
    this.foo = 'hello';
}

if (!global[FOO_KEY]) {
    global[FOO_KEY] = new A();
}