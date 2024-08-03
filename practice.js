// let x=1;
// let y = 'ab10';

// console.log(typeof (x+y));//110 by implicite and type is string;


/**Second example convert a string in a number implicite*/
// let x=1;
// let y = '10';
// console.log(typeof(x-y));//-9 by impicite and type is number;

/**Second example convert a string in a number */



//console.log(x+y);//1ab10 by implicite and type is String;jodi akti value number and arekti value jodi string hoy and ai dui ti value ke ak shate + operator dara jug kora hoy tobe javaScript number a thaka value tike atomitically string a convert kore.jodi second value er samne jai tahok nh keno + operator thakle javaScript aitke string a convert korbe.ar duti value jodi string hoy tokhon JavaScript duiti value er modde concate kore thake.


//console.log(typeof(x-y));//NAN by implicite and type hobe number.JavaScript implicite vabe second string value ke number a convert korte parche nh karon JavaScript protom value number payeche second value string payeche er por jokhon console korte geche tokhon dekeche je number thake string ke minus kora jai nh tokon JavaScript second value check kore je second value numeric number kinah check korbe jodi numeric number hoy tobe second value ke number a convert kore then output thik ashe jemon tah uporer second number example er khetre jemopn tah hoyeche.ar jodi numeric number nh hoy tahole output NaN ashbe.

//console.log(x-parseInt(y));//NaN by exiplite .output a NaN ashar karon holo second value ti numeric number nh.karon second value te protome caracter tarpor number jar karone javaScript second value ke numeric number a convert korte nh pare output NaN aise.ar jodi caracter gulu number a sesh jodi thakto tokhon exiplite vabe second value ke number a convert kora jeto and output ashto numbe type.jemon tah nicher example a dewa holo.


// let x = 10;
// let y = '9ab';

// let z = parseInt(y);//ai jaigah te javaScript parseInt er maddome string value ke number a convert koreche exiplite vabe.

// y=z;//jokhon y er value ke number convert korar por aitike abar y variable re-assaign kora hoyeche

// console.log(typeof(x-y));//1 by exiplite.type number

// let x = !'hello' || !null;
// console.log(x);

// let x;
// if(x='hello' || !null){
//     console.log(x);
// }



// let x = 19.87654321;
// console.log(x);
// let z=Math.floor(x);
// console.log(z);
// x=z;
// console.log(x);


// let x=10.99;
// console.log(Math.floor(x));//math.floor er kaj holo aiti doshomik er porer ongshotike bad diye dibe.

// let x;

// if(x='hello' || '10'){
//     let y = 10.99;
//    return console.log(typeof Math.floor(y));
// }


// let x =10;

// if(Number){
    

    // console.log(Math.pow(x,3));
// }//kono number ke gun korte math.pow bebohar korah hoy.



// let y = Math.min(-1,2,30,4,5,-6);
// console.log(y);

//jodi akti array er modde kon number ti boro shai number ber korte chai tokhon obboshoi amake spreade opperator bebohar korte hobe .karon math.max bah math.min ai dui ti method number gulu ke aktir por arekti tulonah kore.array er modde pare nh .tay spread operator bebohar korar fole ai method gulu ak tir shate arek ti value tulonah korte parbe.
// let x=['1','2','3','4','5','6','7','8'];

// let y = Math.max(...x);
// console.log(typeof y);



//The CarcterAt string method akti string koto number index kon okkor ti ache oitah janar jonno bebohar korah hoy.ar jodi kono specific index a jodi kono charecter nh thake tokhon charAt() method return empty string.mane output e kono kichu print kore nh.
// let txt="Hello";

// let y=txt.charAt(5);

// console.log(y);//output:"h"



//the string at()method and charAt()method are pretty similler.the charAt() use for know the which charecter are which postiopn by their index.the at() are use to same parpose.but in the at() we use negative value inside the at() method but in the charAt()method do not use negative value.this is the differnt of at() and charAt().
// let x="My World";
// let y= x.at(-1);
// console.log(y);



//property access [] er maddomaw index number bebohar kore kon index e kon charecter ache tah janah jai.kintu aikhane aktu problem ache porperty access er chinno dekhle mone hoy je aiti akti object kintu asole tah nh.ta chara jodi kono variable chara jodi property access er maddome koto number index a kon charecter ache tah ber korte chile tokhon kaj kore nh abr output e kono error o ashe nh.ar jodi akti variable er modde store kore property access bebohar kore jodi ber korte chai tahole shati kaj korbe.ar jodi kono value kuje nh pawa jai tokhon aiti undeined return kore.jemon nicher udahoron ti jaivabe kora hoyeche.
// let x = 'Hello';

// let y=x[10];
// console.log(y);


// const name = "W3Schools";
// let letter = name.at(-2);

// console.log(letter);



//String sclice() method bebo
// let txt='Hello world.My name is JavaScript Program';

// let txt1=txt.slice(20,22);

// console.log(txt1);


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(12,-5);
// console.log(part);


// let text = 5;
// let txt1=text.toString();
// let padded = txt1.padStart(4,"ami");

// console.log(padded);


// let x = "a|b|c|d|e";
// let y=x.split("|");
// console.log(y);



//second parameter a joto number index dewa hobe or modde sob thake last jai index a value tah kuje pawa jabe oi number index tah output e dewa hobe.mane aikhane dewa ache 27 number index ortat 27 number index er modde last value joto number position e thakbe oi position er number tah print korbe.niche 27 number index er por mane 28 number index thake ar count korbe nh mane holo 27 thake 0 number index porjonto last locate er position pawa jai 7 number index e.
                                    //    27
// let text = "Please locate locate where ' locate' occurs!";
// let y=text.lastIndexOf("locate",27);

// console.log(y);



//indexOf method left side thake count suru korbe and protome je index e value tah kuje pabe oi index number tah output a print korbe.ar jodi second parameter dewa hoy thokon er maddome bujai je ato number index er por thake protome jai index number a value kuje pawa jabe toto number index tah print korbe.jemon tah holo nicher udahorone second parameter hisabe 10 dewa hoyeche tar mane 10 number index er age jodi value pawa jai tobe opitah dorah hobe nh .value dorah hobe 10 number index er por jai index e value tah kuje pawa jabe oi index number tah print korah hobe.ortat nicher udahorone 10 number index er por thake kujah suru korle locate word kuje pawa jabe 21 number index e.
// let text1 = "Please locate where 'locate' occurs! locate";
// let index = text1.indexOf("locate",10);
// console.log(index);

// const x = ['Banana','Mango','Lemon'];

// const y=x.shift();
// console.log(y);
// console.log(x);

// const y= "Potato,Tomato,Kiwi";

// const z = x.concat(y);
// console.log(z);


// const x = ['Banana','Mango','Lemon','Kiwi'];

// const y = x.copyWithin(1,2,3);
// console.log(y);


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

        //    0         1        2        3       4    5
// const fruits=['Banana','Apple','Mango',"John","Doe","Saab","Volvo",
// "BMW",'Cat','Cow','Crow'];

// const fruit=fruits.copyWithin(-5,-6,-4);
// console.log(fruit);

// console.log(fruits);

// const fruits=['Banana','Mango','Apple']

// const x = fruits.splice(2,0,'Lemon','Kiwi');
// console.log(x);
// console.log(fruits);


const fruits=['Banana','Apple','Mango',"John","Doe","Saab","Volvo",
"BMW",'Cat','Cow','Crow'];

// const fruit = fruits.slice(3,5);
const fruit = fruits.slice(1,3);
console.log(fruit);
console.log(fruits);
