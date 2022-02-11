// When button is clicked, start timer and present first question
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", startTimer);

var introContainerEl = document.querySelector("#intro-container");
var mainContainerEl = document.querySelector("#main-container");
var questionContainerEl = document.querySelector("#question-container");
var endContainerEl = document.querySelector("#end-container");
var timerEl = document.querySelector("#timer");

mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
endContainerEl.setAttribute("style", "display:none;"); // hide end page

var quizQuestions = [
    {
        question: "What operator is used to assign a value to a declared variable? ",
        answer: "c. Equal sign (=)",
        possibleAnswers: [
            "a. Question mark (?)",
            "b. Colon (:)",
            "c. Equal sign (=)",
            "d. Double-equal (==)"
        ],
    },
    {
        question: "How do we declare a conditional statement in JavaScript?",
        answer: "c. for loop",
        possibleAnswers: [
            "a. while loop",
            "b. difference...between",
            "c. for loop",
            "d. if...else"
        ],
    },
];

// When button is clicked, start the quiz
function startQuiz() {
    
    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:block;"); // display quiz page
    startTimer();
    startQuestions();

}

// When button is clicked, start the timer
function startTimer () {
    var timeLeft = 49; 
    var timeInterval = setInterval(function() {
        if(timeLeft>0) {
            timerEl.innerHTML = "Time Left: " + timeLeft;
            timeLeft--
        }
        else {
            clearInterval(timeInterval);
            timerEl.innerHTML = "Time Left: 0"
        }
        console.log(timeLeft)
    }, 1000)
};


function startQuestions() {

    var questionEl = document.querySelector("#question");
    questionEl.innerHTML = quizQuestions[0].question;

    var answerButtonEl1 = document.querySelector("#option1");
    answerButtonEl1.textContent = quizQuestions[0].possibleAnswers[0];

    var answerButtonEl2 = document.querySelector("#option2");
    answerButtonEl2.textContent  = quizQuestions[0].possibleAnswers[1];

    var answerButtonEl3 = document.querySelector("#option3");
    answerButtonEl3.textContent  = quizQuestions[0].possibleAnswers[2];

    var answerButtonEl4 = document.querySelector("#option4");
    answerButtonEl4.textContent = quizQuestions[0].possibleAnswers[3];

    var answerContainer = document.querySelector("#answer-buttons");
    answerContainer.addEventListener("click", nextQuestion);
}

function nextQuestion() {

}


// for(var i = 0; i < quizQuestions.length; i++)

// When question is answered incorrectly, alert that question was wrong
// When question is answered incorrectly, subtract from the clock
// When question is answered correctly, alert that question was right
// When a question is answered, present another question

function selectAnswer() {
    if(givenAnswer === correctAnswer) {

    }
}

// When all questions are answered OR the timer reaches 0, game is over

// After last question, go to end screen
function endScreen() {

    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
    endContainerEl.setAttribute("style", "display:block;"); // show end page

}

// When the game is over, save initials and score in local storage

// When page is reoloaded, old score reloads from local storage??

