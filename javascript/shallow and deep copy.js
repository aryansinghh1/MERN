//shallow copy

let arr1 = [1,2,[3,4]];
let arr2 = [...arr1];
console.log("before: "+arr2);

arr2[2][0]=99;
console.log("After: "+arr2);

