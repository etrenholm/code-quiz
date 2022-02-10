// When button is clicked, start timer and present first question
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

var introContainerEl = document.querySelector("#intro-container");
var questionContainerEl = document.querySelector("#question-container");
var endContainerEl = document.querySelector("#end-container");

var quizQuestions = [
    {
        id: 1,
        question: "This is Question 1?",
        answer: "a. this is a",
        possibleAnswers: [
            "a. this is a",
            "b. this is b",
            "c. this is c",
            "d. this is d"
        ],
    },
    {
        id: 2,
        question: "This is Question 2?",
        answer: "a. this is a",
        possibleAnswers: [
            "a. this is a",
            "b. this is b",
            "c. this is c",
            "d. this is d"
        ],
    },
    {
        id: 3,
        question: "This is Question 3",
        answer: "a. this is a",
        possibleAnswers: [
            "a. this is a",
            "b. this is b",
            "c. this is c",
            "d. this is d"
        ],
    },
];

// When button is clicked, start the quiz
function startQuiz() {
    console.log('started');
    startQuestions();

}
// startQuiz();

// When button is clicked, start the timer

// var questionEl = document.querySelector("#question");
var questionEl = document.querySelector("#question");
questionEl.innerHTML = "Test";

var answerButtonEl1 = document.querySelector("#option1");
answerButtonEl1.innerHTML = "test";

var answerButtonEl2 = document.querySelector("#option2");
answerButtonEl2.innerHTML = "test2";

var answerButtonEl3 = document.querySelector("#option3");
answerButtonEl3.innerHTML = "test3";

var answerButtonEl4 = document.querySelector("#option4");
answerButtonEl4.innerHTML = "test4";


function startQuestions() {
}

function selectAnswer() {
}

// When question is answered incorrectly, alert that question was wrong and subtract from the clock

// When a question is answered, alert that question was right and present another question

// When all questions are answered OR the timer reaches 0, game is over

// When the game is over, save initials and score in local storage

// When page is reoloaded, old score reloads from local storage??

