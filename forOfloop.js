//1. Write a function that takes an array of numbers and returns the sum of all the elements.



function sum(arr){
    let sum=0;
    for(let num of arr){
        sum+=num;
    };
    return sum;
}


// let newArr=[1,2,3,4,5,6,7,8]

// console.log(sum(newArr));


//2. Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

function vowels(str){
    let count=0;
    for(let char of str){
        if(char==='a'){
            count++
        }else if(char==='e'){
            count++
        }else if(char==='i'){
            count++;
        }else if(char==='o'){
            count++;
        }else if(char==='u'){
            count++
        }
    }
    return count;
}

// let newStr="hello world";
// console.log(vowels(newStr));


//3. Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function oddEven(arr){
    let newArr=[];
    for(let num of arr){
        if(num%2===0){
           newArr.push(num);
        }
    }
    return newArr;
}

// let newNum=[1,2,3,4,5,6,7,8,9,10];
// console.log(oddEven(newNum));


//4. Write a function that takes a string and returns the string reversed.

function reverse(str){
    let n=[];
    for(let char of str){
        n.push(char)
    }
    n=n.reverse().join('')
   
   return n
}


// let newStr="hello";
// console.log(reverse(newStr));



//5. Write a function that takes an array and returns a new array with only the unique elements.


// function unique(arr){
//     let newArr=[];
//     for(let num of arr){
//         if(!newArr.includes(num)){
//             newArr.push(num);
//         }
//     }
//     return newArr;
// }

// let num=[1,2,3,4,5,6,7,8,9,10,1,2,4,6,7,9,4,5,6,3,2,8,10];
// console.log(unique(num));


function unique(arr){
    let newArr=[];
    let uniqSet=new Set(arr);
    // console.log(uniqSet);
    

    for(let num of uniqSet){
        newArr.push(num);
    };
    return newArr;
}

// let num=[1,2,3,4,5,6,7,8,9,10,1,2,4,6,7,9,4,5,6,3,2,8,10];
// console.log(unique(num));



// 6.Capitalize First Letter: Capitalize the first letter of each string in an array using forEach.
function upperCase(arr){
    let newArr=[];

    for(let char of arr){

       let x= char.charAt(0).toUpperCase();

        let y = char.slice(1);
        
        let z=x+y;
        newArr.push(z);
       
    }
    return newArr;
};

// let arr=["banana","apple","mango","lichi"];
// console.log(upperCase(arr));




// 7.Create Object from Array: Convert an array of key-value pairs into an object using for...Of.

function convert(arr){
    
    const newObj={};
    for(let data of arr){
        // console.log(data);
       let key= data[0];
       let value= data[1];

       newObj[key]=value;
    }

    return newObj;
}
// const arr=[["name", "Alice"], ["age", 25], ["city", "Wonderland"]];
// console.log(convert(arr));


// 8.Check for Prime Numbers: Check if each number in an array is a prime number using forEach.

function isPrime(num){
    if(num<1) return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    };
    return true;
}


function prime(arr){
    let result="";
    for(let num of arr){
        if(isPrime(num)){
            result+="This is prime number"+num + "\t"; 
        }else{
            result+="\t"+"This is not a prime number"+num + "\t";
        }
    }
    return result;

}

let numbers=[2,3,4,5,6,7,8,9,10];
// console.log(prime(numbers));

// console.log(Math.sqrt(2));


function cap(arr){
    let nam=[];
    for(let fName of arr){
      let x=  fName.charAt(0).toUpperCase();

      let y=fName.split('').join('').slice(1);

      let z=x+y;

      nam.push(z);
    }
    return nam;
}
// let arr=["apple","banana","mango","lichi"]
// console.log(cap(arr));
// cap(arr);


function re(arr){
    let back=[];

    for(let value of arr){
      let x= value.split('').reverse().join('');
      back.push(x);
      
    }
    return back;
}


// let arr=["apple","banana","mango","lichi"]
// console.log(re(arr));



