define(function(require, exports, module) {
    function createEle(ele) {
        var oEle = document.createElement(ele);
        oEle.setAttribute('title', 'sea模块调用');
        oEle.setAttribute('id','container');
        oEle.style.cssText = 'width:200px;height:200px;background-color:red;text-align:center;color:#fff;line-height:200px;';
        document.body.appendChild(oEle);
    }
    exports.create = createEle;
})