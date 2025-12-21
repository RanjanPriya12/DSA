const n=5;
function sumFirstNumbers(n){
    if(n<=0){
        return 0;
    }
    return n+sumFirstNumbers(n-1);
}
console.log(sumFirstNumbers(n));