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
let score = 1

function correctAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Good Job!</h2>
            <p>You answered correctly!</p>
        
            <button type="button" class="nxt-btn btn-style">Thanks! Next Question</button>
        </div>`)

    console.log('correctAnswerMessage ran')
};

function counterUp(){
    counter++;
}

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

function getQuestionSentences(){
        $('.question-number').text(questionNumber)
        $('.question-sentence').text(STORE[counter].question)
        getQuestionChoices()
        console.log('getQuestion ran');
    };
    
 
function nextButton() {
    $('.question-form').on('click', '.btn-style', function () {
        //checkAnswer() << needs a click toggle
        counter ++
        questionNumber ++
        getQuestionSentences() 
    })

    
    /*$('.message').on('click', '.nxt-btn', function () {
        $('.message').toggleClass('hidden')
        $('.question-form').toggleClass('hz\idden')
        counter ++
    });*/
}

function noAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
            <h2>Wait A Moment!</h2>
            <p>You forgot to pick an answer! Go back and pick one.</p>
            <button type="button" class="btn-style">Okay</button>
        </div>`)
    console.log('noAnswerMessage ran');
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

function scoreboard() {
    $('.page').text('Correct' + score )
    console.log('scoreboard ran');
};

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

function stayOnQuestion() {
    //stay on question
    console.log('moveOrStay ran');
};


function checkAnswer() {
    let chosenAnswer = $("[type='radio']:checked").val()

    if (chosenAnswer === STORE[counter].answer){
        toggleMessage()
        correctAnswerMessage()
    } else if (chosenAnswer === false){
        noAnswerMessage()
    }else if (chosenAnswer !== STORE[counter].answer) {
        toggleMessage()
        wrongAnswerMessage()
    } 
    console.log('checkAnswer ran');
};

function toggleMessage(){
    $('.question-form').toggleClass('hidden')
    $('.message-box').toggleClass('hidden')
}

function wrongAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Whoops!</h2>
            <p>Wrong answer! The correct answer was:</p>
            <p>${STORE[counter].answer}</p>
        
            <button type="button" class="nxt-btn btn-style">Gotcha! Next Question</button>
        </div>`)
    console.log('wrongAnswerMessage ran');
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
nextButton()



