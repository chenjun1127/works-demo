//获取url 参数 
function getParameter(paraName) {
    var sUrl = location.href;
    var reg = "(?:\\?|&){1}" + paraName + "=([^&]*)"
    var regresult = new RegExp(reg, "gi");
    regresult.exec(sUrl);
    return RegExp.$1;
}

// 返回字符串的实际长度, 一个汉字算2个长度 
String.prototype.strlen = function() {
    return this.replace(/[^\x00-\xff]/g, "**").length;
}
//字符串超出省略
String.prototype.cutstr = function(len) {
    var restr = this;
    var wlength = this.replace(/[^\x00-\xff]/g, "**").length;
    if (wlength > len) {
        for (var k = len / 2; k < this.length; k++) {
            if (this.substr(0, k).replace(/[^\x00-\xff]/g, "**").length >= len) {
                restr = this.substr(0, k) + "...";
                break;
            }
        }
    }
    return restr;
}
//替换全部
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2)
}
//字符串去空格
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.trimAll = function() {
    return this.replace(/\s+/g, "");
}
String.prototype.lTrim = function() {
    return this.replace(/(^\s*)/g, "");
}
String.prototype.rTrim = function() {
    return this.replace(/(\s*$)/g, "");
}
//判断是否以某个字符串开头
String.prototype.startWith = function(s) {
    return this.indexOf(s) == 0
}
//判断是否以某个字符串结束
String.prototype.endWith = function(s) {
    var d = this.length - s.length;
    return (d >= 0 && this.lastIndexOf(s) == d)
}

//删除数组中存在重复的元素
function getUnique(someArray) {
    tempArray = someArray.slice(0); //复制数组到临时数组
    for (var i = 0; i < tempArray.length; i++) {
        for (var j = i + 1; j < tempArray.length;) {
            if (tempArray[j] == tempArray[i])
            //后面的元素若和待比较的相同，则删除并计数；
            //删除后，后面的元素会自动提前，所以指针j不移动
            {
                tempArray.splice(j, 1);
            } else {
                j++;
            }
            //不同，则指针移动
        }
    }
    return tempArray;
}
//判断数组中是否存在重复的元素
function confirmRepeat(someArray) {
    tempArray = someArray.slice(0); //复制数组到临时数组
    for (var i = 0; i < tempArray.length; i++) {
        for (var j = i + 1; j < tempArray.length;) {
            if (tempArray[j] == tempArray[i])
            //后面的元素若和待比较的相同，则删除并计数；
            //删除后，后面的元素会自动提前，所以指针j不移动
            {
                return true;
            } else {
                j++;
            }
            //不同，则指针移动
        }
    }
    return false;
}

//判断某个值是否在数组中
Array.prototype.in_array = function(e) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == e)
            return true;
    }
    return false;
}
//判断某个值在数组中的位置
Array.prototype.indexOf = function(e) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == e)
            return i;
    }
    return -1;
}



//格式化日期 DateFormat('yyyy_MM_dd hh:mm:ss:SS 星期w 第q季度')
function DateFormat(format, date) {
    if (!date) {
        date = new Date();
    }
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    var o = {
        "y+": date.getYear(), //year
        "M+": date.getMonth() + 1, //month 
        "d+": date.getDate(), //day 
        "h+": date.getHours(), //hour 
        "H+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute 
        "s+": date.getSeconds(), //second 
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter 
        "S": date.getMilliseconds(), //millisecond 
        "w": Week[date.getDay()]
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

//设置cookie值
function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
}
//获取cookie值
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}

//加入收藏夹
function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}
//设为首页
function setHomepage(homeurl) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(homeurl)
    } else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch (e) {
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', homeurl)
    }
}

//跨浏览器绑定事件
function addEventSamp(obj, evt, fn) {
    if (!oTarget) { return; }
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + evt, fn);
    } else {
        oTarget["on" + sEvtType] = fn;
    }
}
//跨浏览器删除事件
function delEvt(obj, evt, fn) {
    if (!obj) { return; }
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (oTarget.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    } else {
        obj["on" + evt] = fn;
    }
}

//判断是否移动设备访问
function isMobileUserAgent() {
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}

//完美判断是否为网址
function IsURL(strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    if (regular.test(strUrl)) {
        return true;
    } else {
        return false;
    }
}

//获取页面高度
function getPageHeight() {
    var g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
//获取页面宽度
function getPageWidth() {
    var g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

//获取页面可视宽度
function getPageViewWidth() {
    var d = document,
        a = d.compatMode == "BackCompat" ?
        d.body :
        d.documentElement;
    return a.clientWidth;
}
//获取页面可视高度
function getPageViewHeight() {
    var d = document,
        a = d.compatMode == "BackCompat" ?
        d.body :
        d.documentElement;
    return a.clientHeight;
}

//获取页面scrollLeft
function getPageScrollLeft() {
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}
//获取页面scrollTop
function getPageScrollTop() {
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}
//获取窗体可见范围的宽与高
function getViewSize() {
    var de = document.documentElement;
    var db = document.body;
    var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
    var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
    return Array(viewW, viewH);
}
//随机数时间戳
function uniqueId() {
    var a = Math.random,
        b = parseInt;
    return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}

//获取网页被卷去的位置
function getScrollXY() {
    return document.body.scrollTop ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
    } : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
    }
}

//匹配国内电话号码(0511-4405222 或 021-87888822) 
function isTel(str) {
    var result = str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);
    if (result == null) return false;
    return true;
}
//匹配身份证(15位或18位) 
function isIdCard(str) {
    var result = str.match(/\d{15}|\d{18}/);
    if (result == null) return false;
    return true;
}
//移动电话
function checkMobile(str) {
    if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(str))) {
        return false;
    }
    return true;
}
// 判断输入是否是一个由 0-9 / A-Z / a-z 组成的字符串 
function isArabicNumber(str) {
    var result = str.toString().match(/^[a-zA-Z0-9]+$/);
    if (result == null) return false;
    return true;
}
// 判断输入是否是有效的电子邮件 
function isEmail(str) {
    var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result == null) return false;
    return true;
}

//金额大写转换函数 upperCaseAmount('123431233132.23')
function upperCaseAmount(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}
//拆分整数与小数
function splits(tranvalue) {
    var value = new Array('', '');
    temp = tranvalue.split(".");
    for (var i = 0; i < temp.length; i++) {
        value = temp;
    }
    return value;
}

//格式化数字
function number_format(number, decimals, dec_point, thousands_sep) {
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}