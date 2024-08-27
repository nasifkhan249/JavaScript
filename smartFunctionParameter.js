// JavaScript - Smart Function Parameters

// The concept of smart function parameters in JavaScript is a way to make a function adaptable to different use cases. It allows the function to handle the different kinds of arguments passed to it while invoking it.

// In JavaScript, the function is an important concept for reusing the code. In many situations, we need to ensure the function is flexible to handle different use cases.


// Default Function Parameters

// function division (a = 100, b = 50) {
    // Function body
//  }

// JavaScript Rest Parameter

// When the number of arguments that need to pass to the function is not fixed, you can use the rest parameters. The JavaScript rest parameters allow us to collect all the reaming (rest) arguments in a single array. The rest parameter is represented with three dots (...) followed by a parameter. Here this parameter works as the array inside the function.
// Syntax

// Follow the below syntax to use the rest parameters in the function declaration.

// function funcName(p1, p2, ...args) { 
    // Function Body;
// }
// In the above syntax, 'args' is rest parameter, and all remaining arguments will be stored in the array named args.




// JavaScript Destructuring or Named parameters

// You can pass the single object as a function argument and destructuring the object in the function definition to get only the required values from the object. It is also called the named parameters, as we get parameters based on the named properties of the object.
// Syntax

// Follow the below syntax to use the destructuring parameters with the function.

// function funcName({ prop1, prop2, ... }) { }

// In the above syntax, prop1 and prop2 are properties of the object passed as an argument of the function funcName.
// Example

// In the example below, we have defined the 'watch' object containing three properties and passed it to the printWatch() function.

// The printWatch() function destructuring the object passed as an argument and takes the 'brand' and 'price' properties as a parameter. In this way, you can ignore the arguments in the function parameter which are not necessary.
// Open Compiler


      function printWatch({ brand, price }) {
         return "The price of the " + brand + "\'s watch is " + price;
      }

      const watch = {
	     brand: "Titan",
         price: 10000,
         currency: "INR",
      }
     console.log(printWatch(watch));

// Output

// The price of the Titan's watch is 10000

// The above three concepts give us flexibility to pass the function arguments.
