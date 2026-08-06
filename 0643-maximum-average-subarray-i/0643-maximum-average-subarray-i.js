/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let low=0, high=k-1, sum = 0;
    for(let i=low; i<=high;i++){
        sum=sum+nums[i];
    }

    let avg= sum/k;
    let max= avg;

    while(high<nums.length-1){
        high++;
        sum=sum+nums[high]-nums[low];
        low++;
        avg= sum/k;
        max=Math.max(max,avg);
    }
    return max;
};