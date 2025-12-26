const num=9;
function isBinaryPalindrome(x) {
    let n = Math.floor(Math.log2(x)) + 1;
    let l = 0, r = n - 1;
    while (l < r) {
        if (((x >> l) & 1) !== ((x >> r) & 1)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

console.log(isBinaryPalindrome(num) ? "true" : "false");  
