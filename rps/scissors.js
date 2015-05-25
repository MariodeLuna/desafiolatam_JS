var Scissors = (function (){
	function Scissors(){
		this.name = "scissors";

	}


	Scissors.prototype.beats = function(otherOption){
		return otherOption.name == "scissors";
	}

	return Scissors;
}

)();