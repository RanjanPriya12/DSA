let a = 2, b = 3;
console.log("before swapping a is = " + a + "and b is = " + b);   

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("after swapping a is = " + a + "and b is = " + b);