// Day of the Week: Write a program that takes a number (1-7) and prints the corresponding day of the week. For example, 1 for Sunday, 2 for Monday, etc.

function weeks(num){
    switch(num){
        case 0 :
            console.log("Sunday");
            break;
        case 1 : 
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
        case 6 :
            console.log("Saturday");
            break;
        default :
            console.log("Enter a valid Number");
    }
};

// weeks(new Date().getDay());


// Traffic Light: Create a program that takes a string representing a traffic light color (“red”, “yellow”, “green”) and prints the appropriate action (“Stop”, “Prepare to stop”, “Go”).
function traffic(color){
    switch(color){
        case "red" :
            console.log("Stop");
            break;
        case "yellow" :
            console.log("Prepare to stop");
            break;
        case "green" :
            console.log("Go");
            break;
        default :
            console.log("Enter a valid action");
    }
};

// traffic("yellow");



// Grade Converter: Write a program that converts a numerical grade (0-100) into a letter grade (A, B, C, D, F) based on a grading scale.


function gradeConverter(grade){
    let letterGrade;
    switch(true){
        case (grade>=90 && grade<=100) :
            letterGrade = 'A+';
            break;
        case (grade>=80 && grade <=89) :
            letterGrade = 'A';
            break;
        case (grade>=70 && grade <=79) :
            letterGrade = 'B';
            break;
        case (grade>=60 && grade <=69) :
            letterGrade = 'C';
            break;
        case (grade>=50 && grade <=59) :
            letterGrade = 'D';
            break;
        case (grade >=0 && grade<=49)  :
            letterGrade = 'F';
            break;
        default :
            letterGrade = "Invalid grade number";

    };
    return letterGrade;
};

// let x=gradeConverter(49)
// console.log(x);


// Month Name: Create a program that takes a number (1-12) and prints the corresponding month name. For example, 1 for January, 2 for February, etc.

function month (num){
    let monthName;
    switch(num){
        case 0 :
            monthName = 'January';
            break;
        case 1 :
            monthName = 'February';
            break;
        case 2 :
            monthName = 'March';
            break;
        case 3 :
            monthName = 'April';
            break;
        case 4 :
            monthName = 'May';
            break;
        case 5 :
            monthName = 'June';
            break;
        case 6 :
            monthName = 'July';
            break;
        case 7 :
            monthName = 'August';
            break;
        case 8 :
            monthName = 'September';
            break;
        case 9 :
            monthName = 'October';
            break;
        case 10 :
            monthName = 'November';
            break;
        case 11 :
            monthName = 'December';
            break;
        default :
            monthName = 'Invalid Year';
    };
    return monthName;
}

// let x = month(new Date().getMonth());
// console.log(x);



// Simple Calculator: Write a program that takes two numbers and an operator (+, -, *, /) and performs the corresponding arithmetic operation.


function Calculator(num1,num2,operator){
    let result;
    switch(operator){
        case '+' :
            result = num1 + num2;
            break;
        case '-' :
            result = num1 - num2;
            break;
        case '*' :
            result = num1 * num2;
            break;
        case '/' :
            result = num1 / num2;
            break;
        default :
            result = 'Invalid operator';
    };

    return result;
}

// let x = Calculator(10,20,'/');
// console.log(x);




// Spring: March 1 to May 31; – Summer: June 1 to August 31; – Autumn (Fall): September 1 to November 30 – Winter: December 1 to February 28
// Season Finder: Create a program that takes a month number (1-12) and prints the corresponding season (“Winter”, “Spring”, “Summer”, “Fall”).
function season(name){
    let result;

    switch(name){
        case 11 :
        case 0  :
        case 1  :
            result = 'Winter';
            break;
        case 2 :
        case 3 :
        case 4 :
            result = 'Spring';
            break;
        case 5 :
        case 6 :
        case 7 :
            result = 'Summer';
            break;
        case 8  :
        case 9  :
        case 10 :
            result = 'Fall';
            break;
        default :
            result = 'Invalid month';

        
    };
    return result;
};

// let x = season(new Date().getMonth());
// console.log(x);


// Fruit Price: Write a program that takes the name of a fruit and prints its price per kilogram. Use a few example fruits like “apple”, “banana”, “cherry”.


function fruits(name){
    let perKg
    switch(name.toLowerCase()){
        case 'apple' :
            perKg = '$5.00';
            break;
        case 'banana' :
            perKg = '$4.00';
            break;
        case 'cherry' :
            perKg = '$3.00';
            break;
        case 'mango' :
            perKg = '$2.00';
            break;
        case 'orange' :
            perKg = '$1.00';
            break;
        default :
            perKg = 'Invalid perKg';
    };
    return perKg;
}

// let x = fruits('BANANA');
// console.log(x);


// Animal Sound: Create a program that takes the name of an animal and prints the sound it makes. For example, “dog” for “bark”, “cat” for “meow”.


// Browser Detection: Write a program that takes the name of a web browser (“Chrome”, “Firefox”, “Safari”, “Edge”) and prints a message about its popularity or a fun fact.
// Holiday Greeting: Create a program that takes the name of a holiday (“Christmas”, “Halloween”, “Eid”) and prints a corresponding greeting message.