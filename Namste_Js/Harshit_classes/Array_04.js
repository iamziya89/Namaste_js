//   How to clone array
// let arr1=["item 1", "item 2"];
// arr1.push("item 3")
// let arr2=arr1;
// console.log(arr1,arr2)
// console.log(arr1===arr2);


// let arr1=["item 1", "item 2"];
// let arr2=["item 1", "item 2"];
// arr1.push("item 3");
// console.log(arr1,arr2);
// console.log(arr1===arr2)


// let a1=["Mohd","Ziya"]
// let a2=a1.slice(0);
// console.log(a1===a2);
// a1.push("Arbaz")
// console.log(a1,a2);


//    SPREAD OPERATOR
// let arr1=["1","2"];
// let arr2=[...arr1];
// arr1.push("3");
// console.log(arr1,arr2,arr1===arr2)



let arr1=["1","2"];
// let arr2=[].concat(arr1);
// console.log(arr1,arr2);
let arr2=[...arr1];
console.log(arr1,arr2);