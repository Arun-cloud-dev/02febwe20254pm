// Types of scope:

// Global scope: Accessible everywhere.

// Local (function) scope: Accessible only inside a function.

// Block scope (using let and const): Accessible only inside {} blocks.



// let globalVar = "i am global";



// function myFunction() {
//     let localVar = "i am local var"
//     console.log(globalVar);
//     console.log(localVar);
// }



// // console.log(globalVar);
// // console.log(localVar);


// myFunction()



// closures

//A closure is when a function remembers the variables 
// from its outer scope, even after that outer function has finished executing.





// function outer() {
//     let counter = 0 


//     function inner() {
//         counter++;
//         console.log(counter);
//     }

//     return inner
// }


// const increment = outer();

// increment();
// increment();
// increment();
// increment();


// Common Asynchronous Concepts
// Callbacks: Functions passed as arguments, called later.

// Promises: Handle success or failure of async tasks.

// Async/Await: Cleaner way to write asynchronous code.

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("data feteched");
//         callback()
//     },2000)
// }

// fetchData(() => {
//     console.log("now running callbacks");
// })



// Task starts
//     ↓
// Need to wait for something (like API call)

//     ↓
// ▶ Callback
//    → Pass a function to run after task finishes

//     ↓
// ▶ Promise
//    → Returns a Promise object
//    → .then() for success, .catch() for error

//     ↓
// ▶ Async/Await
//    → Write asynchronous code like it’s synchronous
//    → Use 'await' to pause until Promise resolves



// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("pizza is ready ")
//     }, 3000)
// });


// fetchData.then(data => console.log(data))




// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true;  // change this to false to simulate the reject 


//         if (success) {
//             resolve("data feteched successfully ")
//         } else {
//             reject("Failed to fetch data !")
//         }
//     }, 3000)
// });


// fetchData
//   .then((data) => console.log("success:", data))
//   .catch((error) => console.log("Error:", error));


//   Start Promise
//     ↓
//   Task starts (example: fetching data)
//     ↓
//     Wait (example: 3 seconds)
//     ↓
//   Is task successful?
//     ↙                ↘
//    Yes                 No
// (resolve)         (reject)
//     ↓                ↓
// .then() runs      .catch() runs




async function fetchData() {
    try {
        let response = await fetch('https://api.github.com/users/Arun-cloud-dev/followers')
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error', error);
    }
}

fetchData();