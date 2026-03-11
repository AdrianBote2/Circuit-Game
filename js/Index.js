function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('play-screen').style.display  = 'flex';
    //create a new scene 
    let gameScene = new Phaser.Scene('Game');
    
    //set the configuration of the game 
    let config = {
        type: Phaser.CANVAS,
        width: 550,
        height: 400,
        canvas: document.getElementById('game-canvas'),
        parent: 'play-screen',
        scale:{
            mode: Phaser.Scale.FIT,
            
            autoCenter: Phaser.Scale.CENTER_BOTH

            autoRound: true
        },

        render: {
            pixelArt: true,
            antialias: false
        },
        scene: gameScene
            
    };

    // create a new game, pass tje cpmfogiratopm
    let game = new Phaser.Game(config);
    }
function homeScreen() {
    document.getElementById('howToPlay').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

function howToPlay() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('howToPlay').style.display = 'flex';
}