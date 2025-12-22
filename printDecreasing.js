const num=5;
function printDecreasing(num){
    if(num===1){
        return 1
    }
    console.log(num);
    printDecreasing(num-1);
}
printDecreasing(num);