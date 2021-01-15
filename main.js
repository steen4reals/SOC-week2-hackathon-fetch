// fetch api data: 10 random questions

async function fetchData() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"
  );
  let data = await response.json();
  //console.log(data);
}

// ask for username input

let username = prompt("What is your name?");

// set up start button- "start";

let startButton = document.createElement("button");
startButton.innerText = "Start";
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
