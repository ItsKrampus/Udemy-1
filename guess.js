let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess!");
let attempts = 1;
while (parseInt(guess) !== targetNum) {
  if (guess === "q") {
    break;
  }guess=parseInt(guess)
  if (guess > targetNum) {
    guess = prompt("Too high try again!");
    attempts++;
  } else if(guess<targetNum) {
    guess = prompt("Too low try again!");
    attempts++;
  }else{
    guess=prompt("Invalid number. Please enter a number or 'q' to quit ")
  }
}
if (guess === "q") {
  console.log("Ok you quit!");
}else{
console.log(`You got it! it took you ${attempts} guesses`);
}
