//Events will execute whenever users perfrom actions from the browser.so from the HTML to the JS
// whenever a user click on a button it is an onclick event
// whenever a user change a value it is an onchange event
// whenever a user take the curser on an element onmouse event
// complete list https://www.w3schools.com/js/js_events.asp
// event name is always in small case "aaaa"
//when using on you have to mentioned it onChange,onClick

function Clickme() {
    alert("Welcome Yohann");
}

function mouseoverhandler() {
    console.log("Mouse over event executed");
    //Access Html from the JS
   let element = document.querySelector(".hover");
   //hide the box onmouse
   element.style.display ="none";
}

function mouseouthandler() {
    console.log("Mouse over event executed");
    //Access Html from the JS
   let element = document.querySelector(".hover");
   //back the box when end of first event
   element.style.display ="";
}

function changeHandler(event){
    console.log(event.target.value);
}