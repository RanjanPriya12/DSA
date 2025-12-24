const nums = [5, 3, 8, 4, 2, 1, 7, 6];
const sum=5;

const twoSum=(arr,target)=>{
    const seen = new Set();
    for(const num of arr){
        const sub = target-num;
        if(seen.has(sub)){
            console.log([sub,num]);
            return;
        }
        seen.add(num);
    }
}
twoSum(nums,sum);