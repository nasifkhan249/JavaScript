// Changing an Array Element

// const cars =['Saab','Volvo','BMW'];
// let car = cars[0]='Opel';
// console.log(cars); //output : [ 'Opel', 'Volvo', 'BMW' ]
// console.log(typeof car); //output : Opel //type:String


// Converting an Array to a String

// const fruits = ['Banana','Apple','Mango'];
// let fruit=fruits.toLocaleString();
// console.log(fruits);   //output:[ 'Banana', 'Apple', 'Mango' ]; type :Array
// console.log(fruit); //output:Banana,Apple,Mango type:String


// Arrays are objects

// const fruits=['Banana','Apple','Mango'];
// console.log(typeof fruits);


// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// const person=['john','Doe',45];
// console.log(person[0]);



// Accessing the First Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[0];
// console.log(fruit);


// Accessing the Last Array Element

// const fruits=['Banana','Apple','Mango',"John", "Doe", 46,"Saab", "Volvo", "BMW"];
// console.log(fruits[fruits.length-6]);



// Looping Array Elements

// const fruits=['Apple','Banana','Mango'];

// for(let i=0;i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.forEach((value,index)=> {
//     console.log(value,index);
// })

//Adding Array element

// const fruits=['Banana','Apple','Mango',"John", "Doe", 46,"Saab", "Volvo", "BMW",1,2,3,4,5,6,7,8,10,'Cat','Cow','Crow'];
// fruits[fruits.length]='lemon';
// let fruit=fruits.length;
// for(let i =0;i <fruit; i++){
//     console.log(fruits[i]);
// }



// const fruits=['Banana','Apple','Mango',"John", "Doe", 46,"Saab", "Volvo", "BMW",1,2,3,4,5,6,7,8,10,'Cat','Cow','Crow'];

// fruits[21]='lemon';

// console.log(fruits);

// JavaScript new Array()

// const points = new Array('e',1);//যখন ইলিমেনট একটি থাকে তখন এটি ভুল উত্তর প্রদান করে। যখন নিউ অ্যারে (40) তখন আউটপুট এ কি আছে তা দেখতে চাইলে আউটপুট এ আসে (40 empty item) মানে অউটপুট খালি আসে। এটি শুধুমাত্র নাম্বার এর ক্ষেত্রে ভুল আউটপুট আশে।যদি ইলিমেনট স্ট্রিং হয় তাহলে আউটপুট ঠিক থাকে।
// const point = ['e'];
// console.log(point);
// console.log(points);


// How to Recognize an Array

// const fruits = ["apples", "bananas", "oranges"];


// console.log("Array: "+typeof fruits instanceof Array);
// console.log(Array.isArray(fruits));



const fruits=['Banana','Apple','Mango',"John", "Doe", 46,"Saab", "Volvo", "BMW",1,2,3,4,5,6,7,8,10,'Cat','Cow','Crow'];

let x=fruits.at(-5);
console.log(x);
