/**
 * 获取实际样式函数
 * @param   {HTMLElement}   element  需要寻找的样式的html节点
 * @param   {String]} attr 在对象中寻找的样式属性
 * @returns {String} 获取到的属性
 */
function getStyle(element, attr) {
    //IE写法
    if (element.currentStyle) {
        return element.currentStyle[attr];
        //标准
    } else {
        return getComputedStyle(element, false)[attr];
    }
}
/**
 * 完美运动框架
 * @param {HTMLElement} element 运动对象
 * @param {JSON}        json    属性：目标值      
 *   @property {String} attr    属性值
 *   @config   {Number} target  目标值
 * @param {function}    func    可选，回调函数，链式动画。
 */
function startMove(element, json, func) {
    var flag = true; //假设所有运动到达终点.
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        for (var attr in json) {
            //1.取当前的属性值。
            var iCurrent = 0;
            if (attr === "opacity") { //为透明度时执行。
                iCurrent = Math.round(parseFloat(getStyle(element, attr)) * 100);
            } else { //默认情况
                iCurrent = parseInt(getStyle(element, attr)); //实际样式大小
            }
            //2.算运动速度,动画缓冲效果
            var iSpeed = (json[attr] - iCurrent) / 10; //(目标值-当前值)/缩放系数=速度
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //速度取整

            //3.未到达目标值时，执行代码 
            if (iCurrent != json[attr]) {
                flag = false; //终止条件
                if (attr === "opacity") { //为透明度时，执行
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")"; //IE
                    element.style.opacity = (iCurrent + iSpeed) / 100; //标准
                } else { //默认
                    element.style[attr] = iCurrent + iSpeed + "px";
                }
            } else {
                flag = true;
            }
            //4. 运动终止，是否回调
            if (flag) {
                clearInterval(element.timer);
                if (func) {
                    func();
                }
            }
        }
    }, 30);
}