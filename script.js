const startButtonElement = document.getElementById('start-btn')
const nextButtonElement = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const questionContainerElement = document.getElementById('question-container')
const answerButtonElement = document.getElementById('answer-buttons')

const availableQuestion = document.querySelector('.total-questions')
let totalQuestion = document.querySelector('.score')
let scoresBoard = document.querySelector('.scores-board')
let performance = document.querySelector('.perform');
let orderQuestions, currentQuestion;
// console.log(); Output
let userScore = 5;

startButtonElement.addEventListener('click', nowGameStart)

function nowGameStart() {
    startButtonElement.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    orderQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0;
    setQuestion();
    availableQuestion.innerHTML = questions.length
}

function setQuestion() {
    removeAllUserPreview()
    previewQuestion(orderQuestions[currentQuestion])
}
var totalScore = 0;

function previewQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButtonElement.appendChild(button)
        button.addEventListener('click', (e) => {
            const select = e.target;
            correct = select.dataset.correct;
            setUserPreview(document.body, correct);
            Array.from(answerButtonElement.children).forEach(button => {
                setUserPreview(button, button.dataset.correct);
            })
            if (correct) {
                totalScore++
                performance.innerText = `${Math.floor(totalScore / questions.length * 100)}%`;
            }
            if (orderQuestions.length > currentQuestion + 1) {
                setTimeout(() => {
                    currentQuestion++;
                    totalQuestion.innerText++;
                    setQuestion()
                }, 500)

            } else {
                document.querySelector('.container').classList.add('hide')
                questionContainerElement.classList.add('hide')
                scoresBoard.classList.remove('display')
                    // performance = userScore;

                // removeAllUserPreview();
            }
        })
    })
}


function setUserPreview(element, correct) {
    clearUserPreview(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong')
    }
}

function clearUserPreview(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function removeAllUserPreview() {
    while (answerButtonElement.firstChild) {
        clearUserPreview(document.body)
        nextButtonElement.classList.add('hide')
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function score() {
    performance.innerText++
        console.log(performance);

}
const questions = [{
        question: "Who created this anwesome quiz?",
        answers: [
            { text: "Isaac Reign", correct: true },
            { text: "Me", correct: false },
            { text: "Everyone", correct: false },
            { text: "None of these", correct: false },


        ]
    },
    {
        question: "You love programming?",
        answers: [
            {text: "Of caurse", correct: true},
            { text: "Maybe", correct: false },
            { text: "Am not", correct: false },
            { text: "hmmm", correct: false },

        ]
    },
    {
        question: "Web development is a greet carrera?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },

]
