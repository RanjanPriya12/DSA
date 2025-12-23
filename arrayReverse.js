const arr=[1,2,3,4,5];
function arrayReverse(arr,l=0,r=arr.length-1){
    if(l>=r){
        console.log(arr);
        return;
    }
    const temp=arr[l];
    arr[l]=arr[r];
    arr[r]=temp;
    arrayReverse(arr,l+1,r-1);
}
arrayReverse(arr,0,arr.length-1);
