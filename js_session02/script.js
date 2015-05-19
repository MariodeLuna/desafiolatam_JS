var choice = prompt("piedra, papel o tijera? Usuario 1")
var choice2 = prompt("piedra, papel o tijera? Usuario 2")


if (choice == choice2){
	alert("Empate.")
} else if ((choice == "piedra" && choice2 == "tijera") || (choice == "papel" && choice2 == "piedra") || (choice == "tijera" && choice2 == "papel")){
	alert("Gana el usuario 1")
} else{
	alert("Gana el usuario 2")
}





var password = "password";
var userPassword = "";

do{
     userPassword = prompt("Dime el password");   
} while(userPassword !== password){
    alert("Estas logueado!");
}


var password = "password";
var userPassword = "";

while(userPassword !== password){
    userPassword = prompt("Ingresa tu password");
}

alert("Bienvenido");







var password = "password";
var userPassword = "";
var userQ = "perro";
var userA = "";

while(userPassword !== password){
    userPassword = prompt("Ingresa tu password");
   
}

while (userA !== userQ){
      userA = prompt("Como se llama tu perro?");   
    }

alert("Bienvenido");





var password = "password";
var userPassword = "";

for (var i = 0; i < 10; i++){
     userPassword = prompt("cual es tu password?");
     
    if (userPassword == password){
        alert("Bienvenido");
      break   
    } else {
        alert("Password incorrecto. No de intentos: " + (i+1));
    }
}






var upTo = prompt("Hasta que numero quieres sumar?");
var sum  = 0;
                  
for (var i=1; i <= upTo; i++){
    sum = sum + i;
}

alert(sum);



var upTo = prompt("Que numero quieres reducir?");
                  
for (var i=upTo; i > 0; i--){
    alert(i);
}






var upTo = prompt("Que numero quieres reducir?");
var sum = 0;
                  
for (var i=upTo; i > 0; i--){
    sum = parseInt(i) + sum;
}

alert(sum);




var number = parseInt(prompt("Dame un numero"));

if (number <= 1){
  alert("No es primo")   
}
else {
    for (var i = 2; i < number; i++){
        if (number % i == 0){
            alert("No es primo");
            break
        }
        else{
         alert("Es primo");         
        }
    }    
}





var number = parseInt(prompt("Dame un numero"));
var primo = true;

if (number <= 1){
  alert("No es primo")   
}
else {
    for (var i = 2; i < number; i++){
        if (number % i == 0){
            primo = false;
            alert("No es primo");
            break;
        }
    }    
}

if(primo){
 alert("es primo");   
}







var arreglo = ["juan", , "pedro"];
var emptyList = [];


for (i=0; i<arreglo.length; i++){
 console.log(arreglo[i]);   
}