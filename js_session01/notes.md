var isVerified = true;
console.log(isVerified);

var address = "San Nicolas 66850";
console.log(address);

var age = 19;
console.log(age)

var price = 10.99;
console.log(price);

var name;
console.log(name);

var nullValue = null;
console.log(nullValue);




var age = 10;
var speed = 10.50;
var firstName = "Armando";
var define;
var nullValue = null;

console.log(speed > 11 && age < 11);
console.log(speed < 9 || age < 12);
console.log(speed == age);
console.log(speed === age);
console.log(speed !== age);
console.log(!(age > 18));
console.log(9)
console.log(9.99);
console.log(firstName);
console.log(speed >= age);
console.log(speed <= age);
console.log(define == nullValue);
console.log(define === nullValue);


var age = prompt("cual es tu edad?");
var gender = "female";
var isMom = false;
var legalAgeFemale = (age >= 18 && gender == "female");

if (isMom){
    alert("Entra gratis por 10 de mayo!!!");   
}

if (legalAgeFemale) {
    alert("Entra gratis!!!");
} else {
    alert("Pagale chavo");   
}

