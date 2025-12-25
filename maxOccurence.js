const str='hellowhatdoesthiscodewanttoachieve';

function maxOccurance(s){
    const charCount={};
    for(const char of s){
        charCount[char]=charCount[char]?charCount[char]+1:1;
    }
    for(const char in charCount){
        if(charCount[char]===Math.max(...Object.values(charCount))){
            console.log(`Character :${char}, Occurance:${charCount[char]}`);
            return;
        }
    }
}
maxOccurance(str);