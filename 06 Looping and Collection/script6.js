// Javascript support different kind of loop
//for - loops through a block of code a number of times
//for/in - loops through the properties of an object
//for/of - loops through the value of an iterable object
//while - lopps block of code while a specified condition is true
//do/while - also loops block of code while a specified condition is true
// the break statement "jump out" of a loop
//the continue statement "jump over" one iteration in the loop
console.log("Loop and Collection");

let myFavCars = ["Audi", "Porshe", "BMW", "Mercedes"];
let myDetails = {
    fname: "Yohann",
    lname:"Muller",
    age:28
};
//for > for(initialization;condition;increment/decrement)
for (let i=0; i < myFavCars.length; i++){
    console.log(`${i+1}. ${myFavCars[i]}`);
}

//while > while (condition)

let currentIndex = 0;
console.log(myFavCars.length);
while (currentIndex < myFavCars.length){
    console.log(`${currentIndex+1}. ${myFavCars[currentIndex]}`);
    currentIndex = currentIndex + 1;
}

//do while execute at least ones event if 1 != 2
/**
 * do{
 * 
 * }while()
 */
do{
    console.log("Do while loop");
} while(1===2);

//for of Loop
/**
 * for (let currentitem of myFavCars)
 */
for(let currentitem of myFavCars){
    console.log("CurrentItem", currentitem);
}
//to use the Index you have to use another method called .entries
for(let currentitem of myFavCars.entries()){
    console.log("CurrentItem", currentitem);
}
//use destructuring from previous days
for(let [index, car] of myFavCars.entries()){
    console.log(`${index + 1}. ${car}`);
}
//for object you have to make it iterable
//option 1 > Object.keys
//option 2 > Object.values
//option 3 > Object.entries
for(let currentItem of Object.keys(myDetails)){
    console.log("CurrentItem", currentItem);
}
for(let currentItem of Object.values(myDetails)){
    console.log("CurrentItem", currentItem);
}
//to access keys + values
for(let currentItem of Object.keys(myDetails)){
    console.log("CurrentItem", currentItem);
    console.log("Property Value", myDetails[currentItem]);
}
for(let [key, value] of Object.entries(myDetails)){
    console.log(key, value);
}
//if you want to access the value use the for of if you want to access the index use for in
//for in (use to iterate on object)
/**
 * for (let variablename in collection)
 */
for (let currentItem in myFavCars){
    console.log(currentItem, myFavCars[currentItem]);
}

for(let item in myDetails) {
    console.log(item, myDetails[item]);
}

let openhours = {
    thu: {open: "10am", close: "11pm"},
    fri: {open: "08am", close: "10pm"},
    sat: {open: "09am", close: "1pm"},
};
for (let currentItem in openhours) {
    console.log(currentItem);
    console.log(openhours[currentItem]);
//Apply concept of destrucuring
    let {open, close} = openhours[currentItem];
    console.log(open,close);
    console.log(`On ${currentItem} office starts at ${open} and close at ${close}`);
}
//same operation using for of loop
for (let [day , open, close] of Object.entries(openhours)){
    console.log(day, open, close);
    console.log(`On ${day} office starts at ${open} and close at ${close}`);

}

//Map Collection is a collection of keys data items, just like an Object but the main difference is that Map allors keys of any type
// newMap() - creates the Map
// map.set(key,value) - stores the value by the key
// map.get(key) - returns the value by the key, undefined if key doesn t exist in the map
// map.has(key) - returns true if the key exists, false otherwise
// map.delete(key) - removes the element (the key/value pair) by the key
// map.clear() - removes everything from the map
// map.size - return the current element count
// you should go for the map when limitation of Object. the key will always be type of string. so if you want the key to be another datatype you have to use the map function
console.log("Map collection");

let myMap = new Map();
console.log("My map", myMap);
// to add entries in map we use the set method
myMap.set("1", "Yohann");
myMap.set(2, 34);
myMap.set(true, "Certified");
console.log("Mymap",myMap);

//to access values from map we have to use the get method
console.log(myMap.get("1"));
console.log(myMap.get(true));
console.log(myMap.size);

let favPlaces = new Map([
    ["Yohann", "Mountain"],
    ["Andrea", "Beach"],
    ["Clem", "Putes"],
]);
console.log("FavPlaces", favPlaces);

for (let currentItem of favPlaces){
    console.log(currentItem);
}
for (let [key,value] of favPlaces){
    console.log(key,value);
}

//Set Collections is a collection of unique values. Each value can only occur once in a Set. Set can hold any value of any type
// new Set() - create a new set
// add() - add a new element to the set
// delete() - remove an element from a set
// has() - returns true if a value exists
// clear() - removes all elements from a set
console.log("Set Collection");
let mySet = new Set();
console.log("my Set",mySet);
mySet.add("Burger");
mySet.add("Pizza");
mySet.add("Pizza");
mySet.add("Pizza");
mySet.add("Pasta");
mySet.add("Jamon");
//Note it is deduplicated
console.log("my Set",mySet);
//check if PAsta is present in set
console.log(mySet.has("Pasta"));
console.log(mySet.has("Eggs"));
mySet.delete("Burger");
console.log("my Set", mySet);

let myfavc = new Set(["Prune", "Orange", "Mandarine"]);
console.log("Fav fruit", myfavc);

for (let currentItem of myfavc){
    console.log(currentItem);
}