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


//The at Method to find the element to using there index number
// const fruits=['Banana','Apple','Mango',"John", "Doe", 46,"Saab", "Volvo", "BMW",1,2,3,4,5,6,7,8,10,'Cat','Cow','Crow'];

// let x=fruits.at(-5);
// console.log(x);


// JavaScript Array join()

// const txt1=["This","is","my","world"];
// const txt2=[".And", "this", "is", "so" ,"beautiful"];
// let add=txt1.join(" ") + txt2.join(" ");  //firstly join() method apply in the first array and convert it in string and then use + operator to adding to element. and then the join() method apply second array  to convert it in string;
// console.log(typeof add);


// const arr1=["Apple","Banana","Mango"];
// let str=arr1.join(" ");
// console.log(typeof str);

// JavaScript Array join()


//Array pop() and array push();

// const fruits=['Banana','Apple','Mango'];
// let fruit=fruits.pop();
// console.log(fruits);
// console.log(fruit);
// let add=fruits.push(fruit);
// console.log(add);
// console.log(fruits);


//Array shift() and array unshift();

// const fruits=['Banana','Apple','Mango'];
// let fruit=fruits.shift();
// console.log(fruits);
// console.log(fruit);
// let add=fruits.unshift(fruit);
// console.log(add);
// console.log(fruits);




// Array concat()



// const x=['This is my world'];
// const y=['This is so Beautiful'];

// let z=x.concat(y);
// console.log(z);




//Array CopyWithin(target,start,end) method

//target=5,
//start=1,
//end=2,

//target=9,*target means that which position i keep my copying element 
//start=1,*start means that which position i want start copy
//end=4,*end means that which position i end my copying.

//target=3
//start=0
//end=take defaults array.length

//target= -5,
//start= -6,
//end=  -4

        //    0         1        2        3       4       5
// const fruits=[ 'Banana', 'Apple', 'Mango', "John", "Doe","Saab", "Volvo",
//  "BMW",'Cat','Cow','Crow'];

// const fruit=fruits.copyWithin(5,1,2);
// const fruit1=fruits.copyWithin(9,1,10);
// const fruit=fruits.copyWithin(-5,-6,-4);
// console.log(fruit);
// console.log(fruits);


//Array flat() method

// const arr=[['a','b'],['c','d'],['e']];
// let arr1=arr.flat();
// console.log(arr1);
// console.log(arr);


// Array splice()

// const fruits=['Banana', 'Apple', 'Mango', "John", "Doe","Saab", "Volvo",
// "BMW",'Cat','Cow','Crow'];

// let arr=fruits.splice(3,2,'Lemon','Kiwi');
// let x=arr.toString();
// console.log(x);
// let arr1=fruits.splice(3,0,x);
// console.log(arr1);
// console.log(fruits);

//Array toSpliced()

// const fruits=['Banana', 'Apple', 'Mango', "John", "Doe","Saab", "Volvo",
// "BMW",'Cat','Cow','Crow'];

// let fruit=fruits.toSpliced(0,1);
// console.log(fruit);
// console.log(fruits);
