function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('play-screen').style.display  = 'flex';
    }
function homeScreen() {
    document.getElementById('howToPlay').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

function howToPlay() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('howToPlay').style.display = 'flex';
}