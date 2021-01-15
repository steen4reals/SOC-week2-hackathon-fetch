let data;
let score;
let index;
let userAnswer;
let correctAnswer;
let questionString;

let displayFinalScore = document.createElement("p");
let img = document.createElement("img");
let startButton = document.querySelector("#start-button");
let trueButton = document.querySelector("#true-button");
let newGameButton = document.querySelector("#new-game");
let falseButton = document.querySelector("#false-button");
let displayQ = document.querySelector("p");
let scoreDisplay = document.querySelector("#score");
let question = document.querySelector("#question");
let triviaImg = document.querySelector("img");
let userName = prompt("What is your name?");

trueButton.style.display = "none";
falseButton.style.display = "none";
scoreDisplay.style.display = "none";
question.style.display = "none";
newGameButton.style.display = "none";

startButton.addEventListener("click", fetchData);
trueButton.addEventListener("click", answerTrue);
falseButton.addEventListener("click", answerFalse);
newGameButton.addEventListener("click", resetGame);



function answerTrue() {
  userAnswer = "True";
  checkAnswer();
}

function answerFalse() {
  userAnswer = "False";
  checkAnswer();
}

function checkAnswer() {
  if (userAnswer == correctAnswer) {
    score = score + 1;
    scoreDisplay.innerText = `Score: ${score}`;
    index += 1;
    displayQuestion();
  } else {
    score = score;
    index += 1;
    displayQuestion();
  }
}

function getCorrectAnswer() {
  correctAnswer = data.results[index].correct_answer;
  return correctAnswer;
}

function displayQuestion() {
  if (index < 9) {
    questionString = data.results[index].question;
    questionString = questionString.replace(
      /&#039|&rsquo;|&quot;|&#39;|;/g,
      ""
    );
    displayQ.innerText = `Question ${[index + 1]}: ${questionString}`;
    document.body.appendChild(displayQ);
    getCorrectAnswer();
  } else {
    endGame();
  }
}

function endGame() {
  img.setAttribute("class", "game-over-img");
  img.src =
    "https://images.squarespace-cdn.com/content/v1/58af450eb3db2b0582612f1d/1547666385983-B2OJ1FV997UREJZUV4DV/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/videoblocks-game-over-8-bit-funky-a-funky-colorful-4k-game-over-screen-animation-letters-falling-towards-the-center-8-bit-retro-style-red-and-yellow_hcqx9_kax_thumbnail-full06.png?format=1000w";
  document.body.appendChild(img);
  document.body.appendChild(displayFinalScore);
  displayFinalScore.setAttribute("class", "end-score");
  if (score >9){
  displayFinalScore.innerText = `${userName}, Your score is ${score}! What a legend`;
  }
  else if (score <6){
  displayFinalScore.innerText = `${userName}, Your score is ${score}! You're rubbish at this.`;
  }
  else {
    displayFinalScore.innerText = `${userName}, Your score is ${score}! Could do better. `;
  }

  trueButton.style.display = "none";
  falseButton.style.display = "none";
  scoreDisplay.style.display = "none";
  question.style.display = "none";
  newGameButton.style.display = "block";
}

function resetGame() {
  score = 0;
  index = 0;
  trueButton.style.display = "none";
  newGameButton.style.display = "none";
  falseButton.style.display = "none";
  scoreDisplay.style.display = "none";
  startButton.style.display = "block";
  // img.style.display = "none";
  // displayFinalScore.style.display = "none";
  document.body.removeChild(displayFinalScore);
  document.body.removeChild(img);

  scoreDisplay.innerText = `Score: ${score}`;
  document.body.appendChild(scoreDisplay);
}

function startGame() {
  score = 0;
  index = 0;
  trueButton.style.display = "inline";
  newGameButton.style.display = "none";
  falseButton.style.display = "inline";
  scoreDisplay.style.display = "block";
  question.style.display = "block";
  startButton.style.display = "none";
  scoreDisplay.innerText = `Score: ${score}`;
  document.body.appendChild(scoreDisplay);
  displayQuestion();
}

async function fetchData() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=15&type=boolean"
  );
  data = await response.json();
  startGame();
}
