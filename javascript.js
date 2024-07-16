// 1.Array Creation and Intialization


const array = [1,5,25,45,100];
console.log(array);


//2.Array Manipulation

//pop()

let array1=["Sowndharya","Ashika","Karunya","Nishaa"];
array1.pop("Nishaa");
console.log(array1);

//push()
array1.push("Logeshwari");
console.log(array1);

// unshift()
array1.unshift("Lavanya");
console.log(array1)

//shift()
array1.shift("Lavanya");
console.log(array1)

//3.Array Searching:

//indexOf()
const arr=["Sowndharya","Ashika","Karunya","Nishaa"];
console.log(arr.indexOf("Ashika"));

//find()
let arra = [1,25,5,100,45];
let found = arra.find(function (element) {
    return element > 9;
});


console.log(found);

// includes()
console.log(arr.includes("Nishaa"));

// 4.Array Mapping

//Map()
const num = [25,9,36,49];
a=num.map(Math.sqrt);
console.log(a);


//5.reverse an array
let b=["Green apple","apple","Orange"]
b.reverse(b);
console.log(b);

//sorting an array
let c=["Green Apple","Apple","Orange"]
c.sort();
console.log(c); 
