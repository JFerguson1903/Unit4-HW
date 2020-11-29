var countdownDisplay = document.querySelector("#countdown");
var startButton = document.querySelector("#start");
var wrongButton = document.querySelector("#wrong");

var totalSeconds = 0;

function quizStart() {
    startTimer(76);


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