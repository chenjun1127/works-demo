/**
 * Map数据结构。他类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值都
 * 可以当做键。
 */

const m = new Map()
const o = {
    p: 'hello world~'
}
m.set(o, 'content')
console.log(m.get(o)) // "content"
console.log(m) // Map { { p: 'hello world~' } => 'content' }
console.log(m.has(o)) // true
m.delete(o)
console.log(m.has(o)) // false

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
])
console.log(map.size) // 2
console.log(map.has('name')) // true
console.log(map.get('name')) // 张三
console.log(map.has('title')) // true
console.log(map.get('title')) // Author

console.log('==============实例的属性和操作方法=================')
const map2 = new Map()
map2.set('foo', true);
console.log(map2.size) // 1
console.log(map2.get('foo')) // true
console.log(map2.has('foo')) // true
map2.delete('foo')
map2.set('a', 1)
console.log(map2.size) //1
map2.clear()
console.log(map2.size) //0

console.log('==============与其他数据结构的互相转换=================')

const myMap = new Map()
myMap.set(true, 7)
myMap.set({
    foo: 3
}, ['abc'])
const arr = [...myMap] // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]