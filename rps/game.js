var Game = (function (){
	function Game(params){
		this.options =[ new Rock(),
		new Paper(),
		new Scissors()
		];

		this.playerOne = new Player({fullName: params.playerOneName});
		this.playerTwo = new Player({fullName: params.playerTwoName});
		this.winner = undefined;


	}



	//Public

	Game.prototype.play = function(){
		this._askPlayers();
		this._evalGame();
		this._printResults();

	};


	//Private
	Game.prototype._askPlayers = function(){
		var self = this;
		[this.playerOne, this.playerTwo].forEach(function(player){
			player.choose(self.options);
		});

	};

	Game.prototype._evalGame = function(){
		if(this._isATie()){
			this.winner = undefined;

		} else if(this._playerOneWins()){
			this.winner = this.playerOne.fullName;
		} else {
			this.winner = this.playerTwo.fullName;
		}
	};


	Game.prototype._isATie = function(){
		return this.playerOne.chosenOption == this.playerTwo.chosenOption;
	};

	Game.prototype._playerOneWins = function(){
		return this.playerOne.beats(this.playerTwo);
	};

	Game.prototype._printResults = function(){
		if(this._isATie){
			alert("Es un empate!");
		} else {
			alert(this.winner + " es el ganador!");
		}
	};

	return Game;
}

)();