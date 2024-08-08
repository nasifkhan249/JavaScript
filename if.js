// Check if a number is odd or even:
// Write a function that takes a number as input and prints whether the number is odd or even.

// function OddEven (a){
//     if(a%2 === 0){
//         console.log("The number is Even");
        
//     }else if(a%2!==0){
//         console.log("The number is Odd");
        
//     }else{
//         console.log("Please enter a valid number");
        
//     }
// };

// OddEven(5);

// Check if a number is odd or even:






// Find the largest of two numbers:
// Write a function that takes two numbers as input and prints which one is larger, or if they are equal.


function largestNumber (a,b){
    if(a > b){
        console.log(`${a} এর সাইজ বড় ${b} এর থেকে`);
        
    }else if(a < b){
        console.log(`${b} এর সাইজ বড় ${a} এর থেকে`);
        
    }else if(a===b){
        console.log(`${a} এবং ${b} দুই জন এই সমান মুটকু`);
        
    }else{
        console.log("Enter a valid number");
        
    }
}

// largestNumber(10,1);





// Check if a number is positive, negative, or zero:
// Write a function that takes a number as input and prints whether the number is positive, negative, or zero.

function IsPositiveOrNegativeOrZero(a){
    if(a>0){
        console.log(`${a} আরে বেটা আমি ধনাত্মক`);
        
    }else if(a<0){
        console.log(`${a} যা বেটা আমি মাইনাস`);
        
    }else if(a===0){
        console.log("ভাই আমি জিরো");
        
    }else{
        console.log("ভাই তুমি সঠিক নাম্বার দেও");
        
    }
}
// IsPositiveOrNegativeOrZero("0")


// Check if a year is a leap year:
// Write a function that takes a year as input and prints whether the year is a leap year or not.
// If the year is divisible by 4, check further.
// If the year is divisible by 100, check if it is also divisible by 400.
// If the year is divisible by 400, it is a leap year.
// If the year is not divisible by 400 but divisible by 100, it is not a leap year.
// If the year is not divisible by 100 but divisible by 4, it is a leap year.
// If the year is not divisible by 4, it is not a leap year.

function isLeapYear (year){
//    if(year%4===0){
//         if(year%100===0){
//             if(year%400===0){
//                 console.log("vai ami leap year");
                
//             }else{
//                 console.log("vai ami leap year nh");
                
//             }
//         }else{
//             console.log("vai ami leap year nh");
            
//         }
//    }else{
//         console.log("vai ami leap year nh");
        
//    }

    if((year%4===0 && year%100!==0) || (year%400===0)){
        console.log(`${year} vai ami leap year`);
        
    }else{
        console.log(`${year} vai ami leap year nh`);
        
    }
}

// isLeapYear(2028);

// Check if a person is eligible to vote:
// Write a function that takes a person’s age as input and prints whether they are eligible to vote (18 years or older).

function isVoter(age){
    if(age >=18 && age <=29){
        console.log("tr vote dewar boyosh hoya gase taile biya daw koralah");
        
    }else if(age >=30){
        console.log("tui buirah vote des nh ken???biya daw akon kor boyosh tw kom hoyse nh");
        
    }else{
        console.log("hooop bedah durat jah ahonow tw dim thaikka futsos nh abr vote dite aisos abr biyaw korte chas");
        
    }
}

isVoter(10)