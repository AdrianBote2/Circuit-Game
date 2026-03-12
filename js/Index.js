function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('play-screen').style.display  = 'flex';
    startTimer();
}

function homeScreen() {
    document.getElementById('howToPlay').style.display = 'none';
    document.getElementById('play-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

function howToPlay() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('howToPlay').style.display = 'flex';
}
//Drag and 
function dragStartHandler(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.style.opacity = '0.4';
}



//Timer function

/* let timeLeft = 30;
let timerInterval = null;

function startTimer() {
    setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft== -1){
            clearInterval(timerInterval);
            gameOver();
        }
 
    }, 1000);
}
function gameOver(){
    clearInterval(timerInterval);
    timeLeft = 30;
    document.getElementById('timer').innerText = 30;
    alert('Boom');
    homeScreen();
} */

const circuit = {
    voltage: 9,
    current: 3,
    resistance: 3
};

