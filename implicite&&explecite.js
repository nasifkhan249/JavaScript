//* let x=!'null' && 10;
//* console.log(x);
//* let x;
// if(x= 'hello' && 10){
//    return console.log(x);
// }
// console.log(x);

// let x=10&&null;
// console.log(x);


//* implicitly
//* let x=1;
//* let y='10ab';
//*  console.log(x-y);
//* implicitly


//* ⁡⁢⁢⁣Converting to Number (Implicit conversion)⁡
//* ⁡⁢⁣⁣When you use the string values containing the digits with the arithmetic operators except for the '+' operator, it converts operands to numbers automatically and performs the arithmetic operation, which you can see in the example below.⁡

//*  ⁡⁣⁣⁢Boolean values are also gets converted to a number.⁡
//*  '100' / 50; // Converts '100' to 100
//*  '100' - '50'; // Converts '100' and '50' to 100 and 50
//*  '100' * true; // Converts true to 1
//*  '100' - false; // Converts false to 0
//*'tp' / 50 // converts 'tp' to NaN⁡




//*  ⁡⁢⁢⁣Converting to Boolean (Implicit conversion)⁡

//*  ⁡⁢⁢⁢When you use the Nullish (!!) operator with any variable, it implicitly converts its value to the boolean value⁡.

//*  num = !!0; // !0 = true, !!0 = false
//*  num = !!1; // !1 = false, !!1 = true
//*  str = !!""; // !"" = true, !!"" = false
//*  str = !!"Hello"; // !"Hello" = false, !!"Hello" = true


//*  ⁡⁢⁢⁣Null to Number (Implicit conversion)⁡

//*  In JavaScript, the null represents the empty. So, null automatically gets converted to 0 when we use it as an operand of the arithmetic operator.

//*  let num = 100 + null; // Converts null to 0
//*  console.log(num);
//*  num = 100 * null;
//*  console.log(num);  // Converts null to 0


//*  Undefined with Number and Boolean (Implicit conversion)

//*  Using the undefined with the 'number' or 'boolean' value always gives the NaN in the output. Here, NaN means not a number.


//*explicitly
//*let x=1;
//*let y=parseInt('10ab');
//*let y='10ab';
//*y=parseInt(y);
//*console.log(y);
//*console.log(x-parseInt(y));
//*explicitly


//* explicit
//*  let num;
//*  num = +"200";
//*  console.log(num);
 //*  Using the unary operator for convert a string into a number


//* Converting to Boolean (Explicit conversion)

//* You can use the Boolean() constructor to convert the other data types into Boolean.

//*  Boolean(100); // Converts number to boolean (true)
//*  Boolean(0); // 0 is falsy value (false)
//*  Boolean(""); // Empty string is falsy value (false)
//*  Boolean("Hi"); // Converts string to boolean (true)
//*  Boolean(null); // null is falsy value (false)

//* You can use the Boolean() constructor to convert values to the Boolean. All false values like 0, empty string, null, undefined, etc., get converted to false and other values are converted to true.

//*Converting Date to String/Number

//* You can use the Date object's Number() constructor or getTime() method to convert the date string into the number. The numeric date represents the total number of milliseconds since 1st January 1970.

//* Follow the syntax below to convert the date into a number.

// *Number(date);
// *OR
// *date.getTime();


//* You can use the String() constructor or the toString() method to convert the date into a string.

//* Follow the syntax below to convert the date into the string.

//* String(date);
//* OR
//* date.toString();
