const arr=[1,3,0,4,0,5,0,6,0,8,7];

function moveZeroes(nums){
   let x=0;
   for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
        nums[x]=nums[i];
        x++;
    }
   }
   for(let i=x;i<nums.length;i++){
    nums[i]=0;
   }
   console.log(nums);
}
moveZeroes(arr);