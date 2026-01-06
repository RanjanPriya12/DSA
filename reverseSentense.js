const str='Hello typescript in the world';

function reverse(str){
    return str.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
}
console.log(reverse(str));