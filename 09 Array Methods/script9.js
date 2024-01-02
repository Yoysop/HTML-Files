//Array is a special variable that can hold multiple values
//length
//toString()
//pop ()
//push()
//shift()
//unshift()
//concat
//slice()
//splice
//infexOf()
//lastIndexOf()
//includes()
//forEach()
//map()
//filter()
//reduce()
//find()
//every()
//some()

console.log("Array and Array Medthods");

//declare the array
let myCars = ["BMW","Audi","Mercedes"]; //empty array if blank and data type Object
// index "BMW" = 0,"Audi"=1,"Mercedes"=2 so to see Audi
console.log("value1",myCars[1]);
// length > How many entries are in the array
console.log("number of entries",myCars.length);
//add elements to the array using 
//push (add at end)
myCars.push("Renault");
console.log("add at the end",myCars);
//unshift (add at the begining)
myCars.unshift("Peugeot");
console.log("add at the begining",myCars);
//spread operator
myCars = ["Toyota",...myCars,"Seat"];
console.log("add at the end",myCars);

//remove element from the array using
//pop > remove the element from the array from the end and return the removed element
let popItem = myCars.pop();
console.log(popItem);
console.log(myCars);
//shift > remove the element from the array the start
let shiftItem = myCars.shift();
console.log(shiftItem);
console.log(myCars);

//modify elements from the array using arrayindex
//replace "Audi" with "Honda"
myCars[2] = "Honda";
console.log(myCars);
//Note array doesn t take care of duplicate. to deduplicate you have to use the set method

//search element using
//indexOf
console.log(myCars.indexOf("BMW")); //return the position
//includes
console.log(myCars.includes("BMW")); // return true or false

//convert Array into String
//toString() > array entries separated by ","
console.log(myCars.toString());
//joint() > you can decide the separator
console.log(myCars.join("*"));

//splice > to add or remove element from the array 
//splice(param1, param2, rest) 
//>param1 = position wehere new element should be added 
//param2 how many should be removed 
//rest new elements you have to add
//splice return the array of deleted elements
const fruits = ["Banana","Orange","Apple","Mango"];
//add 2 fruit
fruits.splice(2,0,"Lemon", "Kiwi");
console.log("Fruits +2",fruits);

//remove 2 fruits
let removefruits =fruits.splice(0,2);
console.log("first 2 removed",removefruits);
console.log("new fruits array",fruits);
//slice > extract any portion from array go for slice
//slice return the new array and not modify the original one
//slice(param1,param2)
//param1 > index of starting arg
//param2 > index of end arg +1

let slicearray = fruits.slice(1,3);
console.log("slicedarray",slicearray);

//iteration of the array
let banktransac =[500,-900,10000,-400];
console.log("Banking transaction list",banktransac);

//forEach ((currItem,Index,originalArray) => {});
banktransac.forEach((curritem,index,array) =>{
    console.log(curritem);
    console.log(index);
    console.log(array);
    //let devide the current item by 10 to perform an operation
    curritem = curritem/10;
    return curritem;
});

//map
let uparray = banktransac.map((curritem) => {
    return curritem/10;
});
console.log("Updatearray",uparray);

//getall deposit from the array (filter out the value)
//filter always return an array
let depositarray = banktransac.filter((curritem) => curritem > 0);
console.log("Deposit array",depositarray);

//find

//check if transac have 10000 entry
let banktransac10 = banktransac.find((curritem) => curritem === 10000);
console.log("has 10K",banktransac10);

//some
//every
//reduce