/**
 * 是指某个函数的最后一步是调用另一个函数
 * 尾调用优化是指最后一步操作不会在用到内部变量等信息，直接取代外层函数的调用栈就可以
 * 大大节省
 */

/**
 * 尾递归就是尾调用自身，递归本身非常消耗内存，很容易发生栈溢出错误
 */
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
} // 复杂度为O(n)

// 改写成
function factorial(n， taotal) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
factorial(5, 1) // 复杂度O(1) 尾调用的递归优化