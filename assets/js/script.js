//Setting text from html into variables
var timeEl = document.querySelector(".timerEl");
var startButton = document.querySelector(".quizStart");
var scoreTab = document.querySelector(".high-score");
var startScreen = document.querySelector(".center-display");
var questionScreen = document.querySelector("#question-screen");
var highScoreButton = document.querySelector(".high-score");
var backButton = document.querySelector(".goBack");
var rightWrong = document.querySelector(".right-wrong");
//Gather elements for quiz display
var questionEl = document.getElementById("questionSlot");
var buttonsEl = document.getElementById("answerButtons");
var button1 = document.querySelector(".btn1");
var button2 = document.querySelector(".btn2");
var button3 = document.querySelector(".btn3");
var button4 = document.querySelector(".btn4");

//Gather elements for displaying post-quiz section
var quizEnd = document.querySelector("#post-quiz");
var endScore = document.getElementById(".end-score");
var enterScoreButton = document.querySelector(".enter-score");
var initials = document.querySelector("#initials");
var scoreSet = document.querySelector("#scores");

//Setting variables for functions
var timer;
var timerCount;
//Variables for keeping track and averaging out scores
var totalScore;
var questionNum;
var option1;
var option2;
var option3;
var option4;

let questions = [
    "Which one isn't a feature of JavaScript?",
    "String variables must be enclosed in ___ when being assigned to variables.",
    "Commonly used data types do NOT include:",
    "Arrays in JavaScript can be used to store:",
    "The condition in an if/else statement is enclosed with ___."
];
let choices = [
    ["Lightweight & Interpreted","Person-Centric","Integrated","Open & Cross platform"],
    ["Curly Brackets","Quotes","Parenthesis","Integers"],
    ["Boolean","String","Alert","Numbers"],
    ["Numbers and Strings","Other Arrays","Booleans","All of the Above"],
    ["Quotes","Curly Brackets","Parenthesis","Square Brackets"]
];
let answers = [
    "Person-Centric",
    "Quotes",
    "Alert",
    "All of the Above",
    "Parenthesis"
];

function gameStart() { //Function for when the game starts
    startScreen.classList.add('hide'); //switching the hide class between center-display and options
    questionScreen.classList.remove('hide');
    timerCount = 60; //setting the timer for 60 seconds
    questionNum = 0;

    startTimer();
    setQuestion();
}
function setQuestion() {
    displayQuestion(questionNum);
}

function displayQuestion(x) {
    questionEl.innerText = questions[x];
    button1.innerText = choices[x][0];
    button2.innerText = choices[x][1];
    button3.innerText = choices[x][2];
    button4.innerText = choices[x][3];
}
//Setting buttons outside of the functions
button1.addEventListener("click", function(){
    if (choices[questionNum][0] == answers[questionNum]){
        rightWrong.innerText = "Correct!";
    } else if (choices[questionNum][0] !== answers[questionNum]){
        rightWrong.innerText = "Incorrect...";
        timerCount -= 10;
    }
    nextQuestion();
    });
button2.addEventListener("click", function(){
    if (choices[questionNum][1] == answers[questionNum]){
        rightWrong.innerText = "Correct!";
    } else if (choices[questionNum][1] !== answers[questionNum]){
        rightWrong.innerText = "Incorrect...";
        timerCount -= 10;
    }
    nextQuestion();
    });
button3.addEventListener("click", function(){
    if (choices[questionNum][2] == answers[questionNum]){
        rightWrong.innerText = "Correct!";
    } else if (choices[questionNum][2] !== answers[questionNum]){
        rightWrong.innerText = "Incorrect...";
        timerCount -= 10;
    }
    nextQuestion();
    });
button4.addEventListener("click", function(){
    if (choices[questionNum][3] == answers[questionNum]){
        rightWrong.innerText = "Correct!";
    } else if (choices[questionNum][3] !== answers[questionNum]){
        rightWrong.innerText = "Incorrect...";
        timerCount -= 10;
    }
    nextQuestion();
    });

function nextQuestion(){ //Will either transition to next question or end the game if condition is met
    questionNum++;
    if (questionNum >= questions.length) {
        gameClear();
    } else {
        displayQuestion(questionNum);
    }
}

function gameClear() { //When game ends by either win condition or timer
    questionScreen.classList.add('hide');
    quizEnd.classList.remove('hide');
    totalScore = timerCount;
    timerCount = 0;
    endScore.innerText = "Your Score: "+totalScore;
}
//High Score List Functions
function highScoreList() { //When View-High-Score is clicked OR after gameClear
 startScreen.classList.add('hide');
 highScoreScreen.classList.remove('hide');
 highScoreButton.classList.add('hide');
 quizEnd.classList.add('hide');
}
function goBackButton() {//switching the hide class between functions to display the original screen
    startScreen.classList.remove('hide');
    highScoreScreen.classList.add('hide');
    highScoreButton.classList.remove('hide');
}

//startTimer activates a timer for when the quiz starts
function startTimer(totalScore) {
    //Setting Timer
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = timerCount;
        if (timerCount <= 0){
            //When time runs out, store score and open quiz-end portion
            timerCount = 0
            clearInterval(timer);
            gameClear();
        }
    }, 1000); //1000 milliseconds in 1 second
}

function saveScore(){
    var init = document.querySelector("#initials").ariaValueMax;
    totalScore = timerCount.value;
    var setScore = init+totalScore;
    localStorage.setItem("scores", setScore);
}

backButton.addEventListener("click", goBackButton);
startButton.addEventListener("click", gameStart);
highScoreButton.addEventListener("click", highScoreList);
enterScoreButton.addEventListener("click", saveScore);