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
    let answer1 = await ask('Is your number ' + compGuess + "? ") //if we left it here the answer1 would be 'waited on' but not really asigned to smth
    if(answer1 === "yes" ) {
        console.log("Woohoo! Skynet wins immediately!!")
        process.exit(); //not sure if this is supposed to go only at the end or what
    }

 /*-------------Next Story?----------*/
    else {   
    while(answer1 !== "yes") {
        console.log("Hmmm, okay.")
        let highlow = await ask("Is the number higher or lower? ")
    
        if(highlow === "Lower") {
            console.log("Hmm, so your number is lower than " + compGuess + ".");
            let compGuess2 = inputNum(1,compGuess);
            let answer2 = await ask('Is your number ' + compGuess2 + "? ")
            
            if(answer2 === "Yes"){
                console.log("Woohoo! Skynet wins again, with only two guesses!!")
                process.exit();
            }

            if(answer2 === "No") {
                let highlow = await ask("Is the number higher or lower? ")
                
                if(highlow = "Lower") {
                    console.log("Bah! Lower? Okay, let me try again...");
                    let compGuess3 = inputNum(1,compGuess2);
                    let answer3 = await ask("Third time's the charm! Is your number " + compGuess3 + "? ")
                    
                    if(answer3 === "Yes") {
                        console.log("Woohoo! Skynet wins again, this time in three tries!!")
                        process.exit();
                        }

                    if(answer3 === "No") {
                        let highlow = await ask("Is the number higher or lower?")
                        
                        if(highlow = "Higher") {
                            console.log("Bah! Higher? Okay, one more guess...");
                            let compGuess4 = inputNum(compGuess3,compGuess2);
                            let answer4 = await ask('Is your number ' + compGuess4 + "? ")
                        }
                        if(highlow = "Lower") {
                            console.log("Bah! Lower? Okay, one more guess...")
                            let compGuess4 = inputNum(1,compGuess3);
                            let answer4 = await ask("Is your number " + compGuess4 + "? ")
                        }
                        
                        if(answer4 = "Yes") {
                                console.log("Alright alright! It took four tries, but Skynet wins again!")
                                process.exit();
                            }
                        
                        if(answer4 = "No") {
                            let highlow = await ask("Is the number higher or lower?")
                           
                            if(highlow = Higher) {
                                console.log("Bah! Higher? Okay, one more guess...");
                                let compGuess5 = inputNum(compGuess4,100);
                                let answer4 = await ask('Is your number ' + compGuess3 + "? ")
                                }
                            }
                        }
                }

                if(highlow = "Higher"){
                    console.log("Bah! Higher? Okay, let me try again...");
                    let compGuess3 = inputNum(compGuess2,compGuess1);
                    let answer3 = await ask("Third time's the charm! Is your number " + compGuess3 + "? ")

                    if(answer3 = "Yes") {
                        console.log("Woohoo! Skynet wins again, this time in three tries!!")
                        process.exit();
                    }

                    if(answer3 === "No") {
                        let highlow = await ask("is the number higher or lower?")
                        if(highlow = Higher) {

                        }
                    }

                }
            }
        } //end bracket for if(highlow = "lower")

        if(highlow === "Higher") {
            console.log("Hmm, so your number is higher than " + compGuess + ".");
            let answer2 = await ask('Is your number ' + inputNum(compGuess,100) + "? ")

            if(answer2 === "Yes") {
                console.log("Whoo hoo! Skynet wins again!!")
                process.exit();
            }

            if(answer2 === "No") {
                let highlow = await ask("Is the number higher or lower?")
                w
                if(highlow === "Lower") {
                    console.log("Bah! Lower? Okay, one more guess...");
                    let compGuess3 = inputNum(compGuess,compGuess2);
                    let answer3 = await ask('Is your number ' + compGuess3 + "? ")
                }

                if(highlow === "Higher") {
                    console.log("Bah! Higher? Okay, one more guess...");
                    let compGuess3 = inputNum(compGuess2,100)
                    let answer3 = await ask('Is your number ' + compGuess3 + "? ")
                }
                
                if(answer3 === "Yes") {
                    console.log("Whoo hoo! Skynet wins again!!")
                    process.exit();
                }

                if(answer3 === "No") {
                
                }
            } //end bracket for "if(answer2 = "no")"
        }
    } //'while(answer1 != 'yes')' end bracket
    

    process.exit();

} //initial 'else' end bracket
} //async function end bracket
//check out pt2 'numbers' for random number gen info