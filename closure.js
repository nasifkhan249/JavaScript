// What is Closure?

// The concept of closures in JavaScript allows nested functions to access variables defined in the scope of the parent function, even if the execution of the parent function is finished. In short, you can make global variables local or private using the closures.

// A JavaScript closure is basically a combination of the function and its lexical environment. This allows an inner function to access the outer function scope. A closure is created every time a function is created at the function creation time.

// Before you start learning the concept of closures, you need to know the concept of lexical scoping, nested functions, and returning functions.



// Lexical Scoping

// In JavaScript, the lexical scoping is a concept in which the scope of the variables is determined at the code compilation time based on the structure of the code. For example, the nested function can access the variables from the parent function's scope is called lexical scoping.


// Nested Function

// You can define the function inside the function, and the inner function is called the nested function. Let's learn it via the example below.
// Example

// In the example below, we have defined the inner() function inside the outer() function. Also, the inner() function is executed inside the outer() function.

// When we execute the outer() function, it also executes the inner() function, a nested function.

// function outer() {
//     console.log("The outer function is executed! <br>");
//     function inner() {
//         console.log("The inner function is executed! <br>")
//     }
//     inner();
//  }
//  outer();






//Returning Function

// When any function returns the function instead of a value or variable, it is called the returning function. Let's look at the example below.
// Example

// In the below code, the outer() function returns the function definition, and we store it in the 'func' variable. After that, we use the 'func' variable to invoke a function stored in that.
// function outer() {
//   console.log("The outer function is executed! <br>")
//    return function inner() {
//     console.log("The inner function is executed! <br>")
//    }
// }
// const func = outer();
// func();
// func();





// A Counter Dilemma

// For example, you create the counter to increment and decrement the variable. As shown below, you need to use the global variable for the counter.
// Example

// In the example below, the 'cnt', a global variable is initialized with 100. Whenever the decrement() function is executed, it decreases the value of the 'cnt' variable by 1.
// Open Compiler


    //   var cnt = 100;
    //   function decrement() {
    //      cnt = cnt - 1;
    //      console.log(cnt);
    //   }
    //   decrement();
    //   decrement();
    //   decrement();


// Output

// The value of the cnt is: 99
// The value of the cnt is: 98
// The value of the cnt is: 97

// The above code perfectly works as a decrement counter, but the problem is 'cnt' variable can be accessed in the code anywhere, and any part of the code can change it without executing the decrement() function.

// Here, JavaScript closure comes into the picture.
// Example: JavaScript Closures

// The counter() function returns the decrement() function in the example below. The 'cnt' variable is defined inside the counter() function rather than in the global scope.

// The decrement() function decreases the value of the 'cnt' by 1 and prints in the output.

// The 'func' variable contains the decrement() function expression. Whenever you execute the func(), it calls the decrement() function.
// Open Compiler


    //   function counter() {
    //      let cnt = 100; // Works as a global variable for the decrement function.
    //      return function decrement() {
    //         cnt = cnt - 1;
    //         return cnt;
    //      }
    //   }
    //   const func = counter(); // Returns the decrement() function expression
    //   console.log(func())
    //   console.log(func());
    //   console.log(func());


// Output

// The value of the cnt is: 99
// The value of the cnt is: 98
// The value of the cnt is: 97

// Now, let's remember the definition of closure again. It says that the nested function can access the variables from the outer function's scope even if the execution of the outer function is finished.

// Here, the execution of the counter() function is finished. Still, you can call the decrement() function and access the 'cnt' variable with an updated value.

