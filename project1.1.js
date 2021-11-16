
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

function inputNum(min, max) {
    let range = max - min + 1;
    return min +
        Math.floor(Math.random() * range); //Math.floor rounds down to the nearest whole number
}

//to resolve more stories, create more gloval functions

function smartGuess(min, max) {
    return Math.floor((min + max) / 2)
}

/* function crossRoads() {
    let crossRoadsRandom = Math.random() * 100;
    if(crossRoadsRandom > 50) {
        console.log("Oh, did you get distracted? " + max + " is smaller than " + min + ". Don't worry, we can start over.")
        start();
    }
    if(crossRoads < 50) {
        console.log("Liar! Or maybe you just aren't very smart? Everyone knows that " + max + " is smaller than " + min + ". I'm not playing with you anymore!");
        process.exit();
    }
} */

start();
/*--------------Basic framework-------------*/
async function start() {
    console.log("Let's play a game where you (human) make up a number, and I (computer) guess it.")

    console.log("What range do you want to choose your number from? I'll let you choose a minimum (min) and maximum (max). Whole numbers only!")
    let playerRangeMin = await ask("Min: ")
    let playerRangeMinNum = parseFloat(playerRangeMin);
    min = Math.floor(playerRangeMinNum)
    let playerRangeMax = await ask("Max: ")
    let playerRangeMaxNum = parseFloat(playerRangeMax);
    max = Math.floor(playerRangeMaxNum)
    /*  --simpler version of checking range validity, doesn't allow for new input but just swaps the numbers--
  while(max < min) {
      console.log("Hey, no tricks! Let me fix that for you...")
      min = Math.floor(playerRangeMaxNum)
      max = Math.floor(playerRangeMinNum)
  }
      console.log("Minimum of " + min + ", maximum of " + max + ".");
      console.log("Okay, let's go.") 
      -----*/

    while (min > max) {
        console.log("Hey, no tricks! Don't worry, I won't hold it against you.\nLet's try again. What's your range?")
        playerRangeMin = await ask("Min: ")
        let playerRangeMinNum = parseFloat(playerRangeMin);
        min = Math.floor(playerRangeMinNum)
        playerRangeMax = await ask("Max: ")
        let playerRangeMaxNum = parseFloat(playerRangeMax);
        max = Math.floor(playerRangeMaxNum)

        if (min < max) {
            console.log("Minimum of " + min + ", maximum of " + max + ".");
            console.log("Okay, let's go.")
        }
    }

    let secretNum = await ask("\n...initializing...\n\nWhat is your secret number?\nI won't peek.\n\nNumber: ");
    let compGuess = smartGuess(min, max);
    let answer = await ask("Is your number " + compGuess + "? (yes/no)")
    if (answer === "yes") {
        console.log("Woohoo! Skynet wins again!!")
        process.exit();
    }

    /*-------------Next Story?----------*/
    else {
        while (answer !== "yes") {
            console.log("Hmmm, okay.")
            let highLow = await ask("Is the number higher or lower? ")

            if (highLow === "Higher") { //if it's higher, you want to reset the range to have a lower limit of your compGuess + 1
                console.log("Hmm, so your number is higher than than " + compGuess + " and lower than " + (max + 1) + ". ");
                min = compGuess + 1;
                if (min > max) {
                    crossRoads = Math.random() * 100;
                    if(crossRoads > 50) {
                        console.log("Oh, did you get distracted? " + max + " is smaller than " + min + ". Don't worry, we can start over.")
                        start();
                    }
                    if(crossRoads < 50) {
                        console.log("Liar! Or maybe you just aren't very smart? Everyone knows that " + max + " is smaller than " + min + ". I'm not playing with you anymore!");
                        process.exit();
                    }
                }

                compGuess = smartGuess(min, max)

            } else if (highLow === "Lower") {
                console.log("Hmm, so your number is higher than " + (min - 1) + " and lower than " + compGuess + ". ");
                max = compGuess - 1;
                if (min > max) {
                    crossRoads = Math.random() * 100;
                    if(crossRoads > 50) {
                        console.log("Oh, did you get distracted? " + min + " is larger than " + max + ". Don't worry, we can start over.")
                        start();
                    }
                    if(crossRoads < 50){
                        console.log("Liar! Or maybe you just aren't very smart? Everyone knows that " + min + " is larger than " + max + ". I'm not playing with you anymore!");
                        process.exit();
                    }
                }
                compGuess = smartGuess(min, max)
            }
            //remember we are still in a while loop; if the answer is not in the affirmative, run this whileloop. currently we are not checking if there is the right guess

            answer = await ask("Is your number " + compGuess + "? (yes/no) "); //not using let bc we are not redefining, just reassigning the variable

            if (answer === "yes") {
                console.log("Woohoo! Skynet wins again!!")
            }
        }
        process.exit();

    }
}

