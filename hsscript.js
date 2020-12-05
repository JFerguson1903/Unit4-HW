// variables set for locations in highscores.html or URL
var url_string = window.location.href;
var url = new URL(url_string);
var initials = url.searchParams.get("initials");
var score = url.searchParams.get("reportedScore");
var listedHighScores = document.querySelector("#listedHighScores");
var clearButton = document.querySelector("#clear");
var currentHighScore = JSON.parse(localStorage.getItem("highScores"));

// removes parameters that were added to URL so they do not duplicate
url.searchParams.delete("initials");
url.searchParams.delete("reportedScore");
history.replaceState(null, null, url);

// calls function 
highScoresPageLoad();

// saves current high score and displays no score if needed
function highScoresPageLoad() {
    if (currentHighScore === null) {
        currentHighScore = [];
    }

    if (initials != null && score != null) {
        currentHighScore.push([initials, score]);
        currentHighScore.sort(function(a, b) { return b[1] - a[1] });
        // Stores new data in local storage
        localStorage.setItem("highScores", JSON.stringify(currentHighScore));
    }

    if (currentHighScore.length === 0) {
        noScoreDisplay();
    }

    compileHighScores();
}

// hides clear button and displays message that there aren't any highscores
function noScoreDisplay() {
    listedHighScores.innerHTML = `<li class="list-group-item list-group-item-warning">No Scores to display. Play a round and get on the board!</li>`
    clearButton.classList.add("d-none");
}

// gathers and sorts the highscores to be displayed
function compileHighScores() {
    var rank = 1;
    for (var index = 0; index < currentHighScore.length; index++) {
        listedHighScores.innerHTML += `<li class="list-group-item list-group-item-secondary text-left">${rank}. ${currentHighScore[index][0]} - ${currentHighScore[index][1]}</li>`
        rank++;
    }
}

// removes items from local storage and runs noScoreDisplay function
function clearLocalStorage() {
    localStorage.removeItem("highScores");
    listedHighScores.innerHTML = "";
    noScoreDisplay();
}

// event listener to clear local storage
clearButton.addEventListener("click", clearLocalStorage);