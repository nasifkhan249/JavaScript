let car = {
    brand: "OD",
    model: "Q7",
    color: "Black",
 }

 for(let x in car){
    // console.log(`${x}:${car[x]}`);
    
 }


 let str = "Hello";

 for(let x in str){
    // console.log(str[x]="he");    
 }


//  Problem 1: List All Properties and Values
//  Task: Create an object representing a car with properties like make, model, and year. Use a for…in loop to list all the properties and their values.



function list(obj){

    for(let x in obj){
      console.log( `${x} : ${obj[x]}`);
    }
}

// let obj={
//     make : "Nasif",
//     model : "Nk",
//     year : 2024
// };

// list(obj);


// Problem 2: Count Properties
// Task: Create an object representing a book with properties like title, author, and pages. Use a for…in loop to count the number of properties in the object.

function count(obj){
    let count=0;
    for(let x  in obj){
        // if(obj[x]==="Name of title"){
            count++
        // }
    }
    return count;
}

let obj={
    title : "Name of title",
    author : "Nasif Khan",
    pages : 12,
}

// console.log(count(obj));


// Problem 3: Sum of Values
// Task: Create an object representing a shopping cart with items and their prices. Use a for…in loop to calculate the total price of all items.




function sum (obj){
    let sum=0;
    for(let x in obj){
        sum+=obj[x];
    }
    return sum;
}

const shoppingCart = {
    apple: 1.5,
    banana: 2.0,
    orange: 1.75
};

// console.log(sum(shoppingCart));


// Problem 4: Uppercase Property Names
// Task: Create an object representing a student with properties like name, grade, and school. Use a for…in loop to print all property names in uppercase.

function upperCase(obj){
    for(let x in obj){
        console.log(`${x.toLocaleUpperCase()} : ${obj[x]}`);
    }
}

let student={
    name : "nasif",
    grade : 3.5,
    school : "Anjuman adarsha govt high school",
}

// upperCase(student);


// Problem 5: Nested Objects
// Task: Create an object representing a library with properties for different sections (e.g., fiction, nonFiction). Each section should be an object with book titles and their authors. Use a for…in loop to list all books and their authors.

// const library = {
//     fiction: {
//       "The Great Gatsby": "F. Scott Fitzgerald",
//       "1984": "George Orwell"
//     },
//     nonFiction: {
//       "Sapiens": "Yuval Noah Harari",
//       "Educated": "Tara Westover"
//     }
//   };

//   for(let x in library){
//     // console.log(x +"======>>>>>" + library[x]);
    
//     for(let y in library[x]){
//         console.log(y + "=====>>>" + library[x][y]);
        
//     }
//   }


