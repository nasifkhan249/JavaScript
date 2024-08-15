// for(let i =10 ; i>0 ;i--){
//     if(i%2===0){
//         console.log(i);
        
//     }
    
// }

// for (let i =10; i==10;i++){
//     console.log(i);
    
// }

// for(let i =1;i<=100;i++){
//     
// }

// for(let i=1;i<=20;i++){
//     if(i%2!=0){
//         console.log("odd",+" " + i);
        
//     }else{
//         console.log('even'+" " + i);
        
//     }
// }



// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
    
// }



// Print Numbers from 1 to 10: Write a JavaScript code to print numbers from 1 to 10 using a for loop.


//using return inside the for loop that why here using function and return must be used inside a function.
// function myCount(){
//     let arr=[];
//     for(let i=1;i<=10;i++){
//         arr.push(i);
//     }
//     return arr;
// }


// let x = myCount();
// console.log(x);

// for (let i=1;i<=10;i++){
//     console.log(i);
    
// }


// Sum of Array Elements: Given an array of numbers, write a JavaScript code to find the sum of all elements using a for loop.

// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i = 0;i<=arr.length;i++){
//     sum+=i;
// }
// console.log(sum);


// Print Even Numbers: Write a JavaScript code to print all even numbers from 1 to 20 using a for loop.

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(`Even Numbers ${i}`);
//     }
// }

// Reverse an Array: Given an array, write a JavaScript code to print the elements in reverse order using a for loop.
// let arr=[1,2,3,4,5];
// for(let i =arr.length-1;i>=0;i--){
//    console.log(arr[i]);
   
// }
// Factorial of a Number: Write a JavaScript code to calculate the factorial of a given number using a for loop.
// let num=5;
// let fac=1;
// for(let i=num;i>0;i--){
//     fac*=i;
// }
// console.log(fac);

// Print a Pattern: Write a JavaScript code to print the following pattern using nested for loops:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let i=1;i<=5;i++){
//     let str="";
//     let j;
//     for(j=1;j<=5;j++){
//         `j=${str=str+j+" "}`
//     }
//     console.log(str);
    
    
// }

// let n=10;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+=j+" ";
        
//     }
//     console.log(str);
// }


// Multiplication Table: Write a JavaScript code to print the multiplication table from 1 to 10 using nested for loops.
// for(let i =1;i<=10;i++){

//     let row="";
//     for(let j = 1;j<=10;j++){
//        row+=(i*j)+"\t";
//     }
//     console.log(row);
    
    
// }

// 2D Array Printing: Given a 2D array, write a JavaScript code to print all the elements using nested for loops.
// let arr=[[1,2,3,4,5]]
// for(let i =0;i<arr.length;i++){
//     for(let j = 0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
        
//     }
// }

// Pattern Printing: Write a JavaScript code to print the following pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str+="*"+" "
//     }
//     console.log(str);
    
// }

// Sum of 2D Array Elements: Given a 2D array, write a JavaScript code to find the sum of all elements using nested for loops.
// let arr=[[100,2,10],[10,20,30]];

// for(let i =0;i<arr.length;i++){
//     let sum=0;
//     for(let j =0;j<arr[i].length;j++){
//         sum+=arr[i][j];
//     };
//     console.log(sum);
    
// }


// Transpose of a Matrix: Write a JavaScript code to find the transpose of a given 2D matrix using nested for loops.
// To find the transpose of a given 2D matrix using nested for loops in JavaScript, you can follow these steps:

// Create a function that takes a matrix as an argument.
// Initialize an empty array to store the transposed matrix.
// Use nested for loops to iterate through the matrix.
// Swap the rows and columns and store the result in the new array.
// Return the transposed matrix.

function transPose(matrix){
    let arr=[];
    for(let i=0;i<matrix[0].length;i++){
        let newRow=[];
        for(let j=0;j<matrix.length;j++){
            newRow.push(matrix[j][i]);
        }
        arr.push(newRow)
    };
    return arr;
}

let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];


// console.log(transPose(originalMatrix));



// Chessboard Coordinates: Write a JavaScript code to generate and print the coordinates of a chessboard (8x8) using nested for loops.
// To generate and print these coordinates, you can use nested for loops. Here’s a step-by-step explanation:

// Create two arrays: One for the column labels (‘a’ to ‘h’) and one for the row numbers (‘1’ to ‘8’).
// Use nested for loops: The outer loop will iterate over the columns, and the inner loop will iterate over the rows.
// Print the coordinates: Combine the column label and row number to form the coordinate and print it.

function chessBoard(a,b){
    let sum="";
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            sum+= a[i]+b[j]+" ";
        }
        
    }
    return sum;
}

let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    // Array of row numbers
let rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

// let x=chessBoard(columns,rows);
// console.log(x);







// Diagonal Elements of a Matrix: Given a square matrix, write a JavaScript code to print the diagonal elements using nested for loops.

function printDiagonals(matrix) {

    let n=matrix.length
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===j){
                console.log(matrix[i][j]);
                
            }
        }
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i+j===n-1){
                console.log(matrix[i][j]);
            }
        }
    }
}





let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// printDiagonals(matrix);


let age =Number(prompt(`Enter you'r age`));

while(age < 18){
    age=Number(prompt("You'r age is not suitable for enter this site"));
};

if(age>18){
   alert('Welcome to this site');
}


