const num=5;
function printDecreIncreasing(n){
    if(n==0){
        return;
    }
    console.log(n);
    printDecreIncreasing(n-1);
    console.log(n);
}
printDecreIncreasing(num);