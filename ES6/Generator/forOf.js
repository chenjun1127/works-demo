// for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    return 7
}
for (let v of foo()) {
    console.log(v)
}
// 1 2 3 4 5 6

// 菲波那切数列
function* fibonacci() {
    let [prev, curr] = [0, 1]
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr
    }
}
for (let n of fibonacci()) {
    if (n > 1000) break
    console.log(n)
}

// 可以通过Generator函数为它加上这个接口，就可以用forof遍历对象

function* objectEntries() {
    let propsKeys = Object.keys(this)
    for (let propsKey of propsKeys) {
        yield [propsKey, this[propsKey]]
    }
}

let jane = {
    first: 'jane',
    last: 'Don'
}

jane[Symbol.iterator] = objectEntries

for (let [key, value] of jane) {
    console.log(`${key}：${value} `)
}
// first：jane 
// last：Don 

function* numbers() {
        yield 1
        yield 2
        return 3
        yield 4
    }
    [...numbers()] // [1,2]
Array.from(numbers()) // [1,2]

let [x, y] = numbers()
console.log(x, y) // 1 2

for (let n of numbers()) {
    console.log(n) // 1 2
}