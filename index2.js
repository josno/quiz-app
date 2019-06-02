const STORE = [
    {
        question: "Blood sugar is also known as?",
        answer: "Glucose",
        choices: ["Frutose","Glucose","Cellulose"],
    },
    {
        question: "Food with a high glycemic index means:",
        answer: "it contains alot of glucose.",
        choices: ["it contains alot of glucose.","there is a net amount of glucose.","there is a high amount of fat."],
    },
    {
        question: "Diabetics can eat:",
        answer: "All of the above",
        choices: ["Fish, meats, cheese, ice cream","Meat, sugar-free food, nuts","Meat, fruits, potatoes","All of the above","None of the above"],
    },
    {
        question: "You are more likely to get diabetes if:",
        answer: "your parent has it.",
        choices: ["your parent has it.","you are overweight.","you eat a lot of sugar."],
    },
    {
        question: "What's makes Type 1 different from Type 2?",
        answer: "Your body doesn't make its own insulin.",
        choices: ["It's the good one.","Your body doesn't make its own insulin.","Your body is resistant to insulin.", "You get it when your are young."],
    },
    {
        question: "Low blood sugar is also called:",
        answer: "Hypoglycemia",
        choices: ["Hypoglycemia","Hyperglycemia","Hypothyroidism", "Hypothalamus"],
    },
    {
        question: "What's one way to raise blood sugar quickly?",
        answer: "Drink some juice.",
        choices: ["Eat a steak.","Eat some nuts.","Drink some water.","Drink some juice."],
    },
    {
        question: "How many grams of carbohydrates is in a 375ml can of Coke?",
        answer: "39.8",
        choices: ["39.8","21.5","45.6","38.9"],
    },
    {
        question: "How does carbohydrates affect diabetes?",
        answer: "It raises your blood sugar level.",
        choices: ["It doesn't do anything.","It raises your blood sugar level.","It drops your blood sugar level."],
    },
    {
        question: "What does insulin do to our blood sugar?",
        answer: "It regulates it.",
        choices: ["It raises it.","It regulates it.","It gets rid of blood sugar."],
    },

]


function startQuiz() {
// Button should start the quiz 
// Hide the start
    $('.intro').on('click', '.start-btn', function () {
        $('.intro').toggleClass('hidden')
        $('.question-form').toggleClass('hidden')
        
    });
    console.log('startQuiz ran');
};

let questionNumber = 1
let number = 4

function getQuestionSentences(){
    questionNumber += number
    $('.question-form').append(`
    <div class='boxes question-box'>
            <form>
                <legend>
                    <h2>Question #<span class='question-${questionNumber}'>${questionNumber}</span></h2>
                    <p class='question-sentence'>${STORE[number].question}</p>
                </legend>
            </form>
            <button type="button" class="btn-style">Check My Answer</button>
            </div>`)
    getQuestionChoices()
    console.log('getQuestion ran');
};

function getQuestionChoices(){
    let choices = STORE[number].choices
    choices.forEach(item=>
         $('.question-sentence').append(`
         <p>
            <input type="radio" value="xx" name="answer" required>
            <label>${item}</label>
        </p>`)
    );
};
    // // <p>
    // <input type="radio" value="xx" name="answer" required>
    // <label>Fructose</label>
    // </p>

    // <p>
    // <input type="radio" value="xx" name="answer" required>
    // <label>Glucose</label>
    // </p>

    // <p>
    // <input type="radio" value="xx" name="answer" required>
    // <label>Cellulose</label>
    // </p>

    //
    // gets the question from the array and returns in HTML format
    // return html tags to append to .html file; use string template
    //consider
    // <h2>Question #<span id="number">1</span><br><span id="question-text">What blah blah?</span></h2>
    // $('#number').text(questionNumber)

    // $('#question-text').text(questionText)
    // Add questions; consider forEach*/

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
getQuestionSentences()


