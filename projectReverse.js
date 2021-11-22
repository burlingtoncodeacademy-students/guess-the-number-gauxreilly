const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

let min = 1;
let max = 100;

function compSecretNum(min,max) {
    let range = max - min + 1;
    return min +
        Math.floor(Math.random() * range);
}

start();

async function start() {
/*----set range----*/
    console.log("Let's play a game where I (computer) make up a number, and you (human) try to guess what it is. Ready? \n What range do you want me to choose from?");
    let compRangeMin = await ask("Min: ")
    let compRangeMinNum = parseFloat(compRangeMin);
    min = Math.floor(compRangeMinNum)
    let compRangeMax = await ask("Max: ")
    let compRangeMaxNum = parseFloat(compRangeMax);
    max = Math.floor(compRangeMaxNum)

    while (min > max) {
        console.log("Hey, no tricks! Don't worry, I won't hold it against you.\nLet's try again. What should my range be?")
        compRangeMin = await ask("Min: ")
        let compRangeMinNum = parseFloat(compRangeMin);
        min = Math.floor(compRangeMinNum)
        compRangeMax = await ask("Max: ")
        let compRangeMaxNum = parseFloat(compRangeMax);
        max = Math.floor(compRangeMaxNum)
    }

    if (min < max) {
            console.log("Alright! Minimum of " + min + ", maximum of " + max + ". Let's go!");
    }
    
/*------begin game------*/

    let compSecret = compSecretNum(min,max);
    //console.log(compSecret);
    
    let playerGuess = await ask("What number am I thinking of? ")
    let playerGuessNum = parseFloat(playerGuess)
    //console.log(playerGuessNum)

    if(playerGuessNum == compSecret) {
        console.log("Whoa, that was statistically unprobable. Are you sure you didn't peak at my code?")
        process.exit();
    }

    else {
        while(playerGuessNum !== compSecret) {

            if (playerGuessNum > compSecret) {
                max = playerGuessNum - 1;
            console.log("Nope! But I'll give you a hint: it's lower. That means the range is between " + min + " and " + max + ". ")
        }   
            if(playerGuessNum < compSecret) {
                min = playerGuessNum + 1
            console.log("Nope! But I'll give you a hint: it's higher. That means the range is between " + min + " and " + max + ". ")
        }

        playerGuess = await ask("What number am I thinking of?")
        playerGuessNum = parseFloat(playerGuess)
        
        if(playerGuessNum == compSecret) {
            console.log("You win! Great job. For a human, at least.");
        }

        }
    process.exit();
    }
}