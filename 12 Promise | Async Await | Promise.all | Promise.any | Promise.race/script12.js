/*
When you want to do some actions in the background.
the async style of programming focuses more on improving the perf of the app and callbacks can also be used in such situation.
So you call a method in the background
Callback Hell is like calling a first get method then a second one depending on the other etc
*/

//callback hell example (complex to debug)
setTimeout(()=> {
    console.log("Hello 1");
    setTimeout(()=> {
        console.log("Hello 2");
    setTimeout(()=> {
        console.log("Hello 3");
        },5000);
    },5000);
}, 5000);

//better to use or Promise or Async/Await

//Promise return something at a later time. or it is returned or an error.
//usually used for apex calls (callouts) or do an operation on data (CRUD)
//All Apex Methods returns a Promise
//Promise object support 2 properties state and result
// "pending" > undefined
// "fulfilled" > a result value
// "rejected" > an error object
//in case the function is resolve THEN the function is executed // in case it is rejected Catch is executed

/*getArticles(10)
.then((user)=> getUserName(user.name))
.then((place)=> getAddress(place.city))
.then((data)=> console.log("Data",data))
.catch((err)=> console.log("Error", err.message));
*/

//create the promise
function generatePromise(message){
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            console.log(message);
            resolve();
        },1000);
    });
}

//call the promise
generatePromise("1st call").then(()=>{
    console.log("Promise Resolved Successfully")
    generatePromise("2nd Call");
})
.then(()=>{
    console.log("2nd Pronise resolved successfully");
})
.catch((error)=> {
    console.log("Promise rejected", error);
});


//Async/Await

/* 
async function showImages() {
    try {
    const articles = await getArticles(10);
    const place = await getUserData (user.name);
    const city = await getAddress(place);
    console.log(city);
} catch (err) {
    console.log("Error",err.message);
}}
*/
async function generatediffprom() {
    try {
    await generatePromise("1st call");
    await generatePromise ("2nd call");
    await generatePromise("3rd call");
} catch (err) {
    console.log("Error",err);
}}
generatediffprom();

//Promise.all fulfills with an array containing fulfilled values of the promises if all promises are resolved
//so executed if all promises are successfull if not it is rejected

/*
const allPromise = Promise.all([prom1,prom2]);
try{
    const values = await allPromise;
    console.log(values); //[resolved1, resolved2]
} catch (err) {
    console.log(err); // rejectReason of any prom
}
*/

function resolveTimeOut (value,delay){
    return new Promise((resolve)=> setTimeout(()=> resolve(value), delay));
}

function rejectTimeOut (value,delay){
    return new Promise((resolve,reject)=> setTimeout(()=> reject(value), delay));
}

async function load(){
    let prom1 = resolveTimeOut ("Welcome to take JS async", 5000);
    let prom2 = rejectTimeOut ("Loading Failed", 7000);
    const allPromise = Promise.all([prom1,prom2]);

    try{
        const lists = await allPromise;
        console.log("lists", lists);
    } catch (err){
        console.log(err);
    }
}
load();

//Promise.any() return the output if any of the promise has been resolved
function resolveTimeOut (value,delay){
    return new Promise((resolve)=> setTimeout(()=> resolve(value), delay));
}

function rejectTimeOut (value,delay){
    return new Promise((resolve,reject)=> setTimeout(()=> reject(value), delay));
}

async function load(){
    let prom1 = resolveTimeOut ("Welcome to take JS async", 5000);
    let prom2 = rejectTimeOut ("Loading Failed", 7000);
    const allPromise = Promise.any([prom1,prom2]);

    try{
        const lists = await allPromise;
        console.log("lists", lists);
    } catch (err){
        console.log(err);
    }
}
load();

//Promise.race() all the promises will race against eachother with a single winner (resolved or rejected) and if all rejected then it will show empty or the rejected message
// the first promise is 5000 so resolveTimeOut will win the race
function resolveTimeOut (value,delay){
    return new Promise((resolve)=> setTimeout(()=> resolve(value), delay));
}

function rejectTimeOut (value,delay){
    return new Promise((resolve,reject)=> setTimeout(()=> reject(value), delay));
}

async function load(){
    let prom1 = resolveTimeOut ("Welcome to take JS async", 5000);
    let prom2 = rejectTimeOut ("Loading Failed", 7000);
    const allPromise = Promise.race([prom1,prom2]);

    try{
        const lists = await allPromise;
        console.log("lists", lists);
    } catch (err){
        console.log(err);
    }
}
load();