const n1=[0,1,2,2,3,4,5,6,6,7];
const n2=[2,5,5,6,8,9];
function mergeSortedArrays(arr1,n,arr2,m){
    let arr1Copy=arr1.slice(0,n);
    let p1=0,p2=0;
    for(let i=0;i<n+m;i++){
        if(p2>=m || (p1<n && arr1Copy[p1]<arr2[p2])){
            arr1[i]=arr1Copy[p1];
            p1++;
        }else{
            arr1[i]=arr2[p2];
            p2++;
        }
    }
    console.log(arr1);
}
mergeSortedArrays(n1,n1.length,n2,n2.length);