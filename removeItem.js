const arr=[0,1,4,2,5,4,6,7,4];
function removeItem(arr,val){
let k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=val){
        arr[k]=arr[i];
        k++;
    }
}
  arr.length=k;
  return {count:arr.length,arr};
}
console.log(removeItem(arr,4));