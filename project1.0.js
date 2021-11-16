//baseline code im working with for the last three stories, trying to troubleshoot here bc it's having the same issue as project1.1.js.... confused bc when i finished working on this the other day it was working/going through highLow until you said yes 

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
//create inputNum as global function 

function inputNum(min,max){
    let range = max - min + 1;
    return min + 
Math.floor(Math.random() * range); //Math.floor rounds down to the nearest whole number
}

//to resolve more stories, create more gloval functions

function smartGuess(min,max) {
    return Math.floor((min + max)/2)
}

start();
/*--------------Basic framework-------------*/
async function start() {
    console.log("Let's play a game where you (human) make up a number between 1 and 100, and I (computer) guess it.")
    let secretNum = await ask("What is your secret number?\nI won't peek.\n");
    console.log('You entered: ' + secretNum);
    let compGuess = smartGuess(min,max);
    let answer = await ask('Is your number ' + compGuess + "? ") 
    if(answer === "yes") {
        console.log("Woohoo! Skynet wins again!!")
        process.exit(); 
    }

 /*-------------Next Story?----------*/
    else {   
    while(answer !== "yes") {
        console.log("Hmmm, okay.")
        let highLow = await ask("Is the number higher or lower? ")
    
        if(highLow === "Higher") { //if it's higher, you want to resert the range to have a lower limit of your compGuess + 1
            console.log("Hmm, so your number is higher than " + compGuess + ". ");
            min = compGuess + 1;
            compGuess = smartGuess(min,max)

    }   else if(highLow === "Lower") {
            console.log("Hmm, so your number is lower than " + compGuess + ". ");
            max = compGuess - 1;
            compGuess = smartGuess(min, max)
        }   
        //remember we are still in a while loop; if the answer is not in the affirmative, run this whileloop. currently we are not checking if there is the right guess

        answer = await ask("Is your number " + compGuess + "? "); //not using let bc we are not redefining, just reassigning the variable
        
        if(answer === "yes") {
            console.log("Woohoo! Skynet wins again!!")
        }
    process.exit();
    }
}
}