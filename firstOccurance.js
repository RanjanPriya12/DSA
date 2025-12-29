const nums=[1,2,3,4,2],target=2;

function firstOccurance(nums,target,index=0){
    return index===nums.length?-1:nums[index]===target?index:firstOccurance(nums,target,index+1);   
}
console.log(firstOccurance(nums,target,0));