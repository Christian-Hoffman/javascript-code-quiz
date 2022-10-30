var i = 0;
var timeRemaining;

// Questions
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

// Starts countdown clock for quiz
var countdownClock = function () {
  $("#timer").css("display", "flex");
  var timeLeft = setInterval(function () {
    if (i < 4) {
      timeRemaining = timeRemaining - 1;
      $("#timer").text("Time Left: " + timeRemaining);
      if (timeRemaining < 1) {
        $("#timer").text("Times Up! You scored: " + timeRemaining + "points");
        clearInterval(timeLeft);
        $("#quiz").css("display", "none");
        $("#end").css("display", "flex");
      }
    } else {
      clearInterval(timeLeft);
      $("#timer").text("You scored: " + timeRemaining + "points");
      $("#quiz").css("display", "none");
      $("#end").css("display", "flex");
    }
  }, 1000);
};

var restart = function () {
  $("#home").hide();
  $("#result").text("");
  $("#timer").hide();
  timeRemaining = 60;
};

var displayQuestions = function (i) {
  $("#quiz").css("display", "flex");
  // displays question
  $("#question").text(questions[i].question);
  // displays choices
  $("#choice1").text(questions[i].options[0].choice);
  $("#choice2").text(questions[i].options[1].choice);
  $("#choice3").text(questions[i].options[2].choice);
  $("#choice4").text(questions[i].options[3].choice);

  $("#choice1").val(questions[i].options[0].isCorrect);
  $("#choice2").val(questions[i].options[1].isCorrect);
  $("#choice3").val(questions[i].options[2].isCorrect);
  $("#choice4").val(questions[i].options[3].isCorrect);
};

// checks is the choice the user clicked is correct and removes time if incorrect
var isAnswerCorrect = function (e) {
  if ($(e.target).val() === "false") {
    timeRemaining = timeRemaining - 10;
    $("#result").text("Incorrect");
  } else if ($(e.target).val() === "true") {
    $("#result").text("Correct");
  }
};

var displayNext = function () {
  displayQuestions(0);
  $(".choice").on("click", function (e) {
    if (i < 4) {
      isAnswerCorrect(e);
      i++;
      displayQuestions(i);
    }
  });
};

var submitScore = function () {
  var scores = {
    initials: $("input[name='initials']").val(),
    highscore: timeRemaining,
  };
  localStorage.setItem("scores", JSON.stringify(timeRemaining));
  var scoreArray = [];
  scoreArray.push(scores);
  scoreArray = scoreArray.concat(
    JSON.parse(localStorage.getItem("scoreArray") || "[]")
  );
  localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
};

var showHighscore = function () {
  var previousScore = JSON.parse(localStorage.getItem("scoreArray"));
  $("#hsList").text("");
  for (var x = 0; x < previousScore.length; x++) {
    $("#hsList").append("<li>" + previousScore[x].initials + ": " + previousScore[x].highscore + "</li>");
  }
};

$("#start").on("click", function () {
  restart();
  displayNext();
  countdownClock();
});

$("#hsbutton").on("click", function () {
  showHighscore();
  $("#timer").text("");
  $("#home").css("display", "none");
  $("#quiz").css("display", "none");
  $("#end").css("display", "none");
  $("#highscore").css("display", "flex");
});

$("#submitHS").on("click", function () {
  submitScore();
  restart();
  $("#timer").text("");
  $("#home").css("display", "none");
  $("#quiz").css("display", "none");
  $("#end").css("display", "none");
  $("#highscore").css("display", "flex");
});
