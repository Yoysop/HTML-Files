// Function Declaration are defined with the function keyword. Can e declaration or expression
// Function definitions do not specify data types for parameters
// JS function do not perform type checking on the passed arguments
// JS function do not check the number of arguments received
// ES6 allows function parameters to have default value

let calcresult1 = calc1(10,5);
console.log("Calc1", calcresult1);

function calc1(number1, number2){
    let sum = number1 + number2;
    return sum;
}

//Function Expression (not use in LWC but for cert)

let calc2 = function(number1,number2){
    if(number2){
    let sum = number1 + number2;
    return sum;
    }else{
        return number1;
    }
};

let calcresult2 = calc2(10,5);
console.log("Calc2", calcresult2);
let calcresult3 = calc2(10);
console.log("Calc3", calcresult3);

// the difference is : in case of declaration you cancall the function first and declare later without error (hoisting). This is not possible with function error

// Arrow function(just a modern way): were introduced in ES6 and allow us to write shorter function syntax
// if the function has only one statement and the statement return a value, you can remove brackets and the return keyword
/*
let myFunction = (arg1, arg2,...argn) => {
    statement(s)
}
*/
let calc3 = (number1,number2)=>{
    if(number2){
    let sum = number1 + number2;
    return sum;
    }else{
        return number1;
    }
};

let calcresult4 = calc3(10,5);
console.log("Calc3", calcresult4);

//Other Example
let greet = function(username){
    return `${username} , Welcome on board`;
};

console.log(greet("Yohann"));
//become with arrow function
let greetarrowf = (username) => 
     `${username} , Welcome on board`;

console.log(greetarrowf("Yohann"));

//Callback Function: passed an argument to another function
// benefit is that the call back will be executed after the first previous function is executed
// it really shine in synchronous function, where one function has to wait for another function before to be executed

function welcomeme(name,callme){
    console.log(`Hello ${name}`);
    callme();
}

function greetme(){
    console.log("Welcome Yohann");
}

function bye(){
    console.log("Thanks see ya");
}

//passing the function as argument
welcomeme("Yohann", greetme);
welcomeme("Yohann", bye);

setTimeout(()=>{},1000);