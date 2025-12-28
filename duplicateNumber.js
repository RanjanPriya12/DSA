const nums=[1,2,3,4,2];

function findDuplcateNumber(nums){
    for(let i=0;i<nums.length;i++){
        const index=Math.abs(nums[i]);
        if(nums[index]<0){
            return index;
        }
        nums[index]=-nums[index];
    }
}
console.log(findDuplcateNumber(nums));