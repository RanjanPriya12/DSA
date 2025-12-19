const num= 112211;
function isPalindrome(n){
    n=Math.abs(n);
    let originalNum=n;
    let reverse=0;
    while(n>0){
        let rem=n%10;
        reverse=reverse*10+rem;
        n=Math.floor(n/10);
    }
    if(reverse===originalNum){
        return true;
    }
    return false;
}
console.log(isPalindrome(num));
