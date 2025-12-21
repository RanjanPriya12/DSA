const nums = [1,2,3,1,4,5];
function arraySum(nums,index=0){
    if(index>=nums.length){
        return 0;
    }
    return nums[index]+arraySum(nums,index+1);
}
console.log(arraySum(nums));