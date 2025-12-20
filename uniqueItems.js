const arr=[0,1,2,2,3,4,4,4,5,5,6,7];
function removeDuplicate(arr){
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr[k]){
        arr[k++]=arr[i-1];
    }
    return k+1;
}
}
removeDuplicate(arr);