let userChoice = prompt('Heads or Tails?');
let computerChoice;
let randomNumber = (Math.random()>=0.5)? 1 : 0;
if (randomNumber) {
    computerChoice = 'Tails';
} else {
    computerChoice = 'Heads';
}
if (userChoice === computerChoice) {
    alert('You guessed right! The coin flip landed on ' + userChoice);
} else {
    alert('Sorry, the coin flip landed on ' + computerChoice);
}

let birthYear;
birthYear = prompt('What year were you born?');
let currentAge = (2024 - birthYear);
if (currentAge > 21) {
    alert('You are old enough to drink in the US');
} else if (birthYear === 21) {
    alert('You are old enough to drink in the US...barely');
} else if (currentAge < 21) {
    alert('Sorry, you are not old enough to drink in the US');
}
