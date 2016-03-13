var tictac = tictac || {};

var validation;
var turn;
var onebutton,twobutton,threebutton,fourbutton,fivebutton,sixbutton,sevenbutton,eightbutton,ninebutton;

//array represents the different game spaces
var guessed = [0,0,0,0,0,0,0,0,0];

tictac.TicTacToe = function() {};

tictac.TicTacToe.prototype = {


    //immediately when preload is done
    create: function () {
        turn = 'X';
        //buttons for the tic tac toe board
        onebutton = new LabelButton(tictac.game,30,30,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        twobutton = new LabelButton(tictac.game,94,30,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        threebutton = new LabelButton(tictac.game,158,30,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        fourbutton = new LabelButton(tictac.game,30,94,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        fivebutton = new LabelButton(tictac.game,94,94,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        sixbutton = new LabelButton(tictac.game,158,94,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        sevenbutton = new LabelButton(tictac.game,30,158,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        eightbutton = new LabelButton(tictac.game,94,158,'numbutton','',this.actionOnClicked,this,0,0,0,0);
        ninebutton = new LabelButton(tictac.game,158,158,'numbutton','',this.actionOnClicked,this,0,0,0,0);

        //handlers for released button presses
        onebutton.onInputUp.add(this.clicked.bind(this, onebutton),this);
        twobutton.onInputUp.add(this.clicked.bind(this, twobutton),this);
        threebutton.onInputUp.add(this.clicked.bind(this, threebutton),this);
        fourbutton.onInputUp.add(this.clicked.bind(this, fourbutton),this);
        fivebutton.onInputUp.add(this.clicked.bind(this, fivebutton),this);
        sixbutton.onInputUp.add(this.clicked.bind(this, sixbutton),this);
        sevenbutton.onInputUp.add(this.clicked.bind(this, sevenbutton),this);
        eightbutton.onInputUp.add(this.clicked.bind(this, eightbutton),this);
        ninebutton.onInputUp.add(this.clicked.bind(this, ninebutton),this);


        var style = {'font': '32px Arial','fill': 'white'};
        validation = this.game.add.text(0, 188, 'Make a Move!', {font: '32px Arial', fill: 'white'})


    },

    //called every frame, checks for wins or draws
    update: function () {

        //check for a winner, and if there is one, reset the game
        if ((whoWon = this.isWinner())){
            if (whoWon === 1){
                validation.setText('X Wins!');
                for (i = 0; i < 9; i++)
                    guessed[i] = 0;
                turn = 'X';
                onebutton.label.setText('');
                twobutton.label.setText('');
                threebutton.label.setText('');
                fourbutton.label.setText('');
                fivebutton.label.setText('');
                sixbutton.label.setText('');
                sevenbutton.label.setText('');
                eightbutton.label.setText('');
                ninebutton.label.setText('');
            }
            else if(whoWon === 2){
                validation.setText('O Wins!');
                for (i = 0; i < 9; i++)
                    guessed[i] = 0;
                turn = 'X';
                onebutton.label.setText('');
                twobutton.label.setText('');
                threebutton.label.setText('');
                fourbutton.label.setText('');
                fivebutton.label.setText('');
                sixbutton.label.setText('');
                sevenbutton.label.setText('');
                eightbutton.label.setText('');
                ninebutton.label.setText('');
            }

        }

            //check for a draw, and if so, reset the game
        else if(guessed[0] != 0 && guessed[1] != 0 && guessed[2] != 0
            && guessed[3] != 0 && guessed[4] != 0 && guessed[5] != 0
            && guessed[6] != 0 && guessed[7] != 0 && guessed[8] != 0){
            validation.setText('Game Draw!');
            for (i = 0; i < 9; i++)
                guessed[i] = 0;
            turn = 'X'
            onebutton.label.setText('');
            twobutton.label.setText('');
            threebutton.label.setText('');
            fourbutton.label.setText('');
            fivebutton.label.setText('');
            sixbutton.label.setText('');
            sevenbutton.label.setText('');
            eightbutton.label.setText('');
            ninebutton.label.setText('');
        }
    },

    //helper method to determine if a player has won
    isWinner: function(){
        //rows
        if (guessed[0] === guessed[1] && guessed[0] === guessed[2] && guessed[0] != 0)
            return guessed[0];
        else if (guessed[3] === guessed[4] && guessed[3] === guessed[5] && guessed[3] != 0)
            return guessed[3];
        else if (guessed[6] === guessed[7] && guessed[6] === guessed[8] && guessed[6] != 0)
            return guessed[6];

        //columns
        else if (guessed[0] === guessed[3] && guessed[0] === guessed[6] && guessed[0] != 0)
            return guessed[0];
        else if (guessed[1] === guessed[4] && guessed[1] === guessed[7] && guessed[1] != 0)
            return guessed[1];
        else if (guessed[2] === guessed[5] && guessed[2] === guessed[8] && guessed[2] != 0)
            return guessed[2];

        //diagonals
        else if (guessed[0] === guessed[4] && guessed[0] === guessed[8] && guessed[0] != 0)
            return guessed[0];
        else if (guessed[2] === guessed[4] && guessed[2] === guessed[6] && guessed[2] != 0)
            return guessed[2];
    },

    //default button handler, not used
    actionOnClicked: function() {

    },

    //the primary handler for button clicks
    clicked: function(b) {

        if( turn === 'X') {
            switch (b) {
                case onebutton:
                    if(guessed[0] === 0) {
                        onebutton.label.setText('X');
                        turn = 'O';
                        guessed[0] = 1;
                        this.computerTurn(0);
                    }
                    break;
                case twobutton:
                    if(guessed[1] === 0) {
                        twobutton.label.setText('X');
                        turn = 'O';
                        guessed[1] = 1;
                        this.computerTurn(1);
                    }
                    break;
                case threebutton:
                    if(guessed[2] === 0) {
                        threebutton.label.setText('X');
                        turn = 'O';
                        guessed[2] = 1;
                        this.computerTurn(2);
                    }
                    break;
                case fourbutton:
                    if(guessed[3] === 0) {
                        fourbutton.label.setText('X');
                        turn = 'O';
                        guessed[3] = 1;
                        this.computerTurn(3);
                    }
                    break;
                case fivebutton:
                    if(guessed[4] === 0) {
                        fivebutton.label.setText('X');
                        turn = 'O';
                        guessed[4] = 1;
                        this.computerTurn(4);
                    }
                    break;
                case sixbutton:
                    if(guessed[5] === 0) {
                        sixbutton.label.setText('X');
                        turn = 'O';
                        guessed[5] = 1;
                        this.computerTurn(5);
                    }
                    break;
                case sevenbutton:
                    if(guessed[6] === 0) {
                        sevenbutton.label.setText('X');
                        turn = 'O';
                        guessed[6] = 1;
                        this.computerTurn(6);
                    }
                    break;
                case eightbutton:
                    if(guessed[7] === 0) {
                        eightbutton.label.setText('X');
                        turn = 'O';
                        guessed[7] = 1;
                        this.computerTurn(7);
                    }
                    break;
                case ninebutton:
                    if(guessed[8] === 0) {
                        ninebutton.label.setText('X');
                        turn = 'O';
                        guessed[8] = 1;
                        this.computerTurn(8);
                    }
                    break;
                default:
                    throw "clicked() did not receive a button in the parameter";
            }
        }
    },

    computerTurn: function(lastMove){
        //logic to determine the computers move, based on priority.
        var nextMove;
        var win = this.canWin(2);
        var block = this.canWin(1);
        var fork = this.canFork(2);
        var blockFork = this.canFork(1);
        var center = this.playCenter();
        var oppCorner = this.playOppositeCorner(lastMove);
        var corner = this.emptyCorner();
        var side = this.emptySide();

        if(win >= 0){
            guessed[win] = 2;
            nextMove = win;
        }
        else if(block >= 0){
            guessed[block] = 2;
            nextMove = block;
        }
        else if(fork >= 0){
            guessed[fork] = 2;
            nextMove = fork;
        }
        else if(blockFork >= 0){
            guessed[blockFork] = 2;
            nextMove = blockFork;
        }
        else if(center >= 0){
            guessed[center] = 2;
            nextMove = center;
        }
        else if(oppCorner >= 0){
            guessed[oppCorner] = 2;
            nextMove = oppCorner;
        }
        else if(corner >= 0){
            guessed[corner ] = 2;
            nextMove = corner ;
        }
        else if(side >= 0){
            guessed[side] = 2;
            nextMove = side;
        }

        switch(nextMove){
            case 0:
                onebutton.label.setText('O');
                turn = 'X';
                break;
            case 1:
                twobutton.label.setText('O');
                turn = 'X';
                break;
            case 2:
                threebutton.label.setText('O');
                turn = 'X';
                break;
            case 3:
                fourbutton.label.setText('O');
                turn = 'X';
                break;
            case 4:
                fivebutton.label.setText('O');
                turn = 'X';
                break;
            case 5:
                sixbutton.label.setText('O');
                turn = 'X';
                break;
            case 6:
                sevenbutton.label.setText('O');
                turn = 'X';
                break;
            case 7:
                eightbutton.label.setText('O');
                turn = 'X';
                break;
            case 8:
                ninebutton.label.setText('O');
                turn = 'X';
                break;
            default:

                break;
        }
    },

    canWin: function(x){
        //column 1
        if (guessed[0] === x){
            if(guessed[3] === x && guessed[6] === 0){
                return 6;
            }
            else if(guessed[6] === x && guessed[3] === 0){
                return 3;
            }
        }
        else if((guessed[3] === x) && (guessed[6] === x) && (guessed[0]) === 0){
            return 0;
        }

        //column 2
        if (guessed[1] === x){
            if(guessed[4] === x && guessed[7] === 0){
                return 7;
            }
            else if(guessed[7] === x && guessed[4] === 0){
                return 4;
            }
        }
        else if((guessed[4] === x) && (guessed[7] === x) && (guessed[1]) === 0){
            return 1;
        }

        //column 3
        if (guessed[2] === x){
            if(guessed[5] === x && guessed[8] === 0){
                return 8;
            }
            else if(guessed[8] === x && guessed[5] === 0){
                return 5;
            }
        }
        else if((guessed[5] === x) && (guessed[8] === x) && (guessed[2]) === 0){
            return 2;
        }

        //row 1
        if (guessed[0] === x){
            if(guessed[1] === x && guessed[2] === 0){
                return 2;
            }
            else if(guessed[2] === x && guessed[1] === 0){
                return 1;
            }
        }
        else if((guessed[1] === x) && (guessed[2] === x) && (guessed[0]) === 0){
            return 0;
        }

        //row 2
        if (guessed[3] === x){
            if(guessed[4] === x && guessed[5] === 0){
                return 5;
            }
            else if(guessed[5] === x && guessed[4] === 0){
                return 4;
            }
        }
        else if((guessed[4] === x) && (guessed[5] === x) && (guessed[3]) === 0){
            return 3;
        }

        //row 3
        if (guessed[6] === x){
            if(guessed[7] === x && guessed[8] === 0){
                return 8;
            }
            else if(guessed[8] === x && guessed[7] === 0){
                return 7;
            }
        }
        else if((guessed[7] === x) && (guessed[8] === x) && (guessed[6]) === 0){
            return 6;
        }

        //diagonal 1
        if (guessed[0] === x){
            if(guessed[4] === x && guessed[8] === 0){
                return 8;
            }
            else if(guessed[8] === x && guessed[4] === 0){
                return 4;
            }
        }
        else if((guessed[4] === x) && (guessed[8] === x) && (guessed[0]) === 0){
            return 0;
        }

        //diagonal 2
        if (guessed[2] === x){
            if(guessed[4] === x && guessed[6] === 0){
                return 6;
            }
            else if(guessed[6] === x && guessed[4] === 0){
                return 4;
            }
        }
        else if((guessed[4] === x) && (guessed[6] === x) && (guessed[2]) === 0){
            return 2;
        }

        return -1;
    },

    canFork: function(x){
        //corner fork top left
        if (guessed[0] === 0 && guessed[3] === x && guessed[1] === x && guessed[6] === 0 && guessed[2] === 0) {
            return 0;
        }
        //corner fork top right
        else if(guessed[2] === 0 && guessed[1] === x && guessed[5] === x && guessed[8] === 0 && guessed[0] === 0){
            return 2;
        }
        //corner fork bottom left
        else if (guessed[6] === 0 && guessed[3] === x && guessed[7] === x && guessed[8] === 0 && guessed[0] === 0) {
            return 6;
        }
        //corner fork bottom right
        else if (guessed[8] === 0 && guessed[7] === x && guessed[5] === x && guessed[6] === 0 && guessed[2] === 0) {
            return 8;
        }
        //center fork 1
        else if (guessed[4] === 0 && guessed[3] === x && guessed[1] === x && guessed[7] === 0 && guessed[5] === 0) {
            return 4;
        }
        //center fork 2
        else if (guessed[4] === 0 && guessed[5] === x && guessed[1] === x && guessed[7] === 0 && guessed[4] === 0) {
            return 4;
        }
        //center fork 3
        else if (guessed[4] === 0 && guessed[5] === x && guessed[7] === x && guessed[3] === 0 && guessed[1] === 0) {
            return 4;
        }
        //center fork 4
        else if (guessed[4] === 0 && guessed[3] === x && guessed[7] === x && guessed[1] === 0 && guessed[5] === 0) {
            return 4;
        }
        //split corner fork top left
        else if (guessed[0] === 0 && guessed[6] === x && guessed[3] === x && guessed[3] === 0 && guessed[1] === 0) {
            return 0;
        }
        //split corner fork top right
        else if (guessed[2] === 0 && guessed[0] === x && guessed[8] === x && guessed[1] === 0 && guessed[5] === 0) {
            return 2;
        }
        //split corner fork bottom left
        else if (guessed[6] === 0 && guessed[8] === x && guessed[0] === x && guessed[7] === 0 && guessed[3] === 0) {
            return 6;
        }
        //split corner fork bottom right
        else if (guessed[8] === 0 && guessed[6] === x && guessed[3] === x && guessed[7] === 0 && guessed[5] === 0) {
            return 8;
        }

        return -1;
    },

    playCenter: function(){
        if(guessed[4] === 0)
            return 4;
    },

    playOppositeCorner: function(lastMove){
        if(lastMove === 0)
            return 8;
        else if(lastMove === 2)
            return 6;
        else if(lastMove === 6)
            return 2;
        else if(lastMove === 8)
            return 0;

        return -1;
    },

    emptyCorner: function(){
        if(guessed[0] === 0)
            return 0;
        else if (guessed[2] === 0)
            return 2;
        else if (guessed[6] === 0)
            return 6;
        else if (guessed[8] === 0)
            return 8;

        return -1;
    },

    emptySide: function(){
        if(guessed[1] === 0)
            return 1;
        else if(guessed[3] === 0)
            return 3;
        else if(guessed[5] === 0)
            return 5;
        else if(guessed[7] === 0)
            return 7;

        return -1;
    }
};
