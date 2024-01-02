console.log("Logical Operators");
let myNumber1 = 10;
let myNumber2 = 20;
console.log(typeof myNumber1 , typeof myNumber2);
console.log(myNumber1 + myNumber2);

let myNumber1a = 10;
let myNumber2a = "20";
console.log(typeof myNumber1a , typeof myNumber2a);
console.log(myNumber1a + myNumber2a);

let myNumber1aa = 10;
let myNumber2aa = "20A";
console.log(typeof myNumber1aa , typeof myNumber2aa);
console.log(myNumber1aa + Number(myNumber2aa));

let myNumber1aaa = 10;
let myNumber2aaa = "20A";
console.log(typeof myNumber1aaa , typeof myNumber2aaa);
if(isNaN(myNumber2aaa)) {
    console.log("myNumber2aaa is not a number thus conversion");
}
else{
    console.log(myNumber1aaa + Number(myNumber2aaa));
}

let myNumber1ab= 10;
let myNumber2ab = 20;
console.log(typeof myNumber1ab , typeof myNumber2ab);
if(isNaN(myNumber2ab)) {
    console.log("myNumber2aaa is not a number thus conversion");
}
else{
    console.log(myNumber1ab + Number(myNumber2ab));
}
//for substraction, multiplication, division JS understand there is no concatanate so it will convert the string as integer and do the calculation
let myNumber3 = "30";
let myNumber4 = 10;
console.log(typeof myNumber3, typeof myNumber4);
console.log(Number(myNumber3) + myNumber4);
console.log(myNumber3 - myNumber4);
console.log(myNumber3 * myNumber4);
console.log(myNumber3 / myNumber4);

//Assignment Operators "=" /Comparaison Operator"=="  check the value/ "===" check the value and type of operator
let myNumber5 =50;
myNumber5 = 60;

// Additional comparator >, >=, !=...
let myNumber6 = 10;
let myNumber7 = 20;
console.log(myNumber6 > myNumber7);
console.log(myNumber6 < myNumber7);

//Logical operator (&&, ||,!)
console.log(true && false);
console.log(true && true);
console.log(myNumber6 > 0 && myNumber6 > 5);

let myString1 = "Yoyo"
let myString2 = "Muller"
// && retrurn the last operate Muller
console.log(myString1 && myString2);
// || return the first operate Yoyo
console.log(myString1 || myString2);

let isSalaryCredited = false;
console.log("is Salary Credited", isSalaryCredited);
isSalaryCredited = !isSalaryCredited;
console.log("is Salary Credited", isSalaryCredited);

// ternary operators checking the condition and giving the result
let age = 21;
let output = age < 18 ? "Too Young" : "Old Enough";
console.log(output);

// "==" value VS "===" value and type
let Number3 = 3;
let Number4 = "3";
console.log(typeof Number3 , typeof Number4);
console.log(Number3, Number4);
console.log(Number3 == Number4);
console.log(Number3 === Number4);

// null vs undefined use Null to make the variable empty use undefined when you just declare and not populating the value
let myString09 ="Yohann";
//option1 to empty variable Yohann is, myString09 = undefined;
//option2 to empty variable Yohann is, myString09 = null (best practice as I want to empty a variable with already a value assigned)
let myString10 = null;
let myString11;
console.log(typeof myString10 , typeof myString11);
console.log(myString10 == myString11);
console.log(myString10 === myString11);
