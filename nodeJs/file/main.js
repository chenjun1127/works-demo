var fs = require("fs");
fs.readFile('test.txt', function (error, data) { //test.txt，是相对于cd到的当前目录
   if (error){
      console.log(error.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");