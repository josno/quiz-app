"use strict";

const STORE = [
    {
        question: "Blood sugar is also known as?",
        answer: "Glucose",
        choices: ["Fructose","Glucose","Cellulose"],
    },
    {
        question: "What does 'high glycemic index' mean?",
        answer: "It contains alot of glucose.",
        choices: ["It contains alot of glucose.","There is a net amount of glucose.","There is a high amount of fat."],
    },
    {
        question: "Diabetics can eat:",
        answer: "All of the above",
        choices: ["Fish, meats, cheese, ice cream","Meat, sugar-free food, nuts","Meat, fruits, potatoes","All of the above","None of the above"],
    },
    {
        question: "When are you more likely to get diabetes?",
        answer: "When your parent has it.",
        choices: ["When your parent has it.","When you are overweight.","When you eat a lot of sugar."],
    },
    {
        question: "Why is Type 1 different from Type 2?",
        answer: "Your body doesn't make insulin.",
        choices: ["It's the good one.","Your body doesn't make insulin.","Your body is resistant to insulin.", "You get it when your are young."],
    },
    {
        question: "What is low blood sugar also called?",
        answer: "Hypoglycemia",
        choices: ["Hypoglycemia","Hyperglycemia","Hypothyroidism", "Hypothalamus"],
    },
    {
        question: "How can you raise blood sugar quickly?",
        answer: "Drink some juice.",
        choices: ["Eat a steak.","Eat some nuts.","Drink some water.","Drink some juice."],
    },
    {
        question: "A 375ml can of Coke has how many grams of carbohydrates?",
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

const objState = {
    counter: 0,
    countTo: STORE.length,
    points: 0,
    errors: 0,
}

//On click, hides first page and render button

$('.intro').on('click', '.start-btn', function () {
    $('.intro').remove()
    $('.question-form').show()
    $('footer').show()
    setQuestion(objState)
    renderScoreboard(objState)
});

// Event listeners for question and message buttons
$('.question-form').on('click', '.checkAnswer', function () {
    checkAnswer(objState)
    $('.message-box').show()
    $('.question-form').hide()
});

//If a user doesn't make a choice; stay on the current question
$('.message-box').on('click', '.stay', function () {
    $('.message-box').hide()
    $('.question-form').show()
});

//Event handler to restart quiz
$('main').on('click', '.restart', function (event) {
    location.reload();
});


//moves on to the next question *after* the alert message

$('.message-box').on('click', '.nxtQuestion', function () {
    let questionNumber = objState.counter + 1
    if (questionNumber === objState.countTo) {
        endQuiz()
        $('footer').hide()
    } else {
        objState['counter']++
        setQuestion(objState)
        renderScoreboard(objState)
        $('.question-form').show()
    }
    $('.message-box').hide()
});


//Template for setting and rendering question
function setQuestion(obj){
    let choices = STORE[obj.counter].choices
    $('.question-number').text(obj.counter + 1)
    $('.question-sentence').text(STORE[obj.counter].question)

    //Iterator for question choices depending on how many choices
    choices.forEach(item=>
         $('.question-sentence').append(`
            <p class='choices'>
            <input type="radio" name="question-choice" id="option-${item}" value="${item}" required>
            <label for="option-${item}">${item}</label>
            </p>`)
    );
};

// Render template for the scoreboard on start quiz
function renderScoreboard(obj) {
    $('.score').html(`
        <ul>
        <li class='page'>Question ${obj['counter'] + 1} of 10</li>
        <li class='questions-correct'>Correct: ${obj['points']}</li>
        <li class='questions-incorrect'>Incorrect: ${obj['errors']}</li>
        </ul>
    `)
};

//Check against correct answer in when answer is submitted
function checkAnswer(obj) {
    let chosenAnswer = $("[type='radio']:checked").val()

    if (chosenAnswer === undefined){
        noAnswerMessage()
    } else if (chosenAnswer === STORE[obj.counter].answer){
        correctAnswerMessage()
        obj["points"] ++
    } else if (chosenAnswer !== STORE[obj.counter].answer) {
        wrongAnswerMessage(objState)
        obj["errors"] ++
    }
};

// Render message templates depending on user answer
function correctAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message correctAnswer'>
            <h2>Good Job!</h2>
            <div class='container'>
            <p>You answered correctly!</p>
            </div>
            <div class='btn-container'>
            <button type="button" class="nxtQuestion btn-style">Next!</button>
            </div>
        </div>`)
};

function noAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message noAnswer' id='message'>
            <h2>Wait A Moment!</h2>
            <div class='container'>
            <p>You forgot to pick an answer! </p>
            <p>Go back and pick one.</p>
            </div>
            <div class='btn-container'>
            <button type="button" class="stay btn-style">Okay</button>
            </div>
        </div>`)
};

function wrongAnswerMessage(obj) {
    let correctChoice = STORE[obj.counter].answer

    $(".message-box").html(`
        <div class='boxes message wrongAnswer'>
            <h2>Whoops!</h2>
            <div class="container">
            <p class="text-container">The correct answer was: </p>
            <p class="text-container">"${correctChoice}"</p>
            </div>
            <div class='btn-container'>
            <button type="button" class="nxtQuestion btn-style">Gotcha!</button>
            </div>
        </div>`)
};
// End of message templates

//Renders after final question and feedback
function endQuiz() {
    let goodScore = "You did the thing! Feel the love!"
    let lowScore = "Here's a fun video explaining the 'betes:"
    let points = objState['points']

    renderResults(objState)

    if (points <= 5) {
        $('.finalMessage').text(lowScore)
        $('.video-container').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Es2f5MsEWmg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="Diabetes Video"></iframe>`)
    } else {
        $('.finalMessage').text(goodScore)
        $('.goodScoreImg').html(`<img class='thumb-gif' src="https://raw.githubusercontent.com/josno/quiz-app/master/Assets/thumbs-up-gif.gif" alt="Thumbs Up">`)
    };

    $('.game-end').show()
};

function renderResults(obj) {
    //template
    $('.game-end').html(`
        <div class='boxes'>
            <h2>You scored ${obj['points']} out of ${obj['countTo']}</h2>
            <p><span class='finalMessage'></span></p>
            <div class='video-container goodScoreImg'></div>
            <button type="button" class="restart btn-style">Restart</button>
        </div>
    `)
};