var Player = (function (){
	function Player(params){
		this.fullName = params.fullName;
		this.chosenOption = undefined;

	}

	Player.prototype.choose = function(options){
		var chosenIndex = parseInt(prompt(this.fullName + " 0: Rock, 1: Paper, 2: Scissors"));
		this.chosenOption = options[chosenIndex];
	}

	Player.prototype.beats = function(otherplayer){
		return this.chosenOption.beats(otherplayer.chosenOption);
	}


	return Player;
}

)();