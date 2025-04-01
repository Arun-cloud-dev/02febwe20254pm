// Data types 


//string 

let name = "John "
let greetings = ' Hello, How are you?'

console.log(name+greetings);



//number 

let age = 25;

let price = 99.99;


console.log(age);
console.log(price + 1);


//boolean

let isStudent = true;
let hasLicense = false;


console.log(typeof isStudent);




//undefined 

let data;
console.log(data);

//null
let ar = null;
console.log(ar);


//object        
let person = {
    name: "John",
    age: 25,
    isStudent: true,
    isEmployed: false,
}


console.log(person);



let fruits = ["apple", "banana", "mango", "orange"];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mixed = [1, "apple", true, 99.99, null, { name: "John" }];


console.log(fruits);
console.log(numbers);
console.log(mixed); 




// Date 
let currentDate = new Date();

console.log(currentDate);


let specificDate = new Date("2021-12-25");
console.log(specificDate);


