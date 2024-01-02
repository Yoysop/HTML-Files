/*
We re building a Cricket app

Suppose we get data from a web service about a certain game
For this challenge there is no data 

1. Cretae one player array for each team (variables 'Player1' and 'Player2')
2. The First player in any player array is the wicketkeeper and the others are field players
For Paris (Team1) create one variable "PSG" with the wicketkeeper name, and the array ('fieldPlayers') with all the remaining 10 field players
3. Create an array `allPlayers` containing all players of both teams (22 players)
4. During the game Paris (PSG) used 3 substitute players. So create a new Array ('players1Final') containing all the original team1 players + 'Soler','Fabiano','Lee'
5. Based on the game.odds object, create one variable for each add (called 'team1', 'draw', 'team2')
6. The team with the lower odd is more likely to win
Print it to the console without using if/else statement or ternary operator
7.Loop over the game. Century array and print each player name to the console along with Century number (example "Century1: Kholi")
8.Use a Loop to calculate the average odd and log it to the console
*/

const game = {
    team1: "PSG",
    team2: "OM",
    players: [
        [
            "Tebas",
            "Hakimi",
            "Marquinhos",
            "Skrinar",
            "Hernandez",
            "Vitinha",
            "Danilo",
            "Muller",
            "Dembele",
            "Mbappe",
            "Barcola",

        ],
        [
            "OM1",
            "OM2",
            "OM3",
            "OM4",
            "OM5",
            "OM6",
            "OM7",
            "OM8",
            "OM9",
            "OM10",
            "OM11",


        ],
    ],
    Century: ["Kholi","Sharma","Warner","Maxwell"],
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//Exercice

//1. Cretae one player array for each team (variables 'Player1' and 'Player2') > Destruturing

let players = game.players;
console.log("Players", players);

let [players1, players2] = game.players;
console.log("Players", players1);
console.log("Players", players2);

//2. The First player in any player array is the wicketkeeper and the others are field players > rest operator
//For Paris (Team1) create one variable "PSG" with the wicketkeeper name, and the array ('fieldPlayers') with all the remaining 10 field players
let [captain,...fieldPlayers] = players1;
console.log("Captain",captain );
console.log("fieldPlayers",fieldPlayers);

//3. Create an array `allPlayers` containing all players of both teams (22 players) > spread
let allPlayers = [...players1,...players2];
console.log("All Players", allPlayers);

//4. During the game Paris (PSG) used 3 substitute players. So create a new Array ('players1Final') containing all the original team1 players + 'Soler','Fabiano','Lee'
let playerFinal = [...players1, "Soler","Fabiano","Lee"];
console.log("playerFinal", playerFinal);

//5. Based on the game.odds object, create one variable for each add (called 'team1', 'draw', 'team2')
let{team1, x: draw,team2} = game.odds;
console.log("PSG", team1);
console.log("draw", draw);
console.log("OM", team2);

//6. The team with the lower odd is more likely to win
/*
if (team1 > team2){
    console.log("Team 1 will win")
}else{
        console.log("Team  will win")
}
team1 > team2 ?     console.log("Team 1 will win") :     console.log("Team 2 will win")

use the logical operator logic to meet requirements
*/
team1 < team2 && console.log("PSG will win");
team2 < team1 && console.log("OM will win");

//Print it to the console without using if/else statement or ternary operator
//7.Loop over the game. Century array and print each player name to the console along with Century number (example "Century1: Kholi")

for(let [index,value] of game.Century.entries()){
    console.log(`Century ${index + 1}: ${value}`);
}

//8.Use a Loop to calculate the average odd and log it to the console
let sum = 0;
let counter = 0;
for(let currentItem of Object.values(game.odds)){
    console.log(currentItem);
    sum = sum + currentItem;
    counter = counter + 1;
}
console.log("sum",sum);
console.log("counter",counter);
console.log("Average", Math.round(sum/counter));