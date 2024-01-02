// Strings are for storing and manipulating text
//String length
//String slice ()
//String substring ()
//String replace ()
//String replaceAll ()
//String toUpperCase ()
//String indexOf ()
//String lastIndexOff ()
//String includes ()
//String toLowerCase ()
//String concat ()
//String trim ()
//String trimStart ()
//String trimEnd ()
//String padStart ()
//String padEnd ()
//String chartAt ()
//String chartCodeAt ()
//String split ()
//String startsWith ()
//String endsWith ()

// let String = "value";

let myDetails = "My name is Yohann";
console.log("My Details", myDetails);

//String length
console.log("My Details", myDetails.length);

//extracting String
let text = "Apple, Banana, Kiwi, Banana";
console.log(text);
//slice(start position,end position) (end not included) > count from start letter to end+1
//substring (start position,end) (end not included) > negative value treated as 0

//Extract the Banana
let sliceBanana = text.slice(7,13);
console.log("SliceBanana", sliceBanana);

let sliceRemainingfodd = text.slice(7);
console.log("Slice Remaining", sliceRemainingfodd);

let fromend = text.slice(-12);
console.log(fromend);

//substring (start position,end)
let substBanana = text.substring(7,13);
console.log("sub Banana", substBanana);

let fullfromneg = text.substring(-12);
console.log("Full", fullfromneg);

// replace only replace the first match (case sensitive)
// replace will not modify the existing string but will create another string
let replacefruit = text.replace("Banana","Mango");
console.log("Replace Banana", replacefruit);

//replaceAll same as replace but replace all values not the first intance

//String toUpperCase () and //String toLowerCase ()

console.log(myDetails);
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

//Concatanation

let text1 = "Jean";
let text2 = "Pierre";
let concat1and2 = `${text1} ${text2}`;
console.log("Concatanation String 1 and 2", concat1and2);

let text3 = text1.concat(" ","Paul");
console.log("Concat", text3);

//String trim ()String trimStart ()String trimEnd ()
let trimMe = "       Hello World        "
console.log("trim space removed", trimMe.trim());
console.log("trim space removed", trimMe.trimStart());
console.log("trim space removed", trimMe.trimEnd());

//padStart () padEnd ()
let myNumb = "5"; //00005
console.log(myNumb.padStart(5,"0"));
console.log(myNumb.padEnd(5,"*"));

//String split () always return an array. break based on the charcter mentioned
let myCsvDetails = "Yohann,Gilbert,Jean,Muller";
let myCsvArray = myCsvDetails.split(",");
console.log("break the String", myCsvArray);

//Convert Array > String with toString or join
let myStringcsv = myCsvArray.toString();
console.log("Array to String", myStringcsv);

let myJoincsv = myCsvArray.join("&");
console.log("joinString", myJoincsv);

//Search the String  (search,match) using index of (-- return position of a string and -1 if not present) OR includes (return true or false)
console.log(text);
console.log(text.indexOf("Kiwi"));
console.log(text.indexOf("Orange"));
console.log(text.includes("Kiwi"));

// String startsWith () endsWith ()
console.log(text.startsWith("Kiwi"));
console.log(text.startsWith("Apple"));
console.log(text.endsWith("Banana"));
console.log(text.endsWith("Apple"));
