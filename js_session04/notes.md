var first = 1;
var second = 1;

function isSame(x, y) {
    return x === y;
}

console.log(isSame(first, second));


var firstName = "Adela";
var age = 65;
var person = {name: "Pedro", age: 60};
var myArr = [1, 2];

function myFunc(){
    firstName = "Juan";
}

var agePlusOne = function(person){
    person.age = person.age +1;   
}

var addAnElement = function(myArr){
        myArr.push(10);
}

function log(x){
 console.log(x)   
}

function calculateTotal(filter){
     return filter(100.00);   
}

function discountPromo(total){
     return total - 20;   
}


console.log(firstName);
myFunc();
console.log(firstName);
agePlusOne(person);
console.log(person.age);
addAnElement(myArr);
console.log(myArr);
log(myArr);




function sum10() {
    var acum = 0;
    return function (yourNumber) {
        acum = acum + 10;
        return acum;
    };
}

var plus10 = sum10();

console.log(plus10());
console.log(plus10());
console.log(plus10());







function isTie(p1, p2) {
    return p1 === p2;
}

function rockWins(p1, p2) {
    var array = [p1, p2];
    return arrayIncludes(array, "rock") && arrayIncludes(array, "scissor");
}

function arrayIncludes(array, element) {
    var results = array.filter(function (i) {
        return i == element;
    });
    return results.length > 0;
}

console.log(rockWins("rock", "scissor"));

function paperWin() {
var array = [p1, p2];
    return arrayIncludes(array, "paper") && arrayIncludes(array, "rock");
}

function scissorWin() {
var array = [p1, p2];
    return arrayIncludes(array, "scissor") && arrayIncludes(array, "paper");
}