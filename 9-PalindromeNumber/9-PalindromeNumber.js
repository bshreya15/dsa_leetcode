// Last updated: 6/2/2025, 8:54:15 PM
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if(x<0) return false;
//     let arr = x.toString();
//     left = 0;
//     right = arr.length-1;

//     while(left<right){
//         if(arr[left] !== arr[right]) return false;
//         left++;
//         right--;
//     }
//     return true; 
// };
var isPalindrome = function(x) {
    if(x<0) return false;
    if (x === +x.toString().split("").reverse().join("")){
        return true;
    }else return false;
};