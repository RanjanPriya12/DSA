/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low=0, high=0, max=0, map=new Map();
    for( high=0; high<s.length; high++){
        const currChar = s[high];
        if(map.has(currChar) && map.get(currChar)>=low){
            low = map.get(currChar) + 1; 
        }

        map.set(currChar, high);

        max= Math.max( max, high- low+1);
    }
    return max;
};