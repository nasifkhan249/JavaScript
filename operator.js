let age = 17;
// let canVote=(age > 18) ? "Yes" : "No";

// if(canVote=="Yes"){
//     console.log("You can vote");
    
// }else{
//     console.log("You can't vote yet");
    
// }


let voteable = (age < 18) ? "To young" : "Old enough";

console.log(voteable);


let name ;
let text = "missing";
let result = name ?? text;
console.log(result);

