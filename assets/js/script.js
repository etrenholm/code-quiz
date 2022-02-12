// When button is clicked, start timer and present first question
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

var introContainerEl = document.querySelector("#intro-container");
var mainContainerEl = document.querySelector("#main-container");
var questionContainerEl = document.querySelector("#question-container");
var endContainerEl = document.querySelector("#end-container");
var timerEl = document.querySelector("#timer");
var resultEl = document.querySelector("#result")
var answerButtonEl = document.querySelector("#answer-buttons")

mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
endContainerEl.setAttribute("style", "display:none;"); // hide end page

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
            // go to end screen
        }
        console.log(timeLeft)
    }, 1000)
};

// When button is clicked, start the quiz
function startQuiz() {
    
    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:block;"); // display quiz page
    startTimer();
    firstQuestion();

}

function firstQuestion() {

    var questionEl = document.querySelector("#question");
    questionEl.textContent = "What operator is used to assign a value to a declared variable?";

    var answerButtonEl1 = document.querySelector("#option1");
    answerButtonEl1.textContent = "a. Question mark (?)";

    var answerButtonEl2 = document.querySelector("#option2");
    answerButtonEl2.textContent  = "b. Colon (:)";

    var answerButtonEl3 = document.querySelector("#option3");
    answerButtonEl3.textContent = "c. Equal sign (=)";
    answerButtonEl3.classList.add("correct")

    var answerButtonEl4 = document.querySelector("#option4");
    answerButtonEl4.textContent = "d. Double-equal (==)";

    answerButtonEl.addEventListener("click", function(check) {
        var answer = check.target;

        if(answer.matches(".correct")){
            resultEl.textContent = "Correct!"
        }
        else {
            resultEl.textContent = "Wrong!"
            //timeLeft -= 10
        }
        nextQuestion()
    })


}


function nextQuestion() {
    
    var questionEl = document.querySelector("#question");
    questionEl.textContent = "How do we declare a conditional statement in JavaScript?";

    var answerButtonEl1 = document.querySelector("#option1");
    answerButtonEl1.textContent = "a. while loop";

    var answerButtonEl2 = document.querySelector("#option2");
    answerButtonEl2.textContent  = "b. difference...between";

    var answerButtonEl3 = document.querySelector("#option3");
    answerButtonEl3.textContent = "c. for loop";
    answerButtonEl3.classList.add("correct")

    var answerButtonEl4 = document.querySelector("#option4");
    answerButtonEl4.textContent = "d. if...else";
    
}


// for(var i = 0; i < quizQuestions.length; i++)

// When question is answered incorrectly, alert that question was wrong
// When question is answered incorrectly, subtract from the clock
// When question is answered correctly, alert that question was right
// When a question is answered, present another question
// When all questions are answered OR the timer reaches 0, game is over

// After last question, go to end screen
function endScreen() {

    introContainerEl.setAttribute("style", "display:none;"); // hide start page
    mainContainerEl.setAttribute("style", "display:none;"); // hide quiz page
    endContainerEl.setAttribute("style", "display:block;"); // show end page

}

function scoreForm() {

}

// When the game is over, save initials and score in local storage

// When page is reoloaded, old score reloads from local storage??

