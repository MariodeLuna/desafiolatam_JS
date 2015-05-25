var Rock = (function (){
	function Rock(){
		this.name = "rock";

	}


	Rock.prototype.beats = function(otherOption){
		return otherOption.name == "scissors";
	}

	return Rock;
}

)();