const arr=[1,3,4,7,8,9,11,15,18,20];
function binarySearch(array,target){
   let left=0,right=array.length-1;
   while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(array[mid]===target){
        return mid;
    }else if(target<array[mid]){
        right=mid-1;
    }else if(target>array[mid]){
        left=mid+1;
    }
   }
   return -1;
}

console.log(binarySearch(arr,25));