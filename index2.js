function startQuiz() {
// Button should start the quiz 
// Hide the start
    $('.intro').on('click', '.start-btn', function () {
        $('.intro').toggleClass('hidden')
        $('.question-form').toggleClass('hidden')
        
    });
    console.log('startQuiz ran');
};

function getQuestion(){
    // gets the question from the array and returns in HTML format
};

function quizPlay() {
    //call getQuestion
    // Render questions and answer options
    console.log('quizPlay ran');
};

function alertMessage() {
    /*when a players presses the submit button run these three message options*/
    //Should return one of the message functions
    console.log('alertMessage ran');
};

function wrongAnswerMessage() {
    //Return the correct answer; let player know they made the wrong answer
    console.log('wrongAnswerMessage ran');
};

function correctAnswerMessage() {
    //Return affirmation
    console.log('correctAnswerMessage ran');
};

function noAnswerMessage() {
    //Return affirmation
    console.log('noAnswerMessage ran');
};

function moveOrStay() {
    //Stay on question or move on 
    console.log('moveOrStay ran');
};

function submitAnswer() {
    // Button is clicked and calls on the messages
    console.log('submitAnswer ran');
};

function questionPage() {
    //counter for marking which question user is on
    //renders after successful submit
    console.log('questionPage ran');
};

function scoreboard() {
    //Shows incremental score
    //shows total score at the end
    console.log('scoreboard ran');
};

function quizEnd() {
    //Renders game completion page
    //shows total score and message
    //if else depending on score total
    console.log('quizEnd ran');
};

function restart() {
    // When button is click, restarts the quiz
    console.log('restart ran');
};

/*
startQuiz()
getQuestion()
quizPlay()
alertMessage()
wrongAnswerMessage()
correctAnswerMessage()
noAnswerMessage()
moveOrStay()
submitAnswer()
questionPage()
scoreboard()
quizEnd()
restart()
*/
startQuiz()

