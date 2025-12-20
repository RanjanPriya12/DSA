const arr=['h','e','l','l','o'];
function reverseString(arr){
    let left=0,right=arr.length-1;
    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    console.log(arr);
}
reverseString(arr);