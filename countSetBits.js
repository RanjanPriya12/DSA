const num=10;
function countSetBits(n)
    {
      let count = 0;
      while (n)
      {
        count += n & 1;
        n >>= 1;
      }
      return count;
}
console.log(countSetBits(i));