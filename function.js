
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


// Why Use the return Statement?

// To Get Results from Functions
// Functions often perform calculations or operations and need to send the result back. For example, a function that adds two numbers and returns the sum:

// function add(a, b) {
//     return a + b;
// }

// let sum = add(5, 3);
// console.log(sum); // Prints 8


// To Control the Flow of the Program
// You can use return to exit a function early if a certain condition is met. This helps in controlling the flow of your program and avoiding unnecessary computations.

// function checkNumber(num) {
//     if (num > 10) {
//         return "Number is too large";
//     }
//     return "Number is fine";
// }

// console.log(checkNumber(15)); // Prints "Number is too large"
// console.log(checkNumber(5));  // Prints "Number is fine"



// To Return Different Types of Values
// You can return any type of value from a function: numbers, strings, objects, arrays, or even other functions.

// function getPerson() {
//     return { name: "Alice", age: 10 };
// }

// let person = getPerson();
// console.log(person.name); // Prints "Alice"


// To Use Functions as Building Blocks
// Functions can call other functions and use their return values. This makes your code modular and easier to manage.


// function multiply(a, b) {
//     return a * b;
// }

// function square(x) {
//     return multiply(x, x);
// }

// console.log(square(4)); // Prints 16



//Functions as Variable Values

// Example 1: Assigning Functions to Variables
// You can assign a function to a variable, just like you would with a number or a string.


// let greet = function(name) {
//     return "Hello, " + name;
// };

// console.log(greet("Alice")); // Prints "Hello, Alice"



// Example 2: Passing Functions as Arguments
// You can pass a function as an argument to another function. This is often used in callbacks.


// function sayHello(name) {
//     return "Hello, " + name;
// }

// function greetUser(greetFunction, userName) {
//     console.log(greetFunction(userName));
// }

// greetUser(sayHello, "Bob"); // Prints "Hello, Bob"



// Example 3: Returning Functions from Other Functions
// You can return a function from another function. This is useful for creating function factories or closures.



// function createMultiplier(multiplier) {
//     return function(number) {
//         return number * multiplier;
//     };
// }

// let double = createMultiplier(2);
// let triple = createMultiplier(3);

// console.log(double(5)); // Prints 10
// console.log(triple(5)); // Prints 15



// Why is This Useful?
// Flexibility: You can create more flexible and reusable code.
// Callbacks: Functions can be passed as callbacks, which are used in asynchronous programming (like handling events or making API calls).
// Higher-Order Functions: Functions that take other functions as arguments or return functions are called higher-order functions. They are powerful tools in functional programming.
// Summary
// First-Class Functions: Functions in JavaScript can be used like any other variable.
// Assign to Variables: You can store functions in variables.
// Pass as Arguments: You can pass functions to other functions.
// Return from Functions: You can return functions from other functions.

// callbacks functions
// setTimeout(function() {
//     console.log("This runs after 2 seconds");
// }, 2000);


//IIEF(immediately invoked function expression)
// (function() {
//     console.log("This runs immediately!");
// })();




// function outer() {
//     let outerVar = "I'm outside!";
//     return function inner() {
//         console.log(outerVar);
//     };
// }
// let innerFunc = outer();

// console.log(innerFunc());
 // Prints "I'm outside!"



//  let message = 'Hello';

// function buildGreeting() {
//   let audience = 'world';
//   let message = 'Hello';  // Duplicate variable declaration
//   return function buildGreeting() {
//     let audience = 'World';
//     console.log(message + ' ' + audience);
//   }
// }
// let a=buildGreeting() ;// 'audience' is not defined in this scope
// a();


// let message = "Hello";
// function buildGreeting() {

//   let message="hello"
//   console.log(message);
//   let audience = "World";
//   function greetUser() {
//     let message="hEllo"
//     console.log(message + " " + audience);
//   }
//   greetUser();
// }
// buildGreeting();


// function buildGreeting(message) {
//     return function (audience) {
//       return message + "======> " + audience;
//     };
//   }
//   let greeting1 = buildGreeting("Hi");
//   let greeting2 = buildGreeting("Hello");
//   console.log(greeting1("User")); 
//   console.log(greeting2("World"));
  
  // Hi User console.log(greeting2('World')); // Hello World



// let greeting1=buildGreeting("hi");
// console.log(greeting1("hello"));

   
