const n=5;

function countWays(n){
    if(n<=1) return 1;
    return countWays(n-1)+countWays(n-2)+countWays(n-3);
}
console.log(countWays(n));