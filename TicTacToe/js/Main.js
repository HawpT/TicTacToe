var tictac = tictac || {};

//default canvas on which Phaser will draw
tictac.game = new Phaser.Game(228,228, Phaser.AUTO, 'new game');

//Adding all the state we will need in our game.
tictac.game.state.add('Preload', tictac.Preload);
tictac.game.state.add('TicTacToe', tictac.TicTacToe);

tictac.game.state.start('Preload');


