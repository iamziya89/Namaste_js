// var fname="Mohd"
// var lname="Ziya"
// var fullName=fname+" "+lname;
// console.log(fullName);

// console.log("Hellow".concat(" ","Mohd"," ","Ziya"));

// var str1="Mohammad";
// var str2=" Ziya"
// var str3=str1.concat(str2)
// console.log(str3);


// console.log("Mohd
// Ziya");
// console.log(`Mohd
//                   Ziya`);

// let str="Ziya"
// console.log(`Hello ${str}`);

// let str="Ziya"
// console.log(`Hello ${str} How are you ${str}` );

// function myFun(say){
//     return say;
// }
// console.log(`Hi ${myFun("Ziyaaaaaa")} how are you`);

// var str="Mohd Ziyal";
// console.log(str.length);
// console.log(str.charAt(5));
// console.log(str.charCodeAt(9));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// var str="      Mohd Ziyal";
// console.log(str.trim());

// var str="Mohd Ziyal       ";
// console.log(str.trim());

// var str="Hello Geeky";
// console.log(str.replace("Geeky","World"));
// console.log("10"-"20");
// console.log("10"*"20");
// console.log("b"*"20");
// console.log([10]==[10]);


// let news = "vasanth is a good teacher";
// if(news.includes("vasanth")){
//     console.log("yes");
// }else{
//     console.log("No")
// }


// let str="Hi Guys lets learn Javascripts"
// console.log(str.split(" "));

// let str="Hi Guys lets learn Javascripts"
// let arr=str.split(" ");
// console.log(arr);
// console.log(arr.length)
// console.log(Array.isArray(arr));


// let str="Hi @ Guys @ lets @ learn @ Javascripts"
// let arr=str.split(" @ ");
// console.log(arr);
// console.log(arr[2]);


//  indexOf()
// let str="Hi Guys lets learn Javascripts"
// console.log(str.indexOf("e"));
// console.log(str.indexOf("e",10));
// console.log(str.indexOf("lets"));

// //   search()
// let str="Hi Guys lets learn Javascripts";
// console.log(str.search("e"));

// let str="Ziya"
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }


// slice ()
// let str="Hi Guys lets learn javascript";
// console.log(str.slice(8,15));

//
// let str="Hi Guys lets learn javascript";
// console.log(str.substring(8,14))

// let str="Hi Guys lets learn javascript";
// console.log(str.substr(8,8));


// let Obj={
//     fname:"Mohd",
//     lname:"Ziya",
//     age:28,
//     profession:"Webdevloper"
// }
// console.log(Obj);
// console.log(Obj.fname,Obj.lname,Obj.age);


// Obj.age=43;
// Obj.lname="Anas"
// console.log(Obj.age,Obj.lname);

// Obj.mname="Anas";
// console.log(Obj)

// delete Obj.mname;
// console.log(Obj)


// let n=12354;
// let sum=0
// while(n>0){
//     let rem=n%10;
//     n=Math.floor(n/10);
//     sum+=rem;
// }
// console.log(sum);

// let arr=[];
// arr[0]=2;
// arr[1]=24;
// arr[78]=54;
// console.log(arr.length)


// console.log(10-"20")
// console.log("10"-20)
// console.log("10"-"20")
// console.log(10-"20")
// console.log("a"-"10")

// console.log("20"-"b")

// console.log("Abc" && undefined)
// console.log(Math.floor(8.9999999999999999))
// console.log(Math.ceil(8.000000000000000000222))

// let arr=[13,24,5,34,5,1,12,8,9]
// var min=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//      min=arr[i];
//     }
// }
// console.log(min);

// let arr=[13,24,5,34,5,1,12,8,9]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]+" "+"Even")
//     }
//     else{
//         console.log(arr[i]+" "+"Odd")
//     }
// }

// let arr=[13,24,5,34,5,1,12,8,9]
// let even=[];
// let Odd=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i]);
//     }
//     else{
//         Odd.push(arr[i])
//     }
// }
// console.log(Odd,even)



// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[7,8,9]
// console.log([...arr1,...arr2,...arr3]);

// console.log(age);
// let age=10;

// let arr=["Mohd","Ziya","Shameem"]
// let new_arr=arr.join('');
// console.log(new_arr);
// console.log(Array.isArray(new_arr));

// console.log(new_arr.length);
// console.log(arr.join());
// console.log(arr.reverse());

// let arr=["Mohd","Ziya","Shameem","Anas","AliAkbar","Asgar"]
// console.log(arr.join(", "))
// let new_arr=arr.toString()
// console.log(Array.isArray(new_arr));
// let new_arr=arr.splice(2);
// console.log(new_arr)
// console.log(arr.splice(2));
// arr.splice(2,3);
// console.log(arr);
// var str="Hi Mohammad Ziya Shameem Bhai"

// console.log(str.split(" "));
let arr=["Mohd","Ziya","Shameem"]
console.log(arr.join(' '));



