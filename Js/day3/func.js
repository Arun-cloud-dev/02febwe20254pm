// function arun() {
//     console.log("hello");
// }

// arun();




// function add(a, b) {
//     return a + b;
// }


// let sum = add(5,3);  
// console.log(sum); // Output: 8

 
// const multiply = (x, y) => x * y;

// console.log(multiply(5, 3)); // Output: 15                                                                                                                                                          



// function greet(name) {
//     console.log("Hello" +name ) ;
// }


// function processUser(callack) {
//     let userName = "Arun";
//     callack(userName)
// }


// processUser(greet); // Output: Hello Arun






// function showWelcomeMessage(name) {
//     console.log("Welcome " + name);
// }

// function loginUser(callack) {
//     let user = "john"
//     console.log("user logged in sucessfully");
//     callack(user);
// }

// loginUser(showWelcomeMessage); // Output: Welcome john




// (function () {
//     let secret = "hidden Data"
//     console.log("inside IIFE :", secret);

// })();





// (
//     function () {
//         console.log("app is starting..... ");
//     })();




// let counter = (function () {
//     let count = 0


//     return {
//         increment: function () { count++; },
//         getCount : function () { return count; },
//     }
// })();



// counter.increment();

// console.log(counter.getCount());