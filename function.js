// In JavaScript, every function is a Function object.


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



// Key Purposes of Closures


// Data Privacy:
// Closures allow you to create private variables that cannot be accessed from outside the function. This is useful for encapsulating data and protecting it from being modified directly.


// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// let counter = createCounter();
// console.log(counter()); // Prints 1
// console.log(counter()); // Prints 2



// Maintaining State:
// Closures help maintain state between function calls. This is particularly useful in scenarios like event handling, where you need to keep track of previous states.


// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// let counter = createCounter();
// console.log(counter()); // Prints 1
// console.log(counter()); // Prints 2




// Callbacks and Asynchronous Programming:
// Closures are essential for handling callbacks and asynchronous operations. They allow the callback function to access variables from the outer function even after the outer function has completed.


// function fetchData(url) {
//     fetch(url).then(function(response) {
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//     });
// }
// fetchData('https://api.example.com/data');



// Function Factories:
// Closures can be used to create functions that generate other functions with specific behaviors. This is useful for creating reusable and configurable functions.


// function createMultiplier(multiplier) {
//     return function(number) {
//         return number * multiplier;
//     };
// }
// let double = createMultiplier(2);
// let triple = createMultiplier(3);
// console.log(double(5)); // Prints 10
// console.log(triple(5)); // Prints 15



// Currying:
// Currying is a technique where a function returns another function with some of its arguments pre-filled. Closures make currying possible by retaining access to the outer function’s arguments.


// function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }
// let addFive = add(5);
// console.log(addFive(3)); // Prints 8






//Self-Invoking Functions


// Private Scope of Self-Invoking Functions

// Whatever code is defined inside the self-executing function remains in the private scope and doesn't pollute the global scope. So, developers can make code clear and remove the errors like naming conflicts, etc. Also, the code of the self-invoking function remains hidden and can't be accessible by other parts of the code.
// Example

// In the example below, we have defined the variable 'a' outside or inside the function. The variable defined outside is a global variable, and the variable defined inside the function is a private variable, limited to the self-executing function's scope.

// Also, we have printed the value of the variable from inside and outside of the function. Users can observe the variable's value in the output.

// In this way, we can avoid the naming conflicts.
// Open Compiler

// <html>
// <body>
//    <div id = "output"> </div>
//    <script>
//       const output = document.getElementById("output");
//       let a = 10;
//          (function () {
//             output.innerHTML += "Entering to the function <br/>";
//             var a = 20;
//             output.innerHTML += "The value of a is " + a + "<br>";
//             output.innerHTML += "Exiting to the function <br/>";
//          }());
//          output.innerHTML += "The value of the outside the function is " + a;
//     </script>
// </body>
// </html>

// Output

// Entering to the function
// The value of a is 20
// Exiting to the function
// The value of the outside the function is 10





// Example

// In some cases, it is required to access the variable of the self-executing function outside of the function. In this case, we can make that variable global using the 'window' object as shown below and access the variable in the global scope.
// Open Compiler

// <html>
// <body>
//    <div id = "output"> </div>
//    <script>
//       (function () {
//          var string = "JavaScript";
//          window.string = string;
//       })();
//       document.getElementById("output").innerHTML =
// 	  "The value of the string variable is: " + string;
//    </script>
// </body>
// </html>



//Arrow Function


// Arrow Function with Single Statement

// When the arrow function contains a single statement, we don't need to write the 'return' keyword and braces (curly brackets).
// const add = (x, y) => x +y;

// let a=add(1,2);
// console.log(a);//output:3



// Arrow Function with Multiple Statements

// When the function body contains multiple statements, we should always use the 'return' statement to return a value. Also we should use the curly brackets.
// Example

// In the example below, the arrow function contains multiple statements, so we need to use the braces or return statement.



// const divide = (x, y) => {
//     let res = x / y;
//     return res;
// };

//Note when we use block body using braces, we must use return statement.




// Arrow Functions Without Parameters

// The parameters p1, p2, …, pN, in the above syntaxes are options. We can write an arrow function without any parameters.

// const greet = () => "Hello World!";

// We can also write using block body using braces and return keyword −

// const greet = () => {return "Hello World!";};

// console.log(greet());




// Arrow Function with Parameters
// Example: Arrow function with a single parameter

// The below code demonstrates that when you need to pass a single parameter to the function, you don't need to write parameters in the pair of parenthesis.
// Open Compiler


// const divide = x => 20 / x;
// let res = divide(2);
// console.log(res);






// Arrow Function as an Expression

// The arrow function can easily be used as an expression due to its shorter syntax.
// Example

// In the below code, we use the ternary operator, and based on the boolean value of the 'isMul' variable, we assign the arrow function expression to the 'func' variable.

// After that, we use the 'func' variable to call the arrow function stored in that.

// let isMul = false;
// const func = isMul ? () => {
//     let res = 5 * 5;
//         return res
//       } : () => {
//     let res = 5 + 5;
//         return res
// };
// console.log(func());



// Benefits of Using Arrow Functions

//1. Here, we have explained the benefits of using the arrow functions.

//2 .    Shorter syntax − The arrow function decreases the code size to define the function.

// 3.    Implicit return − To return the resultant value of the expression from the arrow function containing only a single statement, developers don't need to use the return keyword.

//4.     Ease to use as expression − The arrow function can be easily used as an expression.




// Limitations of Using Arrow Function

// There are some limitations of arrow functions, which we have explained below.

// 1.    No Arguments − The arrow function can't have an arguments object.

//  2.   No prototype − The arrow function can't have a prototype property as it is stored in the variable as an expression.

//  3.   No new keyword − The arrow function can't be used with the new keyword to create its object.







//Function Invocation



// Object Method Invocation

// We haven't covered JavaScript objects yet in this tutorial but we will cover it in upcoming chapters. Here, let's learn the object method invocation in short.

// The JavaScript object can also contain the function, and it is called the method.


// Following is the syntax below to invoke the JavaScript object method.

// obj.func();

// In the above syntax, the 'obj' is an object containing the method, and 'func' is a method name to execute.
// Example

// In the example below, we have defined the 'obj' object containing the 'name' property and the 'getAge()' method.

// Outside the object, we access the method by the object reference and invoke the method. In the output, the method prints 10.


// const obj = {
//     name: "John",
//     getAge: () => {
//       return 10;
//     }
// }
// console.log(obj.getAge());




// Other methods to invoke the function

// JavaScript contains two special methods to invoke the function differently. Here, we have explained each method in the table below.
// Method 	Function invocation 	Arguments

// Call() 	Immediate invocation 	Separate arguments
// The syntax of Function call() method in JavaScript is as follows −

// funcName.call(thisArg, arg1, arg2, ... argN);


// thisArg − It represents the context for the function. It is an object whose properties or methods we need to access using the 'this' keyword inside the function.

// arg1, arg2, ... argN − It is N arguments to pass to the function. They are optional arguments.





// Apply() 	Immediate invocation 	Array of arguments


// The syntax of the Function apply() method in JavaScriot is as follows −

// func.apply(thisArg, [arg1, arg2, ... argN]);

// Parameters

//     thisArg − The 'thisArg' grument represents the function context. It is an object whose properties are needed to access the reference function using the 'this' keyword.

//     [arg1, arg2, ... argN] − They are arguments to pass to the function.




// In JavaScript, there are two special methods to call (or invoke) a function: call() and apply(). Both methods let you run a function immediately, but they handle the arguments (the information you give to the function) differently.


// The Function call() and apply() methods are very similar, but the main difference between them is function apply() method takes a single array containing all function arguments, and the function call() method takes individual arguments.

// Same as the Function call() method, we can use the apply() method to manipulate the this value and can assign an orbitrary object to this. 




// call() Method
// How it works: You use this method to call a function right away.
// Arguments: You give the arguments one by one, separated by commas.

// function greet(name, age) {
//   console.log("Hello " + name + ", you are " + age + " years old.");
// }

// greet.call(null, "Alice", 10); // Output: Hello Alice, you are 10 years old.



// apply() Method
// How it works: You also use this method to call a function right away.
// Arguments: You give the arguments as an array (a list of items).
// Example:

// JavaScript

// function greet(name, age) {
//   console.log("Hello " + name + ", you are " + age + " years old.");
// }

// greet.apply(null, ["Bob", 9]); // Output: Hello Bob, you are 9 years old.




// Understanding this
// In JavaScript, this refers to the object that is currently calling the function. Sometimes, you might want to call a function without any specific object context. In such cases, you can use null to indicate that there’s no specific object to bind to this.

// Why Use null?
// No Specific Object: If you don’t need to bind the function to any particular object, you can use null.
// Simple Example: It keeps things simple when you just want to call the function without worrying about the context.



// Example with null

// function greet(name, age) {
//   console.log("Hello " + name + ", you are " + age + " years old.");
// }

// Using call() with null
// greet.call(null, "Alice", 10); // Output: Hello Alice, you are 10 years old.

// Using apply() with null
// greet.apply(null, ["Bob", 9]); // Output: Hello Bob, you are 9 years old.



// Example with an Object
// If you wanted to use a specific object, you could replace null with that object.

// let person = {
//   name: "Charlie",
//   age: 8
// };

// function greet() {
//   console.log("Hello " + this.name + ", you are " + this.age + " years old.");
// }

// Using call() with an object
// greet.call(person); // Output: Hello Charlie, you are 8 years old.

// Using apply() with an object
// greet.apply(person); // Output: Hello Charlie, you are 8 years old.

// In summary, null is used when you don’t need to bind the function to any specific object. It keeps the function call simple and straightforward.





// Absolutely! While modern JavaScript development often relies on more concise techniques like arrow functions and the spread operator, the call() and apply() methods still have their place. Let’s explore when developers might use them:

// Legacy Codebases:
// Older codebases or libraries might still use call() and apply().
// Developers maintain and update these systems, so familiarity with these methods is essential.
// Dynamic Context Binding:
// Sometimes you need to invoke a function with a specific context (i.e., value of this).
// call() and apply() allow you to set this explicitly.
// Useful when working with event handlers, callbacks, or custom iterators.
// Function Borrowing:
// You can borrow methods from one object and apply them to another using call() or apply().
// For example, borrowing array methods for array-like objects.
// Variadic Functions:
// Functions that accept a variable number of arguments benefit from apply().
// You can pass an array of arguments to such functions.
// Performance Considerations:
// In some cases, call() and apply() might be faster than alternatives.
// However, modern engines optimize function calls, so the difference is minimal.
// Functional Programming:
// When composing functions, you might use call() or apply() to chain them together.
// Functional libraries sometimes rely on these methods.
// Remember, while these methods are still relevant, developers often prefer more concise and expressive syntax. But understanding call() and apply() remains valuable for maintaining existing code and handling specific scenarios. 😊🚀





 




