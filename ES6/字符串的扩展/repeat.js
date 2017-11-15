// repeat方法返回一个新字符串，表示将原字符串重复n次。

let sb5 = 'sb'.repeat(5);
console.log(sb5);

let hello2 = "hello".repeat(2);
console.log(hello2);

let no2 = 'no'.repeat(2.9);
console.log(no2); //no2no2

console.log('na'.repeat(-0.9));
console.log('na'.repeat(NaN));
console.log('na'.repeat('3'));