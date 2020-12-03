// Create the necessary elements to use later
var body = document.body;
var startBtn = document.getElementById("startBtn");
var highscoresBtn = document.getElementById("highscoresBtn");

var questionsDiv = document.getElementById("questions");
var choicesDiv = document.getElementById("choices");
var timerDiv = document.getElementById("timer");
var counterDiv = document.getElementById("counter");
let currentQuestion = 0;
var score = 0;
var instructionsDiv = document.getElementById("instructions");
var wrongAnswer= 10

// Start button and timer begins
document.getElementById("startBtn").addEventListener("click", function () {
  instructionsDiv.textContent = "";
  startBtn.style.display = "none";
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
  var renderQuestion= function(){
    document.getElementById("questionContainer").innerHTML=""
  var h2Tag = document.createElement("h2");
  h2Tag.textContent = questions[currentQuestion].q;
  document.querySelector("#questionContainer").appendChild(h2Tag);

  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    var questionButtons = document.createElement("button");
    questionButtons.setAttribute("class", "btn choicesBtn");
    // questionButtons.setAttribute("class", "btn");
    questionButtons.textContent = questions[currentQuestion].choices[i];
    document.querySelector("#questionContainer").appendChild(questionButtons);
  }
  const choicesBtn = document.querySelectorAll(".choicesBtn");
  choicesBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("clicked")
      var response = this.textContent;
      if (response === questions[currentQuestion].correctAnswer) {
        score++;
        alert("Correct!");
      } else {
        timeleft = timeleft - wrongAnswer;
        timeleft.textContent = timeleft;
        alert("Wrong Answer!");
      }
      if (currentQuestion < lastQuestion) {
        currentQuestion++;
        renderQuestion();
      } else {
        // alert("Game Over! Your total score is: " + score + "!");
        var highScoreInput = document.createElement("input");
        document.querySelector("#questionContainer").appendChild(highScoreInput);
      }
    });
  });

  };
 renderQuestion() 
});


// create questions here
let questions = [
  {
    q: "Hyper Text Markup Language Stand For?",
    choices: ["JavaScript", "XHTML", "CSS", "HTML"],
    correctAnswer: "HTML",
  },
  {
    q: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: "CSS",
  },
  {
    q:
      "What tag can be used to insert a line break or blank line in an HTML document?",
    choices: ["<title>", "<head>", "<body>", "<br>"],
    correctAnswer: "<br>",
  },
  {
    q:
      "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    choices: ["<!DOCTYPE>", "<code>", "<embed>", "<caption>"],
    correctAnswer: "<!DOCTYPE>",
  },
  {
    q:
      "What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ["Condition", "Boolean", "Function", "String"],
    correctAnswer: "Boolean",
  },
  {
    q:
      "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choices: ["Conditional Loop", "Else Loop", "While Loop", "For Loop"],
    correctAnswer: "While Loop",
  },
];

var lastQuestion= questions.length-1;

// This function will check the correct answer against the user choice
// It will also load the next question, or if it is the last question, will alert game over!
// function checkAnswer(event) {
//   event.preventDefault();
//   var wrongAnswer = 10;
//   var q = questions[currentQuestion];
//   var userInput = this.children[0].getAttribute("data-answer");
//   if (userInput === q.correctAnswer) {
//     score++;
//     alert("Correct!");
//   } else {
//     timeleft = timeleft - wrongAnswer;
//     timeleft.textContent = timeleft;
//     alert("Wrong Answer!");
//   }
// if (currentQuestion < lastQuestion) {
//   currentQuestion++;
//   renderQuestion();
// } else {
//   alert("Game Over! Your total score is: " + score + "!");
// }
// // }

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
