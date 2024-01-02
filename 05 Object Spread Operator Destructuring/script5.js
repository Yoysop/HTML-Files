console.log("Objects");
let myDetails = {
    //key: "value as string"
    fname: "Yohann",
    lname: "Muller",
    age: 34,
    skills: ["ADM", "CPQ", "Solution Architect"],
    //Note in an object the order does not matter, in an array it does matter
};
console.log("myDetails" , myDetails);
console.log("type of myDetails", typeof myDetails);

//Json.stringify : convert object into string
let jsonString = JSON.stringify(myDetails);
console.log("jsonString" , jsonString);
console.log("type of jsonString", typeof jsonString);

//Json.parse : convert String into Object
let jsonObject = JSON.parse(jsonString);
console.log("jsonObject" , jsonObject);
console.log("type of jsonObject", typeof jsonObject);

//Modify the object to add date of birth
//option1 using "."
myDetails.dateofbirth = "28/10/1989";
//update the existing property
myDetails.age = 69;
console.log("myDetails" , myDetails);


//option2 using "[]" use this one whenever we have to populate property dynamically
citybirth = "City";
myDetails[citybirth] = "Rueil";
console.log("myDetails" , myDetails);

myDetails["Country"] = "France";
console.log("myDetails" , myDetails);

//Access the value from "." and "[]"
let myCountry = myDetails.Country;
console.log("myCountry", myCountry);

let myCity = myDetails["City"];
console.log("myCity", myCity);

//Spreadoperator copy all or part of an existing array or object into another array or object -> ...
// Usages: Expanding String, Combine Arrays, Combine Object, Create new shalloy copy of original Array or Object
console.log("Spreadoperaror");
let numberOne = [1,2,3];
let numberTwo = [4,5,6];
//Concatanation of Array combine these 2 arrays into 1
let combinedArray = [...numberOne,...numberTwo];
console.log("numberOne", numberOne);
console.log("numberTwo", numberTwo);
console.log("combinedArray", combinedArray);

//Expand the String
let myNames = "My Name is Yohann Muller";
console.log(myNames);
console.log(...myNames);

//Add elements in Array
numberOne = [8,9,...numberOne, 10,11,12];
console.log("number One", numberOne);

//Adding the object
let myObj1 = {fname: "Yohann", skills: ["JS","Adm"]};
let myObj2 = {lname: "Muller", country: "France"};
let finalObj = {...myObj1, ...myObj2};
console.log("finalObj", finalObj);

//Copy an Array and Object
let myFavFruit = ["Apple", "Orange", "Strawberry"];
let myFavFruitCopy = myFavFruit;
console.log("myFavFruit", myFavFruit);
console.log("MyFavFruitCopy", myFavFruitCopy);
//lets add an additional Fruit
myFavFruitCopy.push("Cherry");
//see both Arrays are impacted
console.log("myFavFruit", myFavFruit); //Deep Copy
console.log("MyFavFruitCopy", myFavFruitCopy);
//if you don t want that happened use spreadoperator
let myFavFruit1 = ["Apple", "Orange", "Strawberry"];
let myFavFruitCopy1 = [...myFavFruit1];
myFavFruitCopy1.push("Banana");
console.log("myFavFruit1", myFavFruit1);
console.log("MyFavFruitCopy1", myFavFruitCopy1);

let myDetailsCopy = {...myDetails};
myDetailsCopy.age = 80;
console.log("myDetailsCopy",myDetailsCopy);
console.log("myDetails",myDetails);

//Destructuring function: to unpacka values from array or properties from objects into distinct variables
// > can be extracted from array, object and nested object = easy to extract what is needed
// Note: When destructuring arrays, the order that variables are declared is important (object does not matter)
console.log("Destructuring");
let myFavAnimal = ["Dog", "Cat", "Dolphin" ,"Lion"];
//Before the approach was
//let myFavAnimal1 = myFavAnimal[0];
//let myFavAnimal2 = myFavAnimal[1];
//let myFavAnimal3 = myFavAnimal[2];
let [myFavAnimal1,myFavAnimal2,myFavAnimal3] = myFavAnimal;
console.log("myFavAnimal1", myFavAnimal1);
console.log("myFavAnimal2", myFavAnimal2);
console.log("myFavAnimal3", myFavAnimal3);
//as order matter for array if you don t want the second value
let [myFavAnimal1a, , ,myFavAnimal2a] = myFavAnimal;
console.log("myFavAnimal1a", myFavAnimal1a);
console.log("myFavAnimal2a", myFavAnimal2a);
//use case with a Top and Second
let [FavAnimal1,FavAnimal2,...rest] = myFavAnimal;
console.log(FavAnimal1);
console.log(FavAnimal2);
console.log(rest);
//Destructuring myDetails with alias on FirstName
let {fname: FirstName, skills} = myDetails;
console.log("fname", FirstName);
console.log("skills", skills);
//Separate charcters of my Firstname using Spreadoperator
let myString1 = "Yohann"
let myCharArray = [...myString1];
console.log("myCharArray", myCharArray);

//String Interpolation using back-ticks (``) rather than quotes("") to define a string
// Syntax ${...}
console.log("StringInterpolation");

let mySt1 ="My name is";
let mySt2 = "Yohann";
let mySt3 = "I live in"
let mySt4 = "Alicante";
let mySt5 = "since";
let calc = 2023 - 2020;
//before it was
// Let myFinalvar = "Phrase" + ' ' + mySt1 + ' ' + mySt2;
let myFinalvar = `my name is${mySt2}. I stay in ${mySt4} since ${calc}`;
console.log("myFinalvar", myFinalvar);

//Split method with array
let name1 = "My name is Yohann";
let nameArray = name1.split(" ");
console.log(nameArray);
console.log(nameArray[3]);