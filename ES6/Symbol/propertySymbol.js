// 由于Symbol值不相等，意味着可以作为标识符，用于对象的属性名

let mySymbol = Symbol();
let a = {};
a[mySymbol] = 'HELLO'

/*
第二种：
let a = {
  [mySymbol]: 'hello'
}
第三种：
let a = {};
Object.defineProperties(a, mySymbol, {value: 'hello'})
*/
console.log(a[mySymbol]) // 'HELLO'

// 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
let s = Symbol()
let obj = {
    [s]: function(arg) {
        console.log('success:' + arg)
    }
}
obj[s](123) // success:123