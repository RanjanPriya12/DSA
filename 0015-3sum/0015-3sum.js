/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[];
    nums=nums.sort((a,b)=>{return a-b});
    for(let i=0; i< nums.length-2; i++){
        if(i>0 && nums[i]=== nums[i-1]){
            continue;
        }
        let left= i+1, right= nums.length-1;

        while(left< right){

            let sum = nums[left]+ nums[right], target= - nums[i];
            if(sum === target){

                let triplet = [nums[i], nums[left], nums[right]];
                res.push(triplet);

                while(left<right && nums[left] == nums[left+1]){
                    left++;
                }

                while(left<right && nums[right] === nums[right-1]){
                    right--;
                }
                
                left++;
                right--;
            }
            else if(sum>target){
                right--;
            }else if(sum<target){
                left++;
            }
        }
    }
    return res;
};