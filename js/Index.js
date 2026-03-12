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



/* function dragItem(){
    
} */
/* function dropItem(){
} */


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

