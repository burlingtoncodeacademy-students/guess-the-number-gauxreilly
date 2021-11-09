/*-----------Boiler Plate\readline standards---------*/

const readline = require('readline'); 
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

/*----------------Global-----------*/

let min = 1;
let max = 100;

/*-----------Function Block---------*/
//create randomNum as global function 

function randomNum(min,max){
    let range = max - min + 1;
    return min + 
Math.floor(Math.random() * range); //Math.floor rounds down to the nearest whole number
}

start();
/*--------------Basic framework-------------*/
async function start() {
    console.log("Let's play a game where you (human) make up a number between 1 and 100, and I (computer) guess it.")
    let secretNumb = await ask("What is your secret number?\nI won't peek.\n");
    console.log('You entered: ' + secretNum);
    let compGuess = randomNum(min,max)
    // console.log(compGuess) <- this (would) redefine compGuess to now *become* the number produced by randomNum
    let answer = await ask('Is your number ' + compGuess + "?") //if we left it here the answer would be 'waited on' but not really asigned to smth
    if(answer === "y") {
        console.log("Whoo hoo! Skynet wins again!!")

    process.exit();
} /*-------------Next Story?----------*/
    else {
        
    while(answer != 'y') {
        let highlow = await ask("Is the number higher or lower?")
        console.log(highlow)
        }
    }
}
//check out pt2 'numbers' for random number gen info