const num=5,x=7;
function powerOfNumber(num,x){
    const pow=Math.pow(num,Math.floor(x/2));
    if(x%2===1){
        return pow*pow*x;
    }
    return pow*pow;
}
console.log(powerOfNumber(num,x));