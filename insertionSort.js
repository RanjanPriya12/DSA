const insertionSort = (arr) => {
    for (let i = 1; i < arr.length - 1; i++) {
        let curr=arr[i],prev=i-1;
        while(prev>=0 && arr[prev]>curr){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=curr;
    }
    console.log(arr);
}
insertionSort(nums);