// Create the necessary elements to use later
var body = document.body;
var startBtn = document.getElementById("startBtn");
var highscoresBtn = document.getElementById("highscoresBtn");

var questionsDiv = document.getElementById("questions");
var choicesDiv = document.getElementById("choices");
var timerDiv = document.getElementById("timer");
var counterDiv = document.getElementById("counter");
var currentQuestion = 0;
var score= 0;
var instructionsDiv = document.getElementById("instructions");

// Start button and timer begins
document.getElementById("startBtn").addEventListener("click", function () {
  instructionsDiv.textContent = "";
  startBtn.style.display = "none"
  var timeleft = 60;

  var downloadTimer = setInterval(function seconds() {
    document.getElementById("count").innerHTML =
      timeleft + "&nbsp" + "seconds remaining";

// Timer reaches 0 and Time is up, quiz over. 
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("count").innerHTML = "Time is up!";
    }
  }, 1000);

  //Display questions in the container 
  var h2Tag = document.createElement("h2");
  h2Tag.textContent = questions[currentQuestion].q;
  document.querySelector(".container").appendChild(h2Tag);

  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var questionButtons = document.createElement("button");
    questionButtons.setAttribute("class", "btn");
    questionButtons.textContent = questions[currentQuestion].answers[i];
    document.querySelector(".container").appendChild(questionButtons);
  }
});

// create questions here
let questions = [
  {
    q: "Hyper Text Markup Language Stand For?",
    choices: ["JavaScript", "XHTML", "CSS", "HTML"],
    correctAnswer: 3,
  },
  {
    q: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2,
  },
  {
    q:
      "What tag can be used to insert a line break or blank line in an HTML document?",
    choices: ["<title>", "<head>", "<body>", "<br>"],
    correctAnswer: 3,
  },
  {
    q:
      "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    choices: ["<!DOCTYPE>", "<code>", "<embed>", "<caption>"],
    correctAnswer: 0,
  },
  {
    q:
      "What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ["Condition", "Boolean", "Funtion", "String"],
    correctAnswer: 1,
  },
  {
    q:
      "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choices: ["Conditional Loop", "Else Loop", "While Loop", "For Loop"],
    correctAnswer: 2,
  },
];



// This function will check the correct answer against the user choice
// It will also load the next question, or if it is the last question, will show gameOver()
function checkAnswer(event) {
  event.preventDefault();
  var wrongAnswer = 10;
  var q = questionList[currentQuestion];
  var userInput = this.children[0].getAttribute("data-answer");
  if (userInput === q.correctAnswer) {
    score++;
    alert("Correct!");
  } else {
    countDown = countDown - wrongAnswer;
    countDown.textContent = countDown;
    alert("Wrong Answer!");
  }
  if (currentQuestionIndex < lastQuestionIndex) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    alert("Game Over! Your total score is: " + score + "!");
  }
}

/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */
