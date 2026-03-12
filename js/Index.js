function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('play-screen').style.display  = 'flex';

    
    //set the configuration of the game 
    let config = {
        type: Phaser.CANVAS,
        canvas: document.getElementById('game-canvas'),
        parent: 'play-screen',
        scale: {
        mode: Phaser.Scale.RESIZE, 
        width: '100%',
        height: '100%'
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
            
    };

    // create a new game, pass tje cpmfogiratopm
    let game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('sky', 'js/sky.png');
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');
    }

    function update ()
    {
    }
} 

function homeScreen() {
    document.getElementById('howToPlay').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

function howToPlay() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('howToPlay').style.display = 'flex';
}
