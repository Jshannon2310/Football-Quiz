let startButton = document.getElementById('start-btn')
let questionContainer = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('start game')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')

}

function nextQuestion(){

}

function selectAnswer(){

}