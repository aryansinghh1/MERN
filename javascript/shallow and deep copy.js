//shallow copy

// let arr1 = [1,2,[3,4]];
// let arr2 = [...arr1];
// console.log("before: "+arr2);

// arr2[2][0]=99;
// console.log("After: "+arr2);


//deep copy
let deepArr1 = [5, 6, [7, 8]];
let deepArr2 = structuredClone(deepArr1);

console.log("Before deep copy modification: " + deepArr2);

deepArr2[2][0] = 100;

console.log("After deep copy modification: " + deepArr2);
console.log("Original array after deep copy modification: " + deepArr1);
