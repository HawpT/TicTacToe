
var tictac = tictac || {};

tictac.Preload = function() {};

tictac.Preload.prototype = {
    preload: function() {
	
        //load images
        this.load.image('numbutton','/TicTacToe/assets/orangebutton.png');
        this.load.image('board','/TicTacToe/assets/board.png');
    },

    //immediately when preload is done
    create: function() {
        //call the Main Menu state
        this.state.start('TicTacToe');
    }
};
