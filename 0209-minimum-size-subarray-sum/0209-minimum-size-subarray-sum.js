/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low=0,high=0, min= Infinity ,sum=0;
    while(high<nums.length){
        sum=sum+nums[high];
        while(sum>=target){
            sum=sum-nums[low];
            let len = high-low+1;
            min = Math.min(min,len);
            low++;
        }
        high++;
    }
    return min === Infinity? 0 : min;
};