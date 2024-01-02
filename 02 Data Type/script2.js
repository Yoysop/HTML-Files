//JS has dynamic types meaning the same variable can be used to hold different data types
//When adding a Variable and a string JS will treat the number as a string
// always evaluate expression from left to right
//JS evaluate expressions and different sequences can produce different sequences
// x = 16 + 4 "Volvo" -> 20Volvo (string)
// x= "Volvo" + 16 + 4 -> Volvo164 (string)

console.log("Data Types in JS");

let myName ="Yohann";
console.log("myName", myName);
console.log("type of myName", typeof myName);
//change same variable from string to number
myName = 10;
console.log("myName", myName);
console.log("type of myName", typeof myName);
//change same variable from number to boolean
myName = true;
console.log("myName", myName);
console.log("type of myName", typeof myName);
//change variable from boolean to object
let myDetails = {};
console.log("myDetails", myDetails);
console.log("type of myDetails", typeof myDetails);
// change to Array is still data type object
let myDetailsArray = [];
console.log("myDetailsArray", myDetailsArray);
console.log("type of myDetailsArray", typeof myDetailsArray);
// change to Null is still data type Object
let myNullVariable = null;
console.log("myNullVariable", myNullVariable);
console.log("type of myNullVariable", typeof myNullVariable);
// change to Undefiened is Undefined same as Null but not same data type
let myUndefinedVariable = null;
console.log("myNullVariable", myNullVariable);
console.log("type of myNullVariable", typeof myUndefinedVariable);
// under "" it is a data type string
let myNumber = "1" + "5"
console.log("myNumber", myNumber);
console.log("type of myNumber", typeof myNumber);
let myNumbers = "1" + 5
console.log("myNumbers", myNumbers);
console.log("type of myNumbers", typeof myNumbers);
let myNumberss = 5 + "1"
console.log("myNumberss", myNumberss);
console.log("type of myNumberss", typeof myNumberss);