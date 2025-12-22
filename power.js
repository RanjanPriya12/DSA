const n=5,x=4;
function power(n,x){
    if(n==0){
        return 1;
    }
    return x*power(n-1,x);
}
console.log(power(n,x));