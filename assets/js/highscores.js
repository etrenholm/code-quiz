var listContainerEl = document.querySelector(".highscore-container")

// Create ordered list items
var listEl = document.createElement("ol")
var li = document.createElement("li")

// Append ordered list
listContainerEl.appendChild(listEl)

// Append list items


// var createScoreList = function() {
//     console.log("I'm here")
//     li.textContent = savedScoreList[i].initials;
//     listEl.appendChild(li);
// }


savedScoreIndex = 0
// When page is reoloaded, old score reloads from local storage
var loadScores = function() {

var savedScoreList = JSON.parse(localStorage.getItem("scoreListObj"));

    if (!savedScoreList) {
        savedScoreList = [];
        return false
    }

    if (savedScoreIndex < savedScoreList.length) {
        li.textContent = savedScoreList[0].initials + " " + savedScoreList[savedScoreIndex].score;
        listEl.appendChild(li);
        li.textContent = savedScoreList[1].initials + " " + savedScoreList[savedScoreIndex].score;
        listEl.appendChild(li);
    }
    savedScoreIndex++

}


// clear button clears scores/local storage
var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearScores);

function clearScores() {
    localStorage.removeItem("scoreListObj");
}

loadScores();