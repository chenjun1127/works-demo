;
(function() {
    if (!window.cj) {
        window.cj = {};
    }
    window.cj = {
        version: '1.0',
        //日期
        datetime: new Date(),
        author: 'jone chen',
        //这里均用冒泡事件模型
        $: function() {
            var elements = [];
            for (var i = 0; i < arguments.length; i++) {
                var element = arguments[i];
                if (typeof element == 'string') {
                    element = document.getElementById(element);
                }
                if (arguments.length == 1) {
                    return element;
                } else {
                    elements.push(element)
                }
            }
            return elements
        },
        isArray: function(ele) {
            return Object.prototype.toString.call(ele) === '[object Array]';
        },
        siblings: function() {
            var siblings = Array.prototype.slice.call(el.parentNode.children);
            for (var i = siblings.length; i--;) {
                if (siblings[i] === el) {
                    siblings.splice(i, 1);
                    break;
                };
            };

        },
        //添加事件函数,调用方法addEvent(btn1,'click',showmsg);
        addEvent: function(ele, event, func) {
            //用能力检测进行跨浏览器兼容处理
            //DOM 2 事件处理
            if (ele.addEventListener) {
                //false表示冒泡事件模型
                ele.addEventListener(event, func, false);
            } else if (ele.attachEvent) {
                //若是click事件,IE为onclick
                ele.attachEvent('on' + event, func);
            } else {
                //DOM 0级事件，兼容老浏览器
                //not ele.'on'+event=func;
                //js中.可以用[]进行代替
                ele['on' + event] = func;
            }
        },
        //删除事件函数
        delEvent: function(ele, event, func) {
            if (ele.removeEventListener) {
                ele.removeEventListener(event, func, false);
            } else if (ele.detachEvent) {
                ele.detachEvent('on' + event, func); //IE
            } else {
                //DOM 0级事件，兼容老浏览器
                ele['on' + event] = null;
            }
        },
        //获取触发事件的源DOM元素
        getSrcElement: function(event) {
            //如果event.target不为空，则返回event.target值
            //否则返回event.srcElement
            return event.target || event.srcElement;
        },
        //获取事件类型
        getType: function(event) {
            return event.type;
        },
        //获取事件
        getEvent: function(event) {
            //window.event为兼容IE版本
            return event ? event : window.event;
        },
        //阻止事件冒泡
        stopBuble: function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cacelBuble = false; //IE
            }
        },
        //禁用默认行为
        preventDefault: function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false; //IE为属性
            }
        },
        //根据元素ID名称获取元素
        $id: function(eleid) {
            return document.getElementById(eleid);
        },
        //根据ClassName获取元素数组,提供父元素能提高检索效率
        //用法：var eles=getByClass('foo');
        getByClass: function(className, parent) {
            //如果不提供parent，则返回顶级元素document
            var oParent = parent ? this.$id(parent) : document;
            //能力检测
            if (oParent.getElementsByClassName) {
                //通过在字符串中使用空格分隔类,也可以匹配多个类,
                //下面的代码挑选出了所有既拥有foo类名称又拥有bar类名称的元素:
                //var eles = document.getElementsByClassName('foo bar');
                return oParent.getElementsByClassName(className);
            } else {
                var retEles = [];
                //获取父元素下的所有子元素
                var childs = oParent.getElementsByTagName('*');
                for (var i = 0, len = childs.length; i < len; i++) {
                    //元素className类名匹配
                    if (childs[i].className == className) {
                        retEles.push(childs[i]);
                    }
                }
                return retEles;
            }
        },
        //根据ClassName获取首元素
        getFirstByClass: function(className, parent) {
            //var eles=getByClass(className,parent);
            //不加this.往往报getByClass未定义的错误
            var eles = this.getByClass(className, parent);
            return eles[0];
        },
        //获取版本信息
        getVersion: function() {
            return 'Version:' + this.version;
        }
    }
})();