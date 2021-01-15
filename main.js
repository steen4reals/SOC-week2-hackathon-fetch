// // fetch api data: 10 random questions
// const url =
//   "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean";

let data;
let score;
let index;
let trueButton = document.querySelector(".true-button")
let falseButton;
let displayQ = document.querySelector("p");
let answer;
let scoreDisplay;

// function answerQuestion() {
// }

//trueButton.addEventListener("click", answerTrue);
//falseButton.addEventListener("click", answerFalse);


function answerTrue() {
  answer = true;
  console.log(answer);
}
function answerFalse() {
  answer = false;
  console.log(answer);
}

// function checkAnswer(){
//     if(data.results[index].correct_answer === )
// }

function displayQuestion() {
  displayQ.innerText = data.results[index].question;
  document.body.appendChild(displayQ);
  index += 1;

  // tord
  //   let ans = document.createElement("p");
  //   ans.innerText = data.results[index].correct_answer;
  //   document.body.appendChild(ans);
}

// function trueOrFalse() {
  // trueButton = document.createElement("button");
  // falseButton = document.createElement("button");
  // trueButton.innerText = "true";
  // falseButton.innerText = "false";
  // trueButton.setAttribute("id", "trueButton");
  // // falseButton.setAttribute("id", "falseButton");
  // document.body.appendChild(trueButton);
  // document.body.appendChild(falseButton);


function startGame() {
  
  score = 0;
  index = 0;
  trueButton.style.display = 'none';
  // let scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = `Score: ${score}`;
  document.body.appendChild(scoreDisplay);
  // document.body.removeChild(startButton);
  displayQuestion();
  trueOrFalse();
  trueButton.addEventListener("click", displayQuestion);
}

async function fetchData() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"
  );
  data = await response.json();
  startGame();
}

// ask for username input

// let username = prompt("What is your name?");

// set up start button- "start";

// let startButton = document.createElement("button");
// startButton.innerText = "Start";
document.body.appendChild(startButton);

// when the button is clicked, pull the fetch request

startButton.addEventListener("click", fetchData);

// display a question
// display two other buttons - true / false
// set score to zero
// if whatever is pressed matches answer - show green tick & plus 1 score
// display another question
// repeat process (*10)
// then show final score - with username
// display something funny - dad jokes fetch api
//

/// stretch
// Add difficulty levels
// add stored usernames for leaderboard
