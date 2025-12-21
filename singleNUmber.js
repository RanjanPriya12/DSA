const nums=[3,3,2,1,1,5,5,4,4];

function singleNumber(nums){
    // const numCount={};
    // for(const num of nums){
    //     if(numCount[num]){
    //         numCount[num]++;
    //     }else{
    //         numCount[num]=1;
    //     }
    // }
    // for(const num in numCount){
    //     if(numCount[num]===1){
    //         console.log(Number(num));
    //         return;
    //     }
    // }
    let result =0;
    for(const num of nums){
        result ^=num;
    }
    console.log(result);
}
singleNumber(nums)