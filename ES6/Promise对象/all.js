// Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

var p = Promise.all([p1, p2, p3]);

// Promise.all方法接受一个数组作为参数，p1，p2，p3，都是Promise实例，如果不是，就会调用下面讲到Promise。resolve方法，
// 将参数转化为Promise实例，再进一步处理

//（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

//（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。


const databasePromise = connectDatabase();

const booksPromise = databasePromise.then(findAllBooks);

const userPromise = databasePromise.then(getCurrentUser);

Promise.all([
    booksPromise,
    userPromise
]).then(([books, user]) => pickTopRecommentations(books, user));


//上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommentations这个回调函数。

//注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。