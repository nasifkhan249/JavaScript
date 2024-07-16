// console.dir(Math);
// console.log(Math.SQRT2);
//practice of pow method;
// console.log(Math.pow(10,2));
//practice of math floor
// let x=10.10;
// console.log(Math.floor(x));

// console.log(Math.max(...[1,2,3,4,5,6,7,8,9,0]));

// let x ;
// console.log(Math.floor(Math.random(x)*10000)+90000);

// console.log(Math.abs(-100));

// console.log(typeof( 100+23).valueOf());

// let date1=new Date();
// let date2 = new Date()

// let timeSub=date1-date2
// console.log(timeSub);

const myObject = {
    value:42,
    valueof(){
        return this.value;
    }
}
const result = myObject.valueof()+10;
console.log(result);