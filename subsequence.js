const str='priya';

function printSubsequences(s){
    if(s.length===0){
        return [""];
    }
     const char=s[0];
     const subsequenece=printSubsequences(s.slice(1));
     const res=[];
     for(const item of subsequenece){
        res.push(char+item);
        res.push(item);
     }
     return res;
}
console.log(printSubsequences(str));