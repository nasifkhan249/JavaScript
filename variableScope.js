// JavaScript Variable Scope

// In JavaScript, the objects and functions are also variables.***

// The variable scope in JavaScript determines to the accessibility and visibility of the variable in different part of the code. The scope is the current context of the code execution. This means the variable scope is determined by where it is executed not by where it is declared.

// In JavaScript, the objects and functions are also variables. So the JavaScript variable scope also determines the accessibility or visibility of objects and functions also in the program.

// It is essential to learn the variable scope in JavaScript to write clear code and avoid naming conflicts.


//There are following types of variable scope in JavaScript.

// Block scope

// Function scope

// Local scope

// Global scope




// JavaScript Block Scope

// Before JavaScript ES6, there were only Global and Function scopes. ES6 introduced the let and const keywords. These keywords provide the Block Scope in JavaScript.

// The JavaScript variables defined using the 'let' and 'const' keyword inside a { } block can be accessible only inside the block in which they are defined.

// {
//    let x = 10; // x is accessible here
// }
//x is not accessible here

// A variable defined with var keyword is does not provide block scope.

// {
//    var x = 10; // x is accessible here
// }
//x is accessible here also



// Example

// In the below code, we have defined the test() function. In the function, we have added a { } block using the curly braces, and inside the { } block, we have defined the variable 'x'. The variable 'x' can't be accessible outside the { } block as it has a block scope.
// Open Compiler


    //   const output = document.getElementById("demo");
    //   function test() {
    //      {
    //         let x = 30;
    //         console.log(x);
    //      }
         // variable x is not accessible here
    //   }
    //   test();


// Output

// x = 30

// Whenever you define the variable using the 'let' or 'const' keyword inside the block, like loop block, if-else block, etc., it can't be accessible outside the block.






// JavaScript Local Scope

// The JavaScript local scope is a combination of the function and block scope. The JavaScript compiler creates a local variable when the function is invoked and deletes it when the function invocation completes.

// In short, variables defined inside the function or block are local to that particular scope. The function parameters are treated as local variables inside the function.
// Example

// In the below code, we have defined the variables inside the function using the var, let, and const keywords. All variables are local to the function. It can't be accessible outside the function.

// Similarly, we can define the looping variables in the local scope.
// Open Compiler

    //   function func() {
    //      let first = 34;
    //      var second = 45;
    //      const third = 60;

    //      output.innerHTML += "First -> " + first + "<br>";
         
    //      output.innerHTML += "Third -> " + third + "<br>";
    //   }
    //   output.innerHTML += "Second -> " + second + "<br>";
    //   func();










//Global

// When you define the variables anywhere inside the code without using the var, let, or const keywords, the variable automatically becomes the global variable and can be accessible anywhere inside the code.
// Example

// In the below code, we have defined the variable 'a' without using any keyword inside the function. Even if we have defined the variable in the function, it becomes global as we haven't used any keyword to define the function.

// The output shows that variable 'a' can be accessible inside or outside the function.

    //   function test() {
    //   a = 90;
    //       console.log("a -> Inside the function = " + a + "<br>")
    //     }
    //     test();
    //     console.log("a -> Outside the function = " + a + "<br>")


// Output

// a -> Inside the function = 90
// a -> Outside the function = 90
