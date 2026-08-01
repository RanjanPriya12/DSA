/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>{ return a-b });
    let res = 0,Max=+Infinity;
    for(let i =0 ; i < nums.length-2; i++){
        if(i> 0 && nums[i] == nums[i-1]){
            continue;
        }
        let left= i+1, right=nums.length-1;

        while(left< right){

            const sum= nums[i]+ nums[left]+ nums[right];
            const diff= Math.abs(sum-target);

            if(Max>diff){
                Max=diff;
                res= sum;
            }

            if(sum>= target){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return res;
};