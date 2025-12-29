const nums=[1,3,2,3,4,2],target=3;

// function lastOccurance(nums,target,index=nums.length-1){
//     return index<0?-1:nums[index]===target?index:lastOccurance(nums,target,index-1);
// }
//console.log(lastOccurance(nums,target,nums.length-1));

function lastOccurance(nums,target,index=0){
    return index>=nums.length?-1:nums[nums.length-1-index]===target?nums.length-1-index:lastOccurance(nums,target,index+1);;
}

console.log(lastOccurance(nums,target,0));