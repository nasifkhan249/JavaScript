// let person={
//     name : "Nasif",
//     age : 22,
//     location : {
//         city : "Netrakona",
//         zip : 3200
//     },
//     sayHello : function(){
//         console.log("Hello");
//     }
// }


// console.log(person.name);
// let a = 'sayHello()';

// person[a];

let persons =[
    {
        name : "Sakib",
        num : 75,
        position : "All rounder",
        hobby : ["reading","modeling","football"]
    },
    {
        name : "Musfiq",
        num : 40,
        position : "Batsman",
        hobby : ["reading","modeling","football","gardening"]
    },
    {
        name : "Tamim",
        num : 10,
        position : "Batsman",
        hobby : ["reading","modeling","football","gardening","seller"],
        about(){
            // this.hobby.forEach(function (el){
            //     console.log(this.name+" "+el);
                
            // },this)

            this.hobby.forEach((el)=>{
                console.log(`${this.name} ${el}`);
            });
        }
    }
];

// let a = persons[2];
// console.log(a);

// for(let i=0;i<persons[0].hobby.length;i++){
//     console.log(persons[0].hobby[i]);
// }

// persons[0].hobby.forEach((el)=>{
//     console.log(el);
// })

// for(let interest of persons[0].hobby){
//     console.log(interest);
    
// }

// for(let key in persons[0].hobby){
//     console.log(key +":"+ persons[0].hobby[key]);
    
// }
// persons[2].about();
persons[2].about();


