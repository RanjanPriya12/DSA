const num=8;
const isPowerOfTwo=(n)=>{
    return n? (!(n&(n-1)))? true:false:false;
}
console.log(isPowerOfTwo(num))