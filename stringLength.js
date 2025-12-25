const str='heeloworld';

function stringLength(S){
    if(S===""){
        return 0;
    }
    return 1+stringLength(S.slice(1));
}
console.log(stringLength(str));