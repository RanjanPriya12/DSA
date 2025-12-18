const num = 12345;
function digitCount(n){
    let count = 0;
    while(n>0){
        let rem = n%10;
        count++;
        n=Math.floor(n/10);
    }
    return count;
}

console.log(digitCount(num));