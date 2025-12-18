const arr = [2,1,3,8,4,5];

function findSecondLargestNumber(arr){
    // if array is empty or has only one element
    if(arr.length<2){
        return null;
    }

    // if array has duplicate items

    let first=-Infinity,second=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            second=first;
            first=arr[i];
        }else if(arr[i]>second && arr[i]!==first){
            second=arr[i];
        }
    }
    return second;
}
console.log(findSecondLargestNumber(arr));