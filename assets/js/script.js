//Setting text from html into variables
var timeEl = document.querySelector(".timerEl");

//Setting variables for functions
var timerCount;

const questions = [{ //Creating questions to display for quiz
    qNum: 0,
    question: "",
    answer: [{text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
    ]
},{
    qNum: 1,
    question: "",
    answer: [{text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
    ]
},{
    qNum: 2,
    question: "",
    answer: [{text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
    ]
},{
    qNum: 3,
    question: "",
    answer: [{text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
    ]
},{
    qNum: 4,
    question: "",
    answer: [{text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
    ]
},{
    qNum: 5,
    question: "",
    answer: [{text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
             {text: "", isCorrect: true},
    ]
}
]

function gameStart() { //Function for when the game starts

}

function gameClear() { //When game ends by either win condition or timer

}

function highScoreList() { //When View-High-Score is clicked OR after gameClear

}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timeEl.textContent = timerCount;
        gameStart();
        if (timerCount >= 0) {
            //if win condition is met
            clearInterval(timer);
            gameClear();
        }
        if (timerCount === 0){
            //When time runs out
            clearInterval(timer);
            gameClear();
        }
    }, 70000); //sets timer to 70 seconds (70,000 milliseconds)
}