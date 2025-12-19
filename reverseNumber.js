const num= -1245;
function reverseNumber(n){
    let originalNum=n;
    n=Math.abs(n);
    let reverse=0;
    while(n>0){
        let rem=n%10;
        reverse=reverse*10+rem;
        n=Math.floor(n/10);
    }
    return (originalNum<0)?-reverse:reverse;
}
console.log(reverseNumber(num));