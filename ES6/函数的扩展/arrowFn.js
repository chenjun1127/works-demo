var f = v => v;
console.log(f('hello')) // hello

var fn = (num1,num2) => console.log(num1 + num2);
fn(1,2) //3

var arr = [1,2,3]
var res =arr.map(x=> x * x)
console.log(res) // 1 4 9


/**
 * rest参数与箭头函数结合的例子
 */

 const numbers = (...nums) => nums;
 console.log(numbers(1,2,3,4,5)); // 1 2 3 4 5

/**
 * 嵌套的箭头函数
 */

let insert = (value) => ({into:(array) => ({after:(afterVlaue) => {
  array.splice(array.indexOf(afterVlaue) + 1, 0, value);
  return array
}})})

let resarr = insert(2).into([1,3]).after(1)
console.log(resarr) // [ 1, 2, 3 ]
