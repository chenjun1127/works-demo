/**
 * 遍历器（Iterator） 就是一种机制。它是一种接口，为各种不同的数据结构提供统一访问机制
 * 任何数据结构只要部署到Iterator接口，就可以完成遍历操作。
 * 作用：
 * ①为各种数据结构提供统一的，简便的访问接口
 * ②使数据结构的成员能够按某种次序排列
 * ③是ES6创造了一种新的遍历命令 for of Iterator接口主要供for...of消费
 */

//  Iterator 的遍历过程 就是指针对象
const obj = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
}

/**
 * 原生具备Iterator接口的数据结构如下
 * Array、Map、Set、String、TtypdArray、函数的arguments、NodeList对象
 */

let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()

console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'b', done: false }
console.log(iter.next()) // { value: 'c', done: false }
console.log(iter.next()) // { value: undefined, done: true }

// 类部署 Iterator 接口
class RangeIterator {
    constructor(value, stop) {
            this.value = value
            this.stop = stop
        }
        [Symbol.iterator]() {
            return this
        }
    next() {
        var value = this.value
        if (value < this.stop) {
            this.value++
                return {
                    done: false,
                    value: value
                }
        }
        return {
            done: true,
            value: undefined
        }
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop)
}
for (var value of range(0, 3)) {
    console.log(value) // 0 1 2
}


// 通过遍历器实现指针结构的例子
function Obj(value) {
    this.value = value
    this.next = null
}
Obj.prototype[Symbol.iterator] = function() {
    var iterator = {
        next: next
    }
    var current = this

    function next() {
        if (current) {
            var value = current.value
            current = current.next
            return {
                done: false,
                value: value
            }
        } else {
            return {
                done: true
            }
        }
    }
    return iterator
}

var one = new Obj(1)
var two = new Obj(2)
var three = new Obj(3)

one.next = two
two.next = three

for (var i of one) {
    console.log(i) // 1 2 3
}