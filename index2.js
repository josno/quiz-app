const STORE = [
    {
        question: "Blood sugar is also known as?",
        answer: "Glucose",
        choices: ["Fructose","Glucose","Cellulose"],
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

];

let questionNumber = 1
let counter = 0
const countTo = 10
let score = 0

function startQuiz() {
// Button should start the quiz 
// Hide the start
    $('.intro').on('click', '.start-btn', function () {
        $('.intro').toggleClass('hidden')
        $('.question-form').toggleClass('hidden')
        $('footer').toggleClass('hidden')
        
    });
    
    console.log('startQuiz ran');
};

function getQuestionSentences(){
        $('.question-form').append(`
        <div class='boxes question-box'>
            <form>
                <legend>
                    <h2>Question #<span class='question-${questionNumber}'>${questionNumber}</span></h2>
                    <p class='question-sentence'>${STORE[counter].question}</p>
                </legend>
            </form>
            <button type="button" class="btn-style">Check My Answer</button>
        </div>`)
        getQuestionChoices()
        console.log('getQuestion ran');
    };
    
    

function getQuestionChoices(){
    let choices = STORE[counter].choices
    choices.forEach(item=>
         $('.question-sentence').append(`
            <p>
            <input type="radio" name="question-choice" value="${item}" required>
            <label for="option-${item}">${item}</label>
            </p>`)
    );

};

function wrongAnswerMessage() {
    $(".message-box").append(`
        <div class='boxes'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Whoops!</h2>
            <p>Wrong answer! The correct answer was:</p>
            <p>${STORE[counter].answer}</p>
        
            <button type="button" class="btn-style">Gotcha! Next Question</button>
        </div>`)
        //nextQuestion()
    console.log('wrongAnswerMessage ran');
};

function correctAnswerMessage() {
    $(".message-box").append(`
        <div class='boxes'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Good Job!</h2>
            <p>You answered correctly!</p>
        
            <button type="button" class="nxt-btn btn-style">Thanks! Next Question</button>
        </div>`)
    console.log('correctAnswerMessage ran')
};

function noAnswerMessage() {
    $(".message-box").append(`
        <div class='boxes'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Wait A Moment!</h2>
            <p>You forgot to pick an answer! Go back and pick one.</p>
        
            <button type="button" class="btn-style">Okay</button>
        </div>`)
        //StayOnQuestion()
    console.log('noAnswerMessage ran');
};

function StayOnQuestion() {
    //stay on question
    console.log('moveOrStay ran');
};

function nextQuestion() {
    $('.message-box').on('click', '.nxt-btn', function () {
        $('.question-form').remove()
        toggleMessage()
    });
    getQuestionSentences()
}

function toggleMessage(){
    $('.question-form').toggleClass('hidden')
    $('.message-box').toggleClass('hidden')
}

function submitAnswer() {
    $('.question-form').on('click', '.btn-style', function () {
        let chosenAnswer = $("[type='radio']:checked").val()

        if (chosenAnswer === STORE[counter].answer){
            toggleMessage()
            correctAnswerMessage()
        } else if (chosenAnswer === undefined){
            noAnswerMessage()
        }else if (chosenAnswer !== STORE[counter].answer) {
            toggleMessage()
            wrongAnswerMessage()
        } 
    });
    console.log('submitAnswer ran');
};

function scoreboard() {
    $('main').append(`   
    <footer class='score hidden'>    
        <ul>
            <li class='page'>Question ${questionNumber} of 10</li>
            <li class='questions-correct'>Correct: ${score}</li>
            <li class='questions-incorrect'>Incorrect:</li>
        </ul>
    </footer>  `)
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
scoreboard()
getQuestionSentences()
submitAnswer()



