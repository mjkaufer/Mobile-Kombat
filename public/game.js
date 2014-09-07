
    function el(id) {
        return document.getElementById(id);
    }

    function setLife(lifeBar, life) {
        lifeBar.style.width = life + '%';
    }

    document.onkeydown = function (e) {
        if (e.keyCode === 32) {
            window.location.reload();
        }
        e.preventDefault();
        return false;
    };

    function startGame() {
        mk.start({
            arena: {
                container: document.getElementById('arena')
            },
            fighters: [
                { name: 'Subzero' },
                { name: 'Kano' }
            ],
            callbacks: {
                attack: function (f, o, l) {
                    if (o.getName() === 'kano') {
                        setLife(el('player2Life'), o.getLife());
                    } else {
                        setLife(el('player1Life'), o.getLife());
                    }
                },
                'game-end': function () {
                   el('gameEnd').style.visibility = 'visible'; 
                }
            },
            gameType: 'multiplayer'
        }).ready(function () {
            el('loading').style.visibility = 'hidden';
            el('arena').style.visibility = 'visible';
            el('utils').style.visibility = 'visible';
        });
    }

    startGame();

