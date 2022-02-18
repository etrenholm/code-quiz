# Password Generator Challenge

## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [My Process](#my-process)
* [Results](#results)
* [Credit](#credit)

## Description
Create a timed quiz on JavaScript fundamentals that stores high scores.
	
## Technologies
Project was updated using:
* VS Code
* HTML
* CSS
* JavaScript
* Terminal (Mac)
* Git
* GitHub

## My Process
### STEP 1. - SETUP
* Created GitHub Repository with a unique name.
* Pushed first commit of files into the new Repo using Git.
* Created a live link of my site in GitHub.

### STEP 2. - CREATE QUIZ DESIGN WITH HTML AND CSS
* Created and laid out HTML file.
* Created elements (and example elements) to style in CSS.

### STEP 3. - CREATE QUIZ FUNCTIONALITY WITH JAVASCIPT
* Added an event listener to the "start" button.
* Created an array that includes questions, answers, and answer options.
* Made event listeners for the quiz question answers which passed the option selected into a function that would check the answers.
* Created various query selectors throughout the process.
* Created a timer variable with functions that set the interval, decremented while quiz was in progress, and displayed the end screen once time ran out.
* Created a function to to display questions within the text content from the array of questions.
* Created a function to start the quiz which was called by the start button event listener, hid the intro screen and displayed the quiz screen, then called functions to show the questions and start the timer.
* Created a function which takes the answer clicked and checks it against the answer specified in the array. If the answers are the same the window prints "Correct!" and if the answers are not the same, the window prints "Wrong!" and decreases the time by 10. The index then increments by 1 and the function asks if the index is less than the length of questions array. If so, the <code>showQuestions()</code> function is called again and if not the <code>endScreen()</code> function is called.
* Created a function that shows the end screen which hides the quiz questions and displays the end screen. Within that function the timer is stopped the final score is declared as the time left.
* Created a function which takes the final score and the initials input through the form and pushes them into an array. This array is also sorted numerically from highest to lowest score. This information is then converted into a string and saved into local storage.

### STEP 4. - CREATE HIGHSCORE PAGE DESIGN WITH HTML AND CSS
* Created and laid out HTML file, connecting it to the "View high scores" link in the index.html.
* Created elements (and example elements) to style in CSS.
* Created and linked to a new JavaScript file.

### STEP 5. - CREATE HIGHSCORE PAGE FUNCTIONALITY WITH JAVASCRIPT
* Added an event listener to the "Go back" button and linked it to the index.html.
* Added an event listener to the "Clear all scores" button which runs a function to clear the scores.
* Converted the scores back into an object and loaded them from local storage.
* Appended the top 5 initials and scores into the ordered list on the page.
* NOTE: My intention was to create a loop which iterated and printed each of the scores into my ordered list. I wasn't successful in making the loop work so I had to find another way. I manually grabbed and append the scores seperately as a work around for now. Once I become more familiar with loops, I will go back and restructure my code to be more concise.
* Created a function to clear the scores, which removes the scores from local storage and removes the children of the ordered list on the page.

### STEP 6. - FINALIZING


## Results

* https://github.com/etrenholm/code-quiz
* https://etrenholm.github.io/code-quiz

![mockup](./)

## Credit

Erica Trenholm: https://github.com/etrenholm

### ©️ February 2022
