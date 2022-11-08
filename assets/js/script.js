//Setting text from html into variables
var timeEl = document.querySelector(".timerEl");
var startButton = document.querySelector(".quizStart");
var scoreTab = document.querySelector(".high-score");
var startScreen = document.querySelector(".center-display");
var questionScreen = document.querySelector("#question-screen");
var highScoreButton = document.querySelector(".high-score");
var backButton = document.querySelector(".goBack");
var rightWrong = document.querySelector(".right-wrong");

//
var questionEl = document.getElementById("questionSlot");
var buttonsEl = document.getElementById("answerButtons");
var button1 = document.querySelector(".btn1");
var button2 = document.querySelector(".btn2");
var button3 = document.querySelector(".btn3");
var button4 = document.querySelector(".btn4");

//Setting variables for functions
var timer;
var timerCount;
//Variables for keeping track and averaging out scores
var winCount = 0;
var lossCount = 0;
var questionNum;
var collectQuestion = [];

let questions = [
    { //Creating questions to display for quiz
    question: "This is Question 1",
    answer: [{text: "Correct", isCorrect: false},
             {text: "Incorrect", isCorrect: false},
             {text: "Incorrect", isCorrect: false},
             {text: "Incorrect", isCorrect: true},
    ]
},{
    question: "String variables must be enclosed in ___ when being assigned to variables.",
    answer: [{text: "Curly Brackets", isCorrect: false},
             {text: "Quotes", isCorrect: true},
             {text: "Parenthesis", isCorrect: false},
             {text: "Integers", isCorrect: false},
    ]
},{
    question: "Commonly used data types do NOT include:",
    answer: [{text: "Boolean", isCorrect: false},
             {text: "String", isCorrect: false},
             {text: "Alert", isCorrect: true},
             {text: "Numbers", isCorrect: false},
    ]
},{
    question: "Arrays in JavaScript can be used to store:",
    answer: [{text: "Numbers and Strings", isCorrect: false},
             {text: "Other Arrays", isCorrect: false},
             {text: "Booleans", isCorrect: false},
             {text: "All of the Above", isCorrect: true},
    ]
},{
    question: "The condition in an if/else statement is enclosed with ___.",
    answer: [{text: "Quotes", isCorrect: false},
             {text: "Curly Brackets", isCorrect: false},
             {text: "Parenthesis", isCorrect: true},
             {text: "Square Brackets", isCorrect: false},
    ]
}
];

function gameStart() { //Function for when the game starts
    startScreen.classList.add('hide'); //switching the hide class between center-display and options
    questionScreen.classList.remove('hide');
    timerCount = 20; //setting the timer for 20 seconds
    questionNum = 0;

    startTimer();
    setQuestion();
}

function setQuestion() {
    displayQuestion(questions[questionNum]);
}

function displayQuestion(questions) {
    questionEl.innerText = questions.question;
    button1.innerText = questions.answer[0].text;
    button2.innerText = questions.answer[1].text;
    button3.innerText = questions.answer[2].text;
    button4.innerText = questions.answer[3].text;

    button1.addEventListener("click", selectAnswer(questions.answer));
    button2.addEventListener("click", selectAnswer(questions.answer));
    button3.addEventListener("click", selectAnswer(questions.answer));
    button4.addEventListener("click", selectAnswer(questions.answer));
}

function selectAnswer(){
    if (questions.answer == true){
        rightWrong.innerText = "Correct!";
    } else if (questions.answer == false){
        rightWrong.innerText = "Incorrect...";
    }
    questionNum++;
    setQuestion(questions[questionNum]);
}

function gameClear() { //When game ends by either win condition or timer
    
}
//High Score List Functions
function highScoreList() { //When View-High-Score is clicked OR after gameClear
 startScreen.classList.add('hide');
 highScoreScreen.classList.remove('hide');
 highScoreButton.classList.add('hide');

}
function goBackButton() {//switching the hide class between functions to display the original screen
    startScreen.classList.remove('hide');
    highScoreScreen.classList.add('hide');
    highScoreButton.classList.remove('hide');
}

//startTimer activates a timer for when the quiz starts
function startTimer() {
    //Setting Timer
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = timerCount;
        //if (timerCount >= 0) {
        //    //if win/loss condition is met
        //    clearInterval(timer);
        //    gameClear();
        //}
        if (timerCount === 0){
            //When time runs out
            clearInterval(timer);
            gameClear();
        }
    }, 1000); //1000 milliseconds in 1 second
}

backButton.addEventListener("click", goBackButton);
startButton.addEventListener("click", gameStart);
highScoreButton.addEventListener("click", highScoreList);