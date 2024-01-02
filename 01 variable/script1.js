console.log("Variable Declaration");

// Let
// Let keyword can be updated
// Let keyword cannot be redeclared

let myName = "Yohann";
console.log("myName", myName);

// Let keyword can be updated
myName = "Yohann Muller";
console.log("myName", myName);

// Let myName= "Yoyo"; create error message because myName cannot be redeclared

// Const
// const keyword cannot be updated
// const keyword cannot be redeclared

const myLastName = "Muller";
console.log("myLastName", myLastName);

// myLastName ="Gaillar"; create error because you cannot update const

const myObject = {fname:"Yoyo" , lname:"MulGail"};
console.log(myObject);
myObject.fname = "Yohann Gilbert";
console.log(myObject);

// using an object you can change a property of a variable .fname but if you try to change the full variable you will get an error

//var should not be used today but
// can be reassigned
// can be redeclared

var bootcamp ="LWC";
console.log("bootcamp", bootcamp);
//can be reassigned
bootcamp = "LWC Day 3";
console.log("bootcamp", bootcamp);
//can be redeclared without any error
bootcamp = "LWC Bootcamp Day 3";
console.log("bootcamp", bootcamp);
console.log(window.bootcamp);

