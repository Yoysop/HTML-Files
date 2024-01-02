//AddEventListener and removeEventListener
//addEventListener() takes the event to listen for, and a second argument to be called whenever the described event gets fired
// element.addEventListener(event,listener);
//The removeEventListener() used to removed an event handler that was previously added using the addEventListener() function from the element
//element.removeEventListener(event,listener)
//event can be any valid JS event. Events are used without"on" 
//listener(handlerfunction) respond to the event occuring

//Custom Event
//using Custom Event constructor by using 2 arg ("name of the event",object that contains the data)
//you need to be able to dispatch them
//to listen the custom event, add an event listener to the element you want to listen on
/*
const myEvent = new CustomEvent("myEventName",{
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false
});
document.querySelector("element").dispatchEvent(myEvent);
*/
//handle the event
document.addEventListener("valueten",(event) =>{
    console.log("Access event data", event.detail.message);
});

function changeHandler(event){
    console.log(event.target.value);
    let value = event.target.value;

//trigger whenever entered value is 10 >> Customevent
if (value == 10) {
//step1 create the custom event
    const myevent = new CustomEvent("valueten", {
        detail: {
            message: "User have entered value 10",
        },
    });
//step2 dipstach the event
    document.dispatchEvent(myevent);
}
}

/*
to allow execution of code at specified time intervals there are 2 key methods

setTimeout - execute a function, after waiting a specified number of milliseconds
setTimeout(function,milliseconds);
to stop the execution of the function specified in setTimeout()
clearTimeout(timeoutvariable)

setInterval - same as setTimeout(), but repeat the execution of the function continuously
setInterval(function,miliseconds);
to stop it
clearInterval(timervariable)
*/

setTimeout(() => {
    console.log("Timeout done");
},5000);

let intervalDetails = "";
intervalDetails = setInterval(() => {
    console.log("Time interval done");
},5000);
//I want the interval to be stopped after 15 sec
setTimeout(() => {
    clearInterval(intervalDetails);
    console.log("Interval processing stopped");
},15000);

// Export and Import from other javascript
//used for importing and exporting one or more members in a mobule "hehehe,ahahahha"

//Import
import domul,{weekdays,DATE_OF_BIRTH_YEAR,sayhi } from"./utils.js";
console.log("Weekedays",weekdays);
console.log("DATE_OF_BIRTH_YEAR",DATE_OF_BIRTH_YEAR);
sayhi("Welcome to learn JS");
domul(2,4);

//exporting all + alias
import * as lwcuti from"./utils.js";
console.log("Weekedays",lwcuti.weekdays);
console.log("DATE_OF_BIRTH_YEAR",lwcuti.DATE_OF_BIRTH_YEAR);
lwcuti.sayhi("Welcome to learn JS");
