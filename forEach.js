// let arr=[1,2,3,4,5,6,7,8,9,10];


// arr.forEach(function(el){
//     if(el%2===0){
//         console.log(el,"even");
        
//     }else{
//         console.log(el,"odd");
        
//     }
// });


// let arr=["apple","orange","mango","banana"];

// arr.forEach(capitalize);

// function capitalize(element,index,array){
//    console.log( array[index]=element.charAt(0).toUpperCase()+element.slice(1));
   
// }



// 1.Print Each Element: Write a function that prints each element of an array using forEach.

function fruit(){
   let fruits=["apple","orange","mango","banana"];

fruits.forEach(function(element,index,array){
      console.log(`iteration start`);
      console.log(`index: ${index} element: ${element}`);
      console.log(array);
      console.log(`iteration end`);    
});
}
// fruit()




// 2.Sum of Elements: Calculate the sum of all elements in an array using forEach.

function count(){
   const num=[1,2,3,4,5,6];
   let sum=0;

   num.forEach(function(element){
      sum+=element;
   });
   console.log(sum);
   console.log(num);
   
   
};

// count()


// 3.Double Each Element: Create a new array where each element is double the value of the original array using forEach.


function double(){
   const num=[1,2,3,4,5,6,7];
   let newArr=[];

   num.forEach(function(element){
      newArr.push(element*element);
   });
   console.log(newArr);
   
}

// double();


// 4.Convert to Uppercase: Convert all strings in an array to uppercase using forEach.

function upper(){
   const fruit=['apple','mango','orange','banana','lichi','lemon'];

   fruit.forEach(function(element,index,array){
      console.log(element.toUpperCase());
      
   });
   console.log(fruit);
   
};

// upper();

// 5.Find Maximum Value: Find the maximum value in an array using forEach.

function max(){
   const num=[20,1,2,3,4,5];
   let max=[0];
   num.forEach(function(element){
      if(element>max){
         max=element
      }
   });
   console.log(max);
   
   
}

// max();

// const num=[1,2,3,4,5];

// console.log(Math.max(...num));


// 20.Count Occurrences: Count the number of times a specific element appears in an array using forEach.

function track(){
   const num=[1,2,3,4,5,6,7,8,9,10,4,8,10,5];
   let count=0;
   num.forEach(function(element){
      if(element===5){
         count++;
      }
   });
   console.log(count);
   
}

// track();


// 6.Filter Even Numbers: Create a new array containing only the even numbers from the original array using forEach.
function even(){
   const num=[1,2,3,4,5,6,7,8,9,10,100];
   const newArr=[];

   num.forEach(function(element){
      if(element%2===0){
         newArr.push(element);
      }
   });

   console.log(newArr);
   
}

// even();

// 7.Reverse Strings: Reverse each string in an array using forEach.

function reverse(){
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   const newArr=[];
   fruits.forEach(function(element,index,array){
      // newArr.push(element.split('').reverse().join(''));
      
      
      
      
      


      // array[index]=element.split('').reverse().join('');
      // array: This is the array you are working with (e.g., ["Banana", "Orange", "Apple", "Mango"]).
      // index: This is the position in the array where you want to place the new value.
      // = ...: This assigns the new value to the specified position in the array.



   //   let x= element.split('').reverse().join('');
   //   console.log(x);
   

      //accessing the first element to the array 
         let x=element.split(' ').join('');
            newArr.push(x)
      //accessing the first element to the array 
     
   });

   //accessing the first element to the array 
   let y=newArr[0];
   console.log(y);
   //accessing the first element to the array 
   
   // console.log(fruits);
   

   console.log(newArr);
   
}

// reverse();


// 8.Calculate Average: Calculate the average of all numbers in an array using forEach.
function average(){
   const num=[1,2,3,4,5,6,7,8,9,10];
   let sum=0;

   num.forEach(function(element){
      sum+=element;
   });

   
   let avg=sum/num.length;
   console.log(avg);
   
   
}

// average()



// 9.Remove Duplicates: Remove duplicate elements from an array using forEach.
function removeDuplicates(num){
   const newArr=[];

   num.forEach(function(element){
      if(!newArr.includes(element)){
         newArr.push(element);
      }
   });
   return newArr;
   
}

function duplicate(num){
   let newArr=[];
   let newSet=new Set(num);

   newSet.forEach(function(element){
      newArr.push(element);
   });
   return newArr
}
// const num=[1,2,3,4,5,6,7,8,9,10,4,6,3,6,8,9,3,5,9];
// console.log(removeDuplicates(num));


// 10.Create Object from Array: Convert an array of key-value pairs into an object using forEach.

function convert(){
   const arr=[["name", "Alice"], ["age", "25"], ["city", "Wonderland"]];

   const newObj={};
   
   arr.forEach(function(element){
      const key=element[0]
      // console.log(key);
      const value=element[1];
      // console.log(value);
      
      newObj[key]=value;
      
   });
   
  console.log(newObj);
  
   
   
}

// convert()



// 11.Find Index of Element: Find the index of a specific element in an array using forEach.
   function idex(){
      let result=[];
      const fruits = [["Banana", "Orange", "Apple", "Mango"],["Banana", "Orange", "Apple", "Mango"]];

      fruits.forEach(function (element,index,array){
         array[index]=element.forEach(function(el,index){
            let x = el.split("").join('') + "" + index;
            result.push(x);
         })
      });
      console.log(result);
      
   }
   // idex();


// 12.Check for Prime Numbers: Check if each number in an array is a prime number using forEach.
//   function isPrime(num){
//    if(num <=1){
//       return false;
//    }
//    for(let i =2; i<=Math.sqrt(num); i++){
//       if(num%i===0){
//          return false;
//       }
//    }
//    return true;
//   }

//   let numbers=[2,3,4,5,6,7,8,9,10,11];

//   numbers.forEach(function (num){
      
//       if(isPrime(num)){
//          console.log(`This is prime number ${num}`);
//       }else{
//          console.log(`This is not prime number ${num}`)
//       }
      
//   });

  
// 18.Capitalize First Letter: Capitalize the first letter of each string in an array using forEach.


function capitalize(){
   let arr=["banana", "orange", "apple", "mango"];
   let newArr=[];
   arr.forEach(function(element,index,array){
      let x=array[index]=element.charAt(0).toUpperCase();
      let y=array[index]=element.slice(1);

      let z=x + y;
      newArr.push(z);    
   });

   return newArr;
}

console.log(capitalize());
