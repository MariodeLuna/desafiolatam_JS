var names =["juan", "ramiro"];
var counter = 0;

while( counter < names.length){
 console.log(names[counter]); 
    counter++;
}

for( var i = 0; i < names.length; i++){
     console.log(names[i]);   






var firstNames = ["juan", "ramiro"];
var lastNames = ["ramirez", "garcia"];

var fullNames = firstNames.map(function(firstName){ return firstName + " Perez" });

console.log(fullNames);

firstNames.shift();
console.log(firstNames);

firstNames.unshift("pedro");
console.log(firstNames);

firstNames.sort();
console.log(firstNames);

console.log(firstNames.concat(lastNames));

console.log(firstNames.join(", "));




var numbers = [ 1, 2 ,3, 4, 5];

console.log(numbers.reduce(function(prevValue, currValue, index, array){
     return prevValue + currValue;   
}));
               
console.log(numbers);






var ages = [10, 11, 12, 15, 21, 18, 54, 45];

var grownUps = ages.filter(function(age){
     return age >= 18;   
}).map(function(age){
     return age + 1;   
});

console.log(grownUps);







var people = [{name: "juan", age: 15, petNames: ["Rufo", "Fido"]} , {
    name: "Ana", age: 22, petNames: ["Cat", "Dog"]}, {name: "John",
    age: 40, petNames: []}
];

var noPetPerson = people.filter(function(person){
  return person.petNames.length === 0;  
}).map(function(person){
    return person.name;
});

console.log(noPetPerson);





var people = [{name: "juan", age: 15, petNames: ["Rufo", "Fido"]} , {
    name: "Ana", age: 22, petNames: ["Cat", "Dog"]}, {name: "John",
    age: 40, petNames: []}
];

var noPetPerson = people.filter(function(person){
  return person.petNames.length === 0;  
}).map(function(person){
  return person.age;  
}).reduce(function(prevValue, currValue){
    return prevValue.age + currValue.age;
});

console.log(noPetPerson);








var people = [{
    name: "juan",
    age: 15,
    petNames: ["Rufo", "Fido"]
}, {
    name: "Ana",
    age: 22,
    petNames: ["Cat", "Dog"]
}, {
    name: "John",
    age: 40,
    petNames: []
}];

function getNoPetPeople(people) {
    return people.filter(function (people) {
        return people.petNames.length === 0;
    });
}

function getNoPeopleAgeSum(people) {
    return getNoPetPeople(people).map(function(person){
  return person.age;  
}).reduce(function(prevValue, currValue){
    return prevValue.age + currValue.age;
});
}



//console.log(getNoPetPeople(people));
console.log(getNoPeopleAgeSum(people));