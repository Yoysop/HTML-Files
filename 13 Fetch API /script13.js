/*
Fetch is used to make HTTP requests to servers
Fetch always return a promise, so we have a readable stream. we use a .json() method to read that promise
Fetch takes 2 arguments the "URL","Method"
by default the method is get so you can use or not this method if you need to get info 

fetch ("URL",{method options})
.then (res => res.json())
.then (data => console.log(data))
.catch (err => console.log(err))

👉 API to get Random Users - https://reqres.in/api/users
👉 API to get CAT Images - https://api.thecatapi.com/v1/images/search
👉 API for Exchange Rate - https://rest.coinapi.io/v1/exchangerate/BTC/USD
*/
//using promises
function loadRandomUsers(){
fetch ("https://reqres.in/api/users",{
    method: "GET"
})
.then((response)=> response.json())
.then((data)=> console.log(data));
}

loadRandomUsers();
//using Asynch Await
async function loadRandomUsers(){
    let response = await fetch ("https://reqres.in/api/users",{
        method: "GET"
    })
    let data = await response.json();
    console.log("data",data);
    }
    
    loadRandomUsers();

//Cat API to return images
async function loadRandomCat(){
    let response = await fetch ("https://api.thecatapi.com/v1/images/search",{
        method: "GET"
    })
    //get the response in a readable stream using .json
    let data = await response.json();
    console.log("data",data);
    //get an array and interested in the first reponse so 0
    const imageUrl = data[0].url;
    console.log("imageUrl",imageUrl);
    //to select the class 
    let element = document.querySelector(".catimage");
    //populate the element from the source
    element.src = imageUrl;
    }
    
    loadRandomCat();

    //exchange Rate (read the documentation)
   /* async function loadExchangeRate(){
        let response = await fetch ("https://rest.coinapi.io/v1/exchangerate/:asset_id_base/:asset_id_quote",{
            method: "GET",
            header: {
                "Accept": "text/plain",
                "X-CoinAPI-Key": "7440C0E3-211E-451E-A2A0-9CB5E5B55DE5", 
        },
        }
        );
        let data = await response.json()
        console.log("data",data);
        }
        
        loadExchangeRate();
    */
   
