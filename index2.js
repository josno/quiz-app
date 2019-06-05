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

const objState = {
    counter: 0,
    questionNumber: 1, 
    countTo: 10,
    points: 0,
    errors: 0,
}

/*Event Listeners for message alerts and 
quiz restart*/

// calls on checkAnswer function to determine which message to show
$('.question-form').on('click', '.checkAnswer', function () {
    checkAnswer(objState)
    $('.question-form').hide()
})

//stays on previous question until user makes a choice
$('.message-box').on('click', '.stay', function () {
    $('.message-box').hide()
    $('.question-form').show()
});

//moves on to the next question *after* the alert message
$('.message-box').on('click', '.nxtQuestion', function () {
    // scoreboard()

    if (objState.questionNumber === objState.countTo){
        endQuiz()
        $('.message-box').hide()
        $('footer').hide()
    } else {
        $('.message-box').hide()
        objState['counter']++
        setQuestion(objState)   
        $('.question-form').show()
    }      
});

//restarts quiz ; reloads to the beginning
$('.restart').on('click', function () {
    document.location.reload();
})

function startQuiz() {
    // Button should start the quiz 
    // Hide the start
    $('.intro').on('click', '.start-btn', function () {
        $('.intro').hide()
        $('.question-form').show()
        $('footer').show()
    });
        // scoreboard()
    setQuestion(objState)
    console.log('startQuiz ran');
};

//Template for the scoreboard on start quiz
// function renderScoreboard() {
//     $('.score').html(`
//         <ul>
//         <li class='page'>Question ${questionNumber} of 10</li>
//         <li class='questions-correct'>Correct: ${points}</li>
//         <li class='questions-incorrect'>Incorrect: ${errors}</li>
//         </ul>
//     `)
//     console.log('scoreboard ran');
// };


/*This function checks the user answer against
the actual answer and will run then return the appropriate message */

function checkAnswer(obj) {
    let chosenAnswer = $("[type='radio']:checked").val()
    
    if (chosenAnswer === undefined){
        noAnswerMessage()
        $('.message-box').show()      
    } else if (chosenAnswer === STORE[obj.counter].answer){
        correctAnswerMessage()
        $('.message-box').show()
        obj["points"] ++
    } else if (chosenAnswer !== STORE[obj.counter].answer) {
        wrongAnswerMessage(objState)
        $('.message-box').show()
        obj["errors"] ++
    }

    $('question-form').hide()
    console.log('checkAnswer ran');
};

/* The following three messages will render depending on the answer 
the user chose */

function correctAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
            <h2>Good Job!</h2>
            <p>You answered correctly!</p>
        
            <button type="button" class="nxtQuestion btn-style">Thanks! Next Question</button>
        </div>`)
    console.log('correctAnswerMessage ran')
};

function noAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
            <h2>Wait A Moment!</h2>
            <p>You forgot to pick an answer! Go back and pick one.</p>
            <button type="button" class="stay btn-style">Okay</button>
        </div>`)
    console.log('noAnswerMessage ran');
};

function wrongAnswerMessage(obj) {
    let correctChoice = STORE[obj.counter].answer
    
    $(".message-box").html(`
        <div class='boxes message'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Whoops!</h2>
            <p>Wrong answer! The correct answer was: </p>
            <p>${correctChoice}</span></p>
        
            <button type="button" class="nxtQuestion btn-style">Gotcha! Next Question</button>
        </div>`)

    console.log('wrongAnswerMessage ran');
};


//Renders the questions to the DOM
function setQuestion(obj, index){
    let choices = STORE[obj.counter].choices
    $('.question-number').text(obj.counter + 1)
    $('.question-sentence').text(STORE[obj.counter].question)

    //interator for question choices
    choices.forEach(item=>
         $('.question-sentence').append(`
            <p>
            <input type="radio" name="question-choice" value="${item}" required>
            <label for="option-${item}">${item}</label>
            </p>`)
    );
};

//Renders the final message to the DOM
// function endQuiz() {
//     $('.game-end').show()
//     $('.game-end').html(`
//         <div class='boxes'>
//             <h2>You scored ${points} out of ${questionNumber}</h2>
//             <button type="button" class="restart btn-style">Do Over Please</button>
//         </div>
//     `)
//     console.log('endQuiz ran');
// };


startQuiz()
setQuestion(objState)
// scoreboard()




