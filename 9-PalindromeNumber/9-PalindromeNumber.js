// Last updated: 6/2/2025, 8:51:05 PM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let arr = x.toString();
    left = 0;
    right = arr.length-1;

    while(left<right){
        if(arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true; 
};