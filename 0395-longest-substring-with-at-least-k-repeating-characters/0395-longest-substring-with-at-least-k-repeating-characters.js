/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let maxLen= 0;
    const maxTarget = new Set(s).size;

    for(let unique=1; unique<= maxTarget ; unique++){

        let obj={}, low=0, high=0, uniqueCount =0, atLeastKCount=0;

        while(high< s.length){
            let rChar = s[high];
            if(!obj[rChar]){
                obj[rChar]=0;
                uniqueCount++;
            }
            obj[rChar]++;

            if(obj[rChar]===k){
                atLeastKCount++;
            }

            while(uniqueCount>unique){
                let lChar= s[low];
                if(obj[lChar]===k){
                    atLeastKCount--;
                }
                obj[lChar]--;
                if(obj[lChar]===0){
                    uniqueCount--;
                }
                low++;
            }
            if(uniqueCount ===unique && uniqueCount===atLeastKCount){
                maxLen= Math.max(maxLen, high-low+1);
            }
            high++;
        }
        
    }
    return maxLen;
};