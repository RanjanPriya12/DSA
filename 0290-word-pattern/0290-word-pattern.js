/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(' '), wordToChar={}, charToWord={};

    if(pattern.length !== arr.length) return false;

    for(let i=0; i<pattern.length; i++){
       wordToChar[arr[i]] = pattern[i];
       charToWord[pattern[i]]= arr[i];
    }

    for(let i=0; i<pattern.length; i++){
        if(wordToChar[arr[i]] !== pattern[i]){
            return false;
        }

        if(charToWord[pattern[i]] !== arr[i]){
            return false;
        }
    }

    return true;
};