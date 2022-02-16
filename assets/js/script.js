// Start button
var currentQuestionIndex = 0;
var timeLeft = 49; 
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

var introContainerEl = document.querySelector("#intro-container");
var mainContainerEl = document.querySelector("#main-container");
var questionContainerEl = document.querySelector("#question-container");
var endContainerEl = document.querySelector("#end-container");
var timerEl = document.querySelector("#timer");
var resultEl = document.querySelector("#result");
var answerButtonsEl = document.querySelector("#answer-buttons");
var finalScoreEl = document.querySelector("#final-score");
var scoreFormEl = document.querySelector("#score-form")
var highScoreEl = document.querySelector("#highscore-list")
var highscoreContainerEl = document.querySelector("#highscore-container")

mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
endContainerEl.setAttribute("style", "display:none;"); // hide end page
highscoreContainerEl.setAttribute("style", "display:none;"); // hide highscore form


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

var questionEl = document.querySelector("#question");
var answerButtonEl1 = document.querySelector("#option1");
answerButtonEl1.addEventListener("click", ()=>checkAnswer("option1"));
var answerButtonEl2 = document.querySelector("#option2");
answerButtonEl2.addEventListener("click", ()=>checkAnswer("option2"));
var answerButtonEl3 = document.querySelector("#option3");
answerButtonEl3.addEventListener("click", ()=>checkAnswer("option3"));
var answerButtonEl4 = document.querySelector("#option4");
answerButtonEl4.addEventListener("click", ()=>checkAnswer("option4"));

// When button is clicked, start the quiz
function startQuiz() {

    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:block;"); // display quiz page
    startTimer();
    showQuestions();
}


// When button is clicked, start the timer
function startTimer() {

    var timeInterval = setInterval(function() {
        if(timeLeft>0) {
            timerEl.innerHTML = "Time Left: " + timeLeft;
            timeLeft--
        }
        else {
            clearInterval(timeInterval);
            timerEl.innerHTML = "Time Left: " + timeLeft;
            // go to end screen
            endScreen();
        }
    }, 1000)

};



// show the questions
function showQuestions() {
    console.log(currentQuestionIndex)
    questionEl.textContent = quizQuestions[currentQuestionIndex].question;
    answerButtonEl1.textContent= quizQuestions[currentQuestionIndex].options[0];
    answerButtonEl2.textContent = quizQuestions[currentQuestionIndex].options[1];
    answerButtonEl3.textContent = quizQuestions[currentQuestionIndex].options[2];
    answerButtonEl4.textContent = quizQuestions[currentQuestionIndex].options[3];
};

function checkAnswer(answer) {

    // When question is answered correctly
    if(answer === quizQuestions[currentQuestionIndex].answer) {
        resultEl.textContent = "Correct!" // alert that question was correct
    }
    // When question is answered incorrectly
    else {
        resultEl.textContent = "Wrong!" // alert that question was wrong
        timeLeft -= 10; // subtract from the clock
    }
    currentQuestionIndex++

    // When a question is answered, present another question
    if(currentQuestionIndex < quizQuestions.length) {
        console.log("if")
        showQuestions()
    }

    // When all questions are answered OR the timer reaches 0, game is over
    else {
        console.log("else")
        endScreen()
    }
}

// End screen
function endScreen() {

    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
    endContainerEl.setAttribute("style", "display:block;"); // show end page
    resultEl.setAttribute("style", "display:none;") // hide results
    var finalScore = timeLeft;
    finalScoreEl.textContent = "Your final score is " + finalScore + "!";

}

// submit score screen
// When the game is over, save initials and score in local storage
function submitScore(event) {
    event.preventDefault();

    var finalScore = timeLeft;
    finalScoreEl.textContent = "Your final score is " + finalScore + "!";
    var initialInput = document.querySelector("input[name='initial-input']").value;

    var savedScore = [];
    var savedScore = {
        initials: initialInput,
        score: finalScore
        }

    saveScore(savedScore);

}

function saveScore(savedScore) {
    console.log("worked")
    localStorage.setItem("savedScore", JSON.stringify(savedScore))
}

// When page is reoloaded, old score reloads from local storage
function loadScore() {

    var listItemEl = document.createElement("li");
    highScoreEl.appendChild(listItemEl)
    listItemEl.textContent = "text";

    var savedScore = localStorage.getItem("savedScore");

    if (!savedScore) {
        savedScore = [];
        return false
        }

        savedScore = JSON.parse(savedScore);
        console.log(savedScore)
    }


// submit score
scoreFormEl.addEventListener("submit", submitScore)
