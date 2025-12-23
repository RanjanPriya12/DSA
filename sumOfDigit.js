const num=1234;
function sumOfDigit(num){
    if(num===0){
        return 0;
    }
    const rem= num%10;
    num=Math.floor(num/10);
    return rem+sumOfDigit(num);
}
console.log(sumOfDigit(num));