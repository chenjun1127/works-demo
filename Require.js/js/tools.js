define(function() {
	return {
		strLen: function(str) {
			return str.replace(/[^\x00-\xff]/g, "**").length;
		},
		strTrim: function(str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		}
	}
})