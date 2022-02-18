// Starting variables
var currentQuestionIndex = 0;
var timeLeft = 49;

// Start button
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

// Query selectors
var introContainerEl = document.querySelector("#intro-container");
var mainContainerEl = document.querySelector("#main-container");
var questionContainerEl = document.querySelector("#question-container");
var endContainerEl = document.querySelector("#end-container");
var timerEl = document.querySelector("#timer");
var resultEl = document.querySelector("#result");
var answerButtonsEl = document.querySelector("#answer-buttons");
var finalScoreEl = document.querySelector("#final-score");
var scoreFormEl = document.querySelector("#score-form");
var highScoreEl = document.querySelector("#highscore-list");
var highscoreContainerEl = document.querySelector("#highscore-container");

// Hide items upon loading the page
mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
endContainerEl.setAttribute("style", "display:none;"); // hide end page

// Questions array
var quizQuestions = [
    {
        question: "What operator is used to assign a value to a declared variable?",
        answer: "option3",
        options: [
            "Question mark (?)",
            "Colon (:)",
            "Equal sign (=)",
            "Double-equal (==)"
        ],
    },
    {
        question: "How do we declare a conditional statement in JavaScript?",
        answer: "option4",
        options: [
            "while loop",
            "difference...between",
            "for loop",
            "if...else"
        ],
    },
        {
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        answer: "option4",
        options: [
            "3",
            "2",
            "0",
            "1"
        ],
    },
    {
        question: "Inside the HTML document, where do you place your JavaScript code?",
        answer: "option2",
        options: [
            "In the <footer> element",
            "Inside the <script> element",
            "Inside the <head> element",
            "Inside the <link> element"
        ],
    },
    {
        question: "What are the two types of scope JavaScript uses?",
        answer: "option4",
        options: [
            "Outside and Inside",
            "Surrounding and Inner",
            "Abroad and Local",
            "Global and Local"
        ]
    }
];

// Quiz questions, query selectors, and event listeners
var questionEl = document.querySelector("#question");
var answerButtonEl1 = document.querySelector("#option1");
answerButtonEl1.addEventListener("click", ()=>checkAnswer("option1"));
var answerButtonEl2 = document.querySelector("#option2");
answerButtonEl2.addEventListener("click", ()=>checkAnswer("option2"));
var answerButtonEl3 = document.querySelector("#option3");
answerButtonEl3.addEventListener("click", ()=>checkAnswer("option3"));
var answerButtonEl4 = document.querySelector("#option4");
answerButtonEl4.addEventListener("click", ()=>checkAnswer("option4"));

// Go to start quiz screen
function startQuiz() {

    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:block;"); // display quiz page
    timerSet(); // When button is clicked, start the quiz
    showQuestions(); // When button is clicked, start the timer
}

// Setting timer
var timeInterval;
    function timerSet() {
        timeInterval = setInterval(startTimer, 1000);

    function startTimer() {
        // if there is still time left, continue to decrement and show in corner
        if (timeLeft>0) {
            timerEl.innerHTML = "Time Left: " + timeLeft;
            timeLeft--
        }
        else {
            // if time runs out, clear stop the timer and show end time
            clearInterval(timeInterval);
            timerEl.innerHTML = "Time Left: " + timeLeft;
            endScreen(); // go to end screen
        }
    }
};

// Show the questions
function showQuestions() {
    questionEl.textContent = quizQuestions[currentQuestionIndex].question;
    answerButtonEl1.textContent = quizQuestions[currentQuestionIndex].options[0];
    answerButtonEl2.textContent = quizQuestions[currentQuestionIndex].options[1];
    answerButtonEl3.textContent = quizQuestions[currentQuestionIndex].options[2];
    answerButtonEl4.textContent = quizQuestions[currentQuestionIndex].options[3];
};

// Check question answer against selected answer
function checkAnswer(answer) {

    // When question is answered correctly
    if (answer === quizQuestions[currentQuestionIndex].answer) {
        resultEl.textContent = "Correct!" // Alert that question was correct
    }
    // When question is answered incorrectly
    else {
        resultEl.textContent = "Wrong!" // Alert that question was wrong
        timeLeft -= 10; // Subtract from the clock
    }
    currentQuestionIndex++

    // When a question is answered, present another question
    if(currentQuestionIndex < quizQuestions.length) {
        showQuestions();
    }
    // When all questions are answered, end the game
    else {
        endScreen();
    }
}

// Go to end screen
function endScreen() {

    mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
    endContainerEl.setAttribute("style", "display:block;"); // show end page
    resultEl.setAttribute("style", "display:none;") // hide results
    
    var finalScore = timeLeft;
    clearInterval(timeInterval);
    timerEl.innerHTML = "Time Left: " + timeLeft;
    finalScoreEl.textContent = "Your final score is " + finalScore + "!";

}

// When the game is over, save initials and score in local storage
// If something is already in the score list, add to the value and show both
var savedScoreList = JSON.parse(localStorage.getItem("scoreListObj")) || [];

function submitScore(event) {
    event.preventDefault();

    var finalScore = timeLeft;
    var initialInput = document.querySelector("input[name='initial-input']").value;

    // If text area is empty, show alert
    if (initialInput === "") {
        alert("You need to fill out the form!");
        return false;
      }
      else {
          alert("Your score has been submitted!")
      }

    var savedScore = {
        initials: initialInput,
        score: finalScore
        }

    this.reset();

    // Push list into saved score object
    // Sort list by score
    savedScoreList.push(savedScore)
    savedScoreList.sort((a,b) => {
        return b.score - a.score;
    })

    // Convert to string
    localStorage.setItem("scoreListObj", JSON.stringify(savedScoreList))
}

// Submit score
scoreFormEl.addEventListener("submit", submitScore)
