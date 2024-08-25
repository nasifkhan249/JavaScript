
//argument object.


// function merge(){
//     let final ="";

//     for(let i=0;i<arguments.length;i++){
//         final+=arguments[i] + " ";
//     }
//     return final;
// }
// console.log(merge("Hi", "I", "am", "John!"));



//Passing Arguments by Value
// function changeValue(x) {
//     x = 10; // Change the value of x inside the function
//     console.log("Inside function: " + x);
// }

// let x = 5;
// changeValue(x);
// console.log("out"+ x);



//Passing Arguments by Reference
// function changeProperty(obj) {
//     obj.name = "New Name"; // Change the property of the object
//     console.log("Inside function: " + obj.name);
// }

// let myObject = { name: "Original Name" };
// changeProperty(myObject);
// console.log("Outside function: " + myObject.name);



//Ends Function Execution: Once return is executed, the function stops running. Any code after return inside the function won’t be executed.

// function example() {
//     return "Hello";
//     console.log("This will not run");
// }
// console.log(example()); // Prints "Hello"

// Returns a Value: The value after return is sent back to the caller.
// function multiply(x, y) {
//     return x * y;
// }

// let product = multiply(4, 5);
// console.log(product); // Prints 20



// No Value: If you don’t specify a value after return, the function returns undefined.
// function noReturn() {
//     return;
// }

// console.log(noReturn()); // Prints undefined



// Automatic Semicolon Insertion: Be careful with line breaks. If you put a line break right after return, JavaScript might insert a semicolon, causing unexpected results.

// function badReturn() {
//     return
//     5; // This will not be returned
// }

// console.log(badReturn()); // Prints undefined


// Special Cases
// Returning Functions: You can return a function from another function.
// function outer() {
//     return function inner() {
//         return "Hello from inner function";
//     };
// }

// let innerFunction = outer();
// console.log(innerFunction()); // Prints "Hello from inner function"


// Returning Objects: When returning an object, wrap it in parentheses to avoid issues with automatic semicolon insertion.

// function getObject() {
//     return {
//         name: "Alice",
//         age: 10
//     };
// }

// console.log(getObject()); // Prints { name: 'Alice', age: 10 }





