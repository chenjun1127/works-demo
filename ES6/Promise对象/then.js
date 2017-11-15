/**
 * Promise实例具有then方法，也就是说，then方法是定义在原型对象Promies.prototype上的。
 * 作用是为Promise实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolve状态的
 * 回调函数，第二个参数（可选）是rejected状态的回电函数
 * then方法可以返回一个Promise实例 ，因此可以采用链式写法
 */
getJSON("/post/1.json").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log("resolved: ", comments),
    err => console.log("rejected: ", err)
);


//上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。
//这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。
//如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。