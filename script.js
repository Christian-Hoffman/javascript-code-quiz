var homeEl = document.querySelector("#home");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var highscoreEl = document.querySelector("#highscore");
var questionEl = document.querySelector("#questions");

// var answersEl = document.querySelector('#answers');

var timerEl = document.querySelector("#timer");
var timeRemaining = 60;

var startButton = document.querySelector("#start");
var highscoreButton = document.querySelector("#hsbutton");

var init = function () {
  setState("home");
};


var setState = function (state) {
  if (state === "home") {
    homeEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "quiz") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "end") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute(
      "style",
      "display: flex; flex-direction:column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "highscore") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
  }
};


var countdownClock = function () {
    var timeLeft = setInterval(function() {
        if (i < questions.length) {
            timeRemaining--;
            $('#timer').text('Time Remaining: ' + timeLeft);
            if (timeLeft < 1) {
                $('#timer').text('Times Up! You scored: ' + timeRemaining + 'points');
                clearInterval(timeLeft);
            }
        } else {
            clearInterval(timeLeft);
            $('#questions').css('display', 'none');
            $('#timer').text('You scored: ' + timeRemaining + 'points');
        }
    }, 1000);
};


// Questions for quiz
var questions = [
  {
    id: 0,
    question: "How is a file determined to be a JavaScript file?",
    options: [
      { choice: ".java", isCorrect: false },
      { choice: ".javascript", isCorrect: false },
      { choice: ".js", isCorrect: true },
      { choice: ".jscript", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "How do you link a JavaScript file to HTML?",
    options: [
      { choice: "<script src='./script.js'></script>", isCorrect: true },
      { choice: "<script href='./script.js'></script>", isCorrect: false },
      { choice: "<link src='./script.js'>", isCorrect: false },
      { choice: "<link href='./script.js'>", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "How would you call a function named 'myFunction' in JavaScript?",
    options: [
      { choice: "call.myFunction();", isCorrect: false },
      { choice: "myFunction();", isCorrect: true },
      { choice: "myFunction()", isCorrect: false },
      { choice: "call.MyFunction();", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "How do you define a variable in JavaScript?",
    options: [
      { choice: "variable x = 5;", isCorrect: false },
      { choice: "x = 5;", isCorrect: false },
      { choice: "var x = 5;", isCorrect: true },
      { choice: "var = x = 5;", isCorrect: false },
    ],
  },
];


var displayQuestions = function (i) {
    // displays question
    $('#question').text(questions[i].options);
    // displays choices
    $('#choice1').text(questions[i].choice[0].text);
    $('#choice2').text(questions[i].choice[1].text);
    $('#choice3').text(questions[i].choice[2].text);
    $('#choice4').text(questions[i].choice[3].text);
    
    $('#choice1').value(questions[i].choice[0].isCorrect);
    $('#choice2').value(questions[i].choice[1].isCorrect);
    $('#choice3').value(questions[i].choice[2].isCorrect);
    $('#choice4').value(questions[i].choice[3].isCorrect);
};

var displayNext = function () {
    displayQuestions(0);
    $('.choice').on('click', function (e) {
        if (id < questions.length) {
            isAnswerCorrect(e);
            i++;
            displayQuestions(i);
        }
    });
};

var isAnswerCorrect = function (e) {
    if($(e.target).value()==='false') {
        timeRemaining -= 10;
        $('#result').text('Incorrect');
    } else if ($(e.target).value() === 'true') {
        $('#result').text('Correct');
    }
};


startButton.addEventListener("click", function () {
  setState("quiz");
  questionOne();
});

highscoreButton.addEventListener("click", function () {
  setState("highscore");
});

// need to add css to set style of page when each shows
var setState = function (state) {
  if (state === "home") {
    homeEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "quiz") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "end") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute(
      "style",
      "display: flex; flex-direction:column; background: aquamarine; font-size: 50px; text-align: center;"
    );
    highscoreEl.setAttribute("style", "display: none;");
  }
  if (state === "highscore") {
    homeEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: none;");
    endEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; background: aquamarine; font-size: 50px; text-align: center;"
    );
  }
};

init();
