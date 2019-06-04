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
    counter : 0,
    questionNumber : counter + 1, 
    countTo: 10,
    points: 0,
    errors: 0,
}


function checkAnswer() {
    let chosenAnswer = $("[type='radio']:checked").val()
    
    if (chosenAnswer === undefined){
        noAnswerMessage()
    } else if (chosenAnswer === STORE[counter].answer){
        correctAnswerMessage()
        points ++
    } else if (chosenAnswer !== STORE[counter].answer) {
        wrongAnswerMessage()
        errors ++
    }

    scoreboard()//take points errors and questionnumber as argument
    $('question-form').hide()
    $('.message-box').show()
    console.log('checkAnswer ran');
};

/*Should I put this and checkAnswer together
Make button submit type and do prevent default to top render question Number ahead?*/
function checkButton() {
    $('.question-form').on('click', '.checkAnswer', function () {
        checkAnswer()
        $('.question-form').hide()
    })
}

function correctAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
            <h2>Good Job!</h2>
            <p>You answered correctly!</p>
        
            <button type="button" class="nxtQuestion btn-style">Thanks! Next Question</button>
        </div>`)
    console.log('correctAnswerMessage ran')
};


function getQuestionChoices(objState){ //pass counter variable as argument
    let choices = STORE[objState.counter].choices
    choices.forEach(item=>
         $('.question-sentence').append(`
            <p>
            <input type="radio" name="question-choice" value="${item}" required>
            <label for="option-${item}">${item}</label>
            </p>`)
    );

};

function getQuestionSentences(){
        $('.question-number').text(objStatequestionNumber)
        $('.question-sentence').text(STORE[objState.counter].question)
        getQuestionChoices()
        console.log('getQuestion ran');
    };
    
 
// function nextButton() {
    $('.message-box').on('click', '.nxtQuestion', function () {
        if (questionNumber === countTo){
            quizEnd()
            $('.message-box').hide()
            $('footer').hide()
        } else {
            $('.message-box').hide()
            $('.question-form').show()
            
            counter ++ // I don't think I put this in the right place
            questionNumber ++ // I don't think I put this in the right place
            getQuestionSentences()
        } 
    })
}


function noAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
            <h2>Wait A Moment!</h2>
            <p>You forgot to pick an answer! Go back and pick one.</p>

            <button type="button" class="stay btn-style">Okay</button>
        </div>`)
    console.log('noAnswerMessage ran');
};

function quizEnd() {
    $('.game-end').show()
    $('.game-end').html(`
        <div class='boxes'>
            <h2>You scored ${points} out of ${questionNumber}</h2>

            <button type="button" class="restart btn-style">Do Over Please</button>
        </div>
    `)
    $('.restart').on('click', function () {
        document.location.reload();
    })
    console.log('quizEnd ran');
};


function scoreboard() {
    $('.score').html(`
        <ul>
        <li class='page'>Question ${questionNumber} of 10</li>
        <li class='questions-correct'>Correct: ${points}</li>
        <li class='questions-incorrect'>Incorrect: ${errors}</li>
        </ul>
    `)
    console.log('scoreboard ran');
};

function startQuiz() {
    // Button should start the quiz 
    // Hide the start
        $('.intro').on('click', '.start-btn', function () {
            $('.intro').hide()
            $('.question-form').show()
            $('footer').show()
        });
        scoreboard() //Better place to render scoreboard?
        console.log('startQuiz ran');
    };

function stayOnQuestion() {
    $('.message-box').on('click', '.stay', function () {
        $('.message-box').hide()
        $('.question-form').show()
    })
    console.log('Stay ran');
};

function wrongAnswerMessage() {
    $(".message-box").html(`
        <div class='boxes message'>
        <!-- Different messages will display from message data depending on outcome -->
            <h2>Whoops!</h2>
            <p>Wrong answer! The correct answer was:</p>
            <p>${STORE[counter].answer}</p>
        
            <button type="button" class="nxtQuestion btn-style">Gotcha! Next Question</button>
        </div>`)
    console.log('wrongAnswerMessage ran');
};

function quizPlay(){
    startQuiz()
    getQuestionSentences()
    nextButton()
    checkButton()
    stayOnQuestion()
};

$(quizPlay);
    


