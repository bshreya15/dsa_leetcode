// Last updated: 6/2/2025, 8:58:23 PM
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n===0 || n===1) return n;

    if (n>1){
        return fib(n-1) + fib(n-2);
    }
};