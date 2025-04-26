// Error  Type	Meaning	Example
// Syntax  Error	You wrote wrong code format.	if ( { console.log('Hi') }
// Reference  Error	You used a variable that doesn’t exist.	console.log(x); (x not defined)
// Type  Error	You used a wrong type of value.	123.toUpperCase()
// Range Error	You gave a number out of allowed range.	new Array(99999999999)if


// const r = 34;
// const y = 56

// try {
//     //code that may thro error 
//     let x = y + 5; // y is not defined 
// } catch (error) {
//     console.log("someting went wrong :", error.message);
// } finally {
//     console.log(r);
// }





// function divide(a, b) {
//     if (b === 0) {
//         throw new Error ("you cannot divide by Zero")
//     }
//     return a / b;
// }



// try {
//     console.log(divide(10, 0));
    
// } catch (error) {
//     console.log("custom Error: ", error.message);
// }