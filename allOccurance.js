const nums=[1,3,2,3,4,2],target=3;

function allOccurance(nums,target,index=0,res=[]){
    if(index===nums.length){
        return res;
    }
    if(nums[index]===target){
        res.push(index);
    }
    return allOccurance(nums,target,index+1,res);
}
console.log(allOccurance(nums,target,0,[]));