// Last updated: 6/7/2025, 12:04:46 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = 1;

    let resArr = [];

    for(let left = 0 ; left <nums.length ; left++){
        for(let right = 1 ; right <  nums.length ; right++){
            if(nums[left]+nums[right] === target && left!=right){
                resArr.push(left);
                resArr.push(right);
                return resArr;
            }
        }
    }
};