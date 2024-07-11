(function () {
  /**
   * Vector类用于表示二维向量。
   * @constructor
   * @param {number} x - 向量的x分量。
   * @param {number} y - 向量的y分量。
   */
  function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  Vector.prototype = {
    /**
     * Vector类的构造函数。
     */
    constructor: Vector,

    /**
     * 计算向量的平方长度。
     * @returns {number} 向量的平方长度。
     */
    square: function () {
      return this.x * this.x + this.y * this.y;
    },

    /**
     * 计算向量的长度。
     * @returns {number} 向量的长度。
     */
    length: function () {
      return Math.sqrt(this.square());
    },

    /**
     * 计算并返回两个向量的和。
     * @param {Vector} q - 要相加的另一个向量。
     * @returns {Vector} 两个向量的和。
     */
    add: function (q) {
      return new Vector(this.x + q.x, this.y + q.y);
    },

    /**
     * 计算并返回两个向量的差。
     * @param {Vector} q - 要相减的另一个向量。
     * @returns {Vector} 两个向量的差。
     */
    minus: function (q) {
      return new Vector(this.x - q.x, this.y - q.y);
    },

    /**
     * 将向量按给定的比例缩放。
     * @param {number} scale - 缩放比例。
     * @returns {Vector} 缩放后的向量。
     */
    multiply: function (scale) {
      return new Vector(this.x * scale, this.y * scale);
    },

    /**
     * 将向量规范化到给定的长度。
     * @param {number} length - 规范化后的长度，默认为1。
     * @returns {Vector} 规范化后的向量。
     */
    normalize: function (length) {
      if (length === undefined) {
        length = 1;
      }
      return this.multiply(length / this.length());
    }
  };

  /**
   * 根据两个点创建并返回一个向量。
   * @param {Vector} p1 - 起点。
   * @param {Vector} p2 - 终点。
   * @returns {Vector} 从p1到p2的向量。
   */
  Vector.fromPoints = function (p1, p2) {
    return new Vector(p2.x - p1.x, p2.y - p1.y);
  };

  window.Vector = Vector;
})();
