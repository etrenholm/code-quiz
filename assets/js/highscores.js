var listContainerEl = document.querySelector(".highscore-container")

// Create ordered list items
var listEl = document.createElement("ol")
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var li5 = document.createElement("li")


// Append ordered list
listContainerEl.appendChild(listEl)

// clear button clears scores/local storage
var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearScores);

function clearScores() {
    localStorage.removeItem("scoreListObj");
    listEl.removeChild(li1);
    listEl.removeChild(li2);
    listEl.removeChild(li3);
    listEl.removeChild(li4);
    listEl.removeChild(li5);
}



// When page is reoloaded, old score reloads from local storage
var savedScoreList = JSON.parse(localStorage.getItem("scoreListObj")) || [];

var initials = savedScoreList[0].initials;
var score = savedScoreList[0].score
listEl.appendChild(li1);
li1.textContent = initials + ": " + score;

var initials = savedScoreList[1].initials;
var score = savedScoreList[1].score
listEl.appendChild(li2);
li2.textContent = initials + ": " + score;

var initials = savedScoreList[2].initials;
var score = savedScoreList[2].score
listEl.appendChild(li3);
li3.textContent = initials + ": " + score;

var initials = savedScoreList[3].initials;
var score = savedScoreList[3].score
listEl.appendChild(li4);
li4.textContent = initials + ": " + score;

var initials = savedScoreList[4].initials;
var score = savedScoreList[4].score
listEl.appendChild(li5);
li5.textContent = initials + ": " + score;



