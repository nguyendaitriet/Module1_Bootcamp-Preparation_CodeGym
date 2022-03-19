// document.querySelector("#startgame").addEventListener("click",callCountdownTimer(10));

// class Riddles {
//     constructor(...rest) {
//        return [...rest]; 
//     }
// }

// let riddle = new Riddles();
// console.log (riddle);

const questions = [
    {
        question: "What has to be broken before you can use it?",
        answer: "An egg"
    },
    {
        question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
        answer: "A candle"
    },
    {
        question: "What month of the year has 28 days?",
        answer: "All of them"
    },
    {
        question: "What is full of holes but still holds water?",
        answer: "A sponge"
    },
    {
        question: "What goes up but never comes down?",
        answer: "Age"
    },
    {
        question: "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?",
        answer: "Shadow"
    }
];


let questionsForPlayer = [];
let i = 0;
let getTypeText = document.querySelector("#typetext");
let checkButton = document.querySelector("#done");
let getCountdown = document.querySelector("#countdown");
let quesTitle = document.querySelector("#quesTitle");
let stopStatus = document.querySelector("#timeOver");
let ques = document.querySelector("#challenge");
let totalQues = questions.length;
let checkStatus = document.querySelector("#result");
let score = 0;
let showScore = document.querySelector("#score");
let reset = false;

function startGame(totalsecond) {
    callCountdownTimer(totalsecond);
    enableGamePlay();
    showFirstQuestion();
}
//End game and show "Time Out!" or "Congratulations!" and show score
function endGame(countdown0, endStatus) {
    clearInterval(countdown0);
    document.querySelector("#answerArea").setAttribute("disabled", "");
    stopStatus.hidden = false;
    stopStatus.innerHTML = endStatus;
    showScore.innerHTML = score;
}
//Start the countdown timer and playing game with first riddle
function callCountdownTimer(totalsecond) {
    let countdown0 = setInterval(() => {
        let minute = Math.floor(totalsecond / 60);
        let second = totalsecond % 60;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        getCountdown.innerHTML = `${minute}:${second}`;
        totalsecond--;
        if (totalsecond < 0) {
            endGame(countdown0, "Your time is over!");
        } else if (score == questions.length) {
            endGame(countdown0, "Congratulation!");
        } else if (reset) {
            clearInterval(countdown0);
            getCountdown.innerHTML = "00:00";
            reset = false;
        };
    }, 1000);
}
function enableGamePlay() {
    document.querySelector("#answerArea").removeAttribute("disabled");
}
function showFirstQuestion() {
    let random = Math.floor(Math.random() * totalQues);
    ques.textContent = questions[random].question;
    questionsForPlayer.push(random);
    quesTitle.innerHTML = `Riddle ${i + 1}`;
    showRule.innerHTML = "";
    getTypeText.hidden = false;
    getTypeText.focus();
    checkButton.hidden = false;

}


function checkAnswer(i) {
    let answerGet = getTypeText.value;
    if (answerGet != questions[questionsForPlayer[i]].answer) {
        checkStatus.innerHTML = "Wrong answer!";
        setTimeout(() => checkStatus.innerHTML = "", 1200);
        return false;
    };
    return true;
}

function showNextQuestion() {
    if (checkAnswer(i)) {
        if (questionsForPlayer.length < totalQues) {
            let nextRandom;
            do {
                nextRandom = Math.floor(Math.random() * totalQues);
            } while (questionsForPlayer.find((value) => value == nextRandom) != undefined);
            questionsForPlayer.push(nextRandom);
            checkStatus.innerHTML = "Correct answer!";
            setTimeout(() => {
                ques.textContent = questions[nextRandom].question;
                checkStatus.innerHTML = "";
                getTypeText.value = "";
            }, 500);
            i++;
            score++;
            quesTitle.innerHTML = `Riddle ${i + 1}`;
        } else {
            score++;
            checkStatus.innerHTML = "Correct answer!";
            showScore.innerHTML = score;
        }
    }
}

function resetGame() {
    questionsForPlayer = [];
    i = 0;
    score = 0;
    quesTitle.innerHTML = "Rule";
    ques.innerHTML = "";
    showRule.innerHTML = localStorage.getItem("RulesData");
    stopStatus.innerHTML = "";
    getTypeText.value = "";
    showScore.innerHTML = score;
    getTypeText.hidden = true;
    checkButton.hidden = true;
    stopStatus.hidden = true;
    reset = true;
}

//Save rule to local storage and show rule before playing game
var rules = ` <li>Click "Start" button to start the game.</li>
<li>When the riddle appears, type your answer to the textbox, then click "Check" button or press "Enter".</li>
<li><span>Note: </span>You must type the answer like the example below.</li>
    <ul>
        <li>Riddle: What is black when it's clean and white when it's dirty?</li>
        <li>Answer: <span>A chalkboard</span></li>
    </ul>
<li>If your answer is not correct , next riddle won't be showed.</li>
<li>Every your correct answer, you score 1 point.</li>
<li>If time is out, your game is over and your score is showed below.</li>
<li>Finnaly, try to solve as much riddle as possible before your time is over. Good luck!</li>`;
localStorage.setItem("RulesData", rules);
let showRule = document.querySelector("#rule");
showRule.innerHTML = localStorage.getItem("RulesData");
