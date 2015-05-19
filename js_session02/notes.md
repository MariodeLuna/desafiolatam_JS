var choice = prompt("piedra, papel o tijera? Usuario 1")
var choice2 = prompt("piedra, papel o tijera? Usuario 2")


if (choice == choice2){
	alert("Empate.")
} else if ((choice == "piedra" && choice2 == "tijera") || (choice == "papel" && choice2 == "piedra") || (choice == "tijera" && choice2 == "papel")){
	alert("Gana el usuario 1")
} else{
	alert("Gana el usuario 2")
}