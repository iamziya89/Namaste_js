// var arr=[];
// arr[0]="rahul"
// arr[1]="ram"
// arr[2]=56
// arr[3]="ziya"
// arr[42]='Anas'
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0])


// var arr=[,,]
// console.log(arr[0],arr[1],arr[2],arr[3])

// var a=10,b=20,c=30;
// var arr=[a,b,c]
// console.log(arr);

// var arr=new Array(10,20,30,40,50)
// console.log(arr)
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4]);

// var arr=new Array(5)   is not equal to var arr=[5] because hum new ke saath sirf ek value nahi de sakte hai
// console.log(arr)

// var arr=[10,20,30,40,50]
// console.log(arr[2],arr[`2`]);

// var arr=[]
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;
// arr[4];
// console.log(arr[4]);

// var arr=new Array(10,20,30,40);
// arr[0]=79;
// console.log(arr);

// var geek=["Rahul","Ram",56,68,"Ramesh"]
// var arr=geek;
// geek[0]=10;
// console.log(geek,arr);

//  Delete element on arrays
// var arr=["Rahul","Ram",56,68,"Ramesh"];
// // delete arr[0];
// // console.log(arr);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//   forEach loop
// var arr=["Rahul","Ram",56,68,"Ramesh"];
// arr.forEach(function(names, index){
//     console.log(names+' '+":"+index);
// })


//   forOf loops
// var arr=["Rahul","Ram",56,68,"Ramesh"];
//     for(let value of arr){
// console.log(value);
// }


//   Multidimansional array
// var geek=[
//     ["Rahul","Dell",10],
//     ["Ram","hp",20],
//     ["John","Zed",30]
// ]
// for(let i=0;i<geek.length;i++){
//     var sum=0
//     // for(let j=0; j<geek[0].length;j++){
//     //     // console.log(geek[i][j]);
//     //     sum+=geek[i][2];
//     // }
//     sum+=geek[i][2];
// }
// console.log(sum)

// var arr=["Rahul","Ram",56,"Anas"]
// // delete arr[0];
// // console.log(arr);
// arr.forEach(function(value,index){
//     console.log(value+" "+index);
// });

// var arr=["Rahul","Ram",56,"Anas"]
// arr.forEach(function(value,index){
//     console.log(value+" : "+index);
// });
// for(let i of arr){
// console.log(i);
// }

//   CONCAT Method
// // var arr=["Rahul","Ram",56]
// // // var arr1=["babu","kafeel","shahbaaz"]
// // // console.log(arr.concat(arr1));
// // var arr2=arr.concat("Mohd","Ziya");
// // console.log(arr2);


// var arr1=["Rahul","Ram"]
// var arr2=["Mohd","Ziya"]
// var arr3=["Anas Ziya"]
// console.log(arr1.concat(arr2,arr3));


// //   Join method
// // let arr=["Rahul","Sonam","Sumit"]
// let arr=[45,80,90]
// console.log( arr.join(","))
// console.log( arr.join("and"))



// //   reverse method
// let arr=["Rahul","Sonam","Sumit"]
// console.log(arr.reverse());



// //  Slice method
// var arr=["Rahul","Sonam","Sumit","Raj","Rohan"]
// // let new_arr=arr.slice(1,3)
// // console.log(new_arr)
// // console.log(arr.slice(-3,-1));
// // console.log(arr.slice(1,9));
// console.log(arr.slice(undefined,3));


//  toString method
// var arr=["Rahul","Sonam","Sumit","Raj","Rohan"]
// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(arr);
// console.log(arr.join(" / "));



// //  Array.isArray()
// var arr=["Rahul","Sonam","Sumit","Raj","Rohan"]
// console.log(Array.isArray(arr));
// // console.log(Array.isArray(["Rahul","Sonam","Sumit","Raj","Rohan"]));
// console.log(Array.isArray("I am Ziya"));


//  Splice() method
// var arr=["Rahul","Sonam","Sumit","Raj","Rohan"];
// // arr.splice(2);
// // console.log(arr);
// // arr.splice(2,1);
// // console.log(arr);
// // arr.splice(2,3);
// // console.log(arr);
// arr.splice(2,0,"Dell","Hp");
// console.log(arr);


//   indexOf ()
// var arr=["Rahul","Sonam","Sumit","Raj","Raj"]
// var pos=arr.indexOf("Ramesh");
// console.log(pos);
// var pos=arr.indexOf("Sumit");
// console.log(pos);
// var pos=arr.indexOf("Raj",3);
// console.log(pos);

// var arr=["Rahul","Sonam","Raj","Sumit","Raj"]
// var pos=arr.indexOf("Raj",3)
// console.log(pos);

// //   Fill() method
// var arr=["Rahul","Sonam","Raj","Sumit","Raj"]
// arr.fill("Altamash")
// console.log(arr);

var arr=["Rahul","Sonam","Raj","Sumit","Raj"]
arr.fill("Ramesh",1,4)
console.log(arr);



