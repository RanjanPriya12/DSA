const nums=[1,3,0,2];
function missingNumber(nums){
    const n =nums.length;
    const expectedSum = n* Math.floor((n+1)/2);
    const actualSum = nums.reduce((acc,cv)=>acc+cv,0);
    console.log(expectedSum-actualSum);
}
missingNumber(nums);