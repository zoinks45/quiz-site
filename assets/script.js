const startBtn = document.getElementById("start-btn")
const nextBtn = document.getElementById("next-btn")
const questionContainer = document.getElementById("question-container")
const timer = document.getElementById("time")
startBtn.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("started")
    startBtn.classList.add("hide")
    nextBtn.classList.remove("hide")
    questionContainer.classList.remove("hide")
    startTime()
    nextQuestion()
}

function startTime(){
    let timeSeconds = 30
    timer.innerHTML = `00:${timeSeconds}`
    const countDown =  setInterval (()=>{
        timeSeconds--;
        timer.innerHTML = `00:${timeSeconds}`
        if(timeSeconds <= 0 || timeSeconds < 1){
            clearInterval(countDown)
        }
    },1000)
    

}

function nextQuestion(){

}

function showScore(){

}

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {Text: "script", correct:true},
            {Text: "scripting", correct:false},
            {Text: "js", correct:false},
            {Text: "javaScript", correct:false},


        ]
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {Text: "the head section", correct:false},
            {Text: "the body section", correct:true},
            {Text: "both", correct:false}


        ]
    },
]