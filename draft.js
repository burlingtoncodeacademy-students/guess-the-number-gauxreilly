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

start();
/*--------------Basic framework-------------*/
async function start() {
    console.log("Let's play a game where you (human) make up a number between 1 and 100, and I (computer) guess it.")
    let secretNum = await ask("What is your secret number?\nI won't peek.\n");
    console.log('You entered: ' + secretNum);
    let compGuess = inputNum(min,max);
    // console.log(compGuess) <- this (would) redefine compGuess to now *become* the number produced by randomNum
    let answer1 = await ask('Is your number ' + compGuess + "? ") //if we left it here the answer1 would be 'waited on' but not really asigned to smth
    if(answer1 === "y" || "yes" || "yes!" || "yeah") {
        console.log("Whoo hoo! Skynet wins again!!")
        process.exit(); //not sure if this is supposed to go only at the end or what
 
        //else if(answer1 !== "y" || "yes" || "yes!" || "yeah") {
//     console.log("Hmmm, ok...");

 /*-------------Next Story?----------*/
 } else {
        
    //while(answer1 !== "y" || "yes" || "yes!" || "yeah") {
    while(answer1 !== "y" || answer1 !== "yes" || answer1 !== "yes!" || answer1 !== "yeah") {
        console.log("Hmmm, okay.")
        let highlow = await ask("Is the number higher or lower?")
        console.log(highlow);
    }
        if(highlow = "Lower" || highlow != "Higher") {
//            let min = 1;
//            let max = compGuess;
            console.log("Hmm, so your number is lower than " + compGuess);
            let answer2 = await ask('Is your number ' + inputNum(1,compGuess))
        }
        if(highlow = "Higher" || highlow != "Lower") {
//            let min = compGuess;
//            let max = 100;
            console.log("Hmm, so your number is higher than " + compGuess);
            let answer2 = await ask('Is your number ' + inputNum(compGuess,100))
        }
    }
    

    process.exit();

}
//check out pt2 'numbers' for random number gen info