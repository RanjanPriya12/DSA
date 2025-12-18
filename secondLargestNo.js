const arr = [2,1,3,8,4,5];

function findSecondLargestNumber(arr){
    let first=-Infinity,second=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            second=first;
            first=arr[i];
        }else if(arr[i]>second){
            second=arr[i];
        }
    }
    return second;
}
console.log(findSecondLargestNumber(arr));