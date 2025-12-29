const n=5, source='A' , destination='B', helper='C';

function printInsrctions(n,source,destination,helper){
    if(n===0){
        return;
    }
    printInsrctions(n-1,source,helper,destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    printInsrctions(n-1,helper,destination,source);
}

printInsrctions(n,source,destination,helper);