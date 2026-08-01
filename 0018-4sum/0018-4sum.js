/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums= nums.sort((a,b)=>{ return a-b });
    const n= nums.length,res=[];
    for(let i=0; i<n-3 ; i++){
        if(i> 0 && nums[i]===nums[i-1]){
            continue;
        }

        for(let j=i+1;j<n-2;j++){
            if(j> i+1 && nums[j]===nums[j-1]){
                continue;
            }
            let left = j+1, right= n-1;

            while(left<right){
                let sum = nums[i] + nums [left] + nums[right]+ nums[j];
                if(sum === target){
                    res.push([nums[i], nums [left], nums[right], nums[j]]);
                    while(left<right && nums[left]==nums[left+1]){
                        left++;
                    }
                    while(left<right && nums[right]==nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                }
                else if(sum> target){
                    right--;
                }
                else if(sum<target){
                    left++;
                }
            }
        }
    }
    return res;
};