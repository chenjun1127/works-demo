define(function(require, exports, module) {
    var a = require('./b.js');

    module.exports = {
        info: function() {
            a.create('div');
        },
        content: function() {
            document.getElementById('container').innerHTML = "这是一个seajs测试!"
        }
    }
})