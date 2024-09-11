//Factory function a function that return a object.
//If we has complex logic and we have to create multiple objects again and again that have the same logic,we can write a once logic in a function and use that function as a factory to create our objects.



let love=(name,nam)=>{
    return {
        name:name,
        nam:nam,
        sayLove(){
            return(`I love ${name} and she love ${nam}`);
            
        }
    }
};


let person1=love('Rima','Nasif');
console.log(person1.sayLove());


//factory function ekti function jeti akti object return kore.factory function muloto tory korah hoy jokhon complex logic bulit jemon same logic use kore multiple object create korah jai differnt value diye.
