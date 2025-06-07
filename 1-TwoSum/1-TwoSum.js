// Last updated: 6/7/2025, 12:16:44 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let resArr = [];

    // for(let left = 0 ; left <nums.length ; left++){
    //     for(let right = 1 ; right <  nums.length ; right++){
    //         if(nums[left]+nums[right] === target && left!=right){
    //             resArr.push(left);
    //             resArr.push(right);
    //             return resArr;
    //         }
    //     }
    // }

    var obj = {};
    for(let i=0; i<nums.length ; i++){
        var num = nums[i];
        if(obj[target-num] >= 0){
            return [obj[target-num],i]
        }
        else{
            obj[num] = i;
        }
    }
};