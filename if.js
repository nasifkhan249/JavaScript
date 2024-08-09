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

// isVoter(10)



// Grade Calculator:
// Write a function that takes a student’s score as input and prints their grade based on the following criteria:
// 90 and above: A
// 80 to 89: B
// 70 to 79: C
// 60 to 69: D
// Below 60: F


function gradeCal(num){
    if(num<0 || num >=101){
        console.log("Not Valid Number");
        
    }else if(num>=90 && num <=100){
        console.log("Grade is A");
        
    }else if(num>=80 && num <=89){
        console.log("Grade is B");
        
    }else if(num>=70 && num<=79){
        console.log("Grade is C");
        
    }else if(num>=60 && num<=69){
        console.log("Grade is D");
        
    }else{
        console.log("Garde is F");
        
    }
};

// gradeCal(69)




// Temperature Check:
// Write a function that takes a temperature in Celsius as input and prints a message based on the temperature:
// Above 30: “It’s hot outside!”
// 20 to 30: “The weather is nice.”
// 10 to 19: “It’s a bit chilly.”
// Below 10: “It’s cold outside!”

function temperature(temp){
    if(temp>30){
        console.log("It's hot outside");
        
    }else if(temp>=20 && temp <=30){
        console.log("The weather is nice");
        
    }else if(temp>=10 && temp <=19){
        console.log("It's a bit chilly");
        
    }else{
        console.log("It's cold outside");
        
    }
};
// temperature(15);


// Number Range:
// Write a function that takes a number as input and prints a message based on the range the number falls into:
// 1 to 10: “The number is between 1 and 10.”
// 11 to 20: “The number is between 11 and 20.”
// 21 to 30: “The number is between 21 and 30.”
// Above 30: “The number is greater than 30.”


function numberRange(num){
    if(num<0 || num>100){
        console.log(num+" "+"Not Valid Number");
        
    }
    else if(num>=1 && num<=10){
        console.log(num+" "+"The number is between 1 and 10");
        
    }else if(num>=11 && num<=20){
        console.log(num+" "+"The number is between 11 and 20");
        
    }else if(num>=21 && num<=30){
        console.log(num+" "+"The number is between 21 and 30");
        
    }else{
        console.log(num+" "+"The number is greater than 30");
        
    }
}

// numberRange(101)



// Day of the Week:
// Write a function that takes a number (1 to 7) as input and prints the corresponding day of the week:
// 1: “Monday”
// 2: “Tuesday”
// 3: “Wednesday”
// 4: “Thursday”
// 5: “Friday”
// 6: “Saturday”
// 7: “Sunday”
// Any other number: “Invalid input”

function week(num){
    if(num===1){
        console.log("Monday");
        
    }else if(num===2){
        console.log("Tuesday");
        
    }else if(num===3){
        console.log("wednesday");
        
    }else if(num===4){
        console.log("Thursday");
        
    }else if(num===5){
        console.log("Friday");
        
    }else if(num===6){
        console.log("Saturday");
        
    }else if(num===7){
        console.log("Sunday");
        
    }else{
        console.log("Invalid input");
        
    }
}

// week(4)

// Discount Calculator:
// Write a function that takes the total amount of a purchase as input and prints the discount based on the following criteria:
// Above $100: “You get a 20% discount.”
// $50 to $100: “You get a 10% discount.”
// Below $50: “No discount available.”



function total(amount){
    if(amount>100){
        console.log("You get a 20% discount");
        
    }else if(amount>=50 && amount<=100){
        console.log("You get a 10% discount");
        
    }else{
        console.log("No discount available");
        
    }
}

// total(49)