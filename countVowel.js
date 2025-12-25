const str='hellowhatdoesthiscodewanttoachieve';
const vowels='aeiou';

function countVowels(s,count){
    if(s.length===0){
        return 0;
    }
    if(vowels.includes(s[0])){
        count++;
    }
    return countVowels(s.slice(count),count);
    
}
console.log(countVowels(str,0));