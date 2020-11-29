var countdownDisplay = document.querySelector("#countdown");
var startButton = document.querySelector("#start");
var wrongButton = document.querySelector("#wrong");
var quizTimeContainer = document.querySelector("#quizTime")
var totalSeconds = 0;
var activeQuestion = 0;


var questions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["script", "scripting", "javascript", "js"],
        answer: 0
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The <head> section", "Both the <head> section and the <body> section are correct", "The <body> section"],
        answer: 1
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ['script name="xxx.js"', 'script src="xxx.js"', 'script href="xxx.js"'],
        answer: 1
    }

];

/* for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    quizTimeContainer.innerHTML = question;
    document.write(question);
    var options = questions[i].choices;
    for (var opt in options) {

        radioEle.value = options[opt];

    }
} */



function quizStart() {
    startTimer(76);
    loadQuestion(activeQuestion);
    /*     for (var i = 0; i < questions.length; i++) {
            var question = questions[i].question;
            quizTimeContainer.innerHTML = question;
            var options = questions[i].choices;
            for (var opt in options) {
                quizTimeContainer.innerHTML = options[opt];
                console.log(options[opt]);
            }
        }
     */

}

function loadQuestion(questionIndex) {
    quizTimeContainer.innerHTML = `<h2>${questions[questionIndex].question}</h2>`;

    var options = questions[questionIndex].choices;
    for (var opt in options) {
        quizTimeContainer.innerHTML += `<div><button type="button" value="${opt}" class="btnAnswer btn btn-secondary btn-sm my-2">${String(options[opt])}</button></div>`;
    }
}

function usersAnswerChoice(selectedAnswerIndex) {
    if (selectedAnswerIndex == questions[activeQuestion].answer) {
        console.log("correct")
    } else {
        reduceTimer();
        console.log("you wrong SUCKAH!");
    };
    activeQuestion++;
    loadQuestion(activeQuestion);
}

function startTimer(updatedTime) {
    totalSeconds = updatedTime;

    interval = setInterval(function() {
        totalSeconds--;
        countdownDisplay.innerHTML = totalSeconds;
    }, 1000);
}

function reduceTimer() {
    clearInterval(interval);
    var updatedTime = totalSeconds - 10;
    startTimer(updatedTime);
}

startButton.addEventListener("click", quizStart);
wrongButton.addEventListener("click", reduceTimer);


$(document.body).on('click', '.btnAnswer', function() {
    var userChoice = $(this).val();
    usersAnswerChoice(userChoice);
});