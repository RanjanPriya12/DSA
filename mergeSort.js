const nums=[1,3,2,5,4,7,6,8];

function mergeSort(arr){
    if(arr.length<=1) return arr;

    const mid=Math.floor(arr.length/2);
    const left=mergeSort(arr.slice(0,mid));
    const right=mergeSort(arr.slice(mid));
    return merge(left,right);
}


function merge(left,right){
 let i=0,j=0;
 const res=[];
 while(i<left.length && j<right.length){
    if(left[i]<right[j]){
        res.push(left[i]);
        i++;
    }else{
        res.push(right[j]);
        j++;
    }
 }
 return [...res,...left.slice(i),...right.slice(j)];
}
console.log(mergeSort(nums));