var Loader = function() {};
Loader.prototype = {
    require: function(scripts, callback) {
        this.loadCount = 0;
        this.totalRequired = scripts.length;
        this.callback = callback;
        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function(evt) {
        this.loadCount++;
        if (this.loadCount == this.totalRequired && typeof this.callback == 'function')
            this.callback.call();
    },
    writeScript: function(src) {
        var self = this;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        if (s.addEventListener) {
            s.addEventListener("load", function(e) {
                self.loaded(e);
            }, false);
        } else if (s.attachEvent) {
            s.attachEvent("onload", function(e) {
                self.loaded(e);
            })
        }
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}
