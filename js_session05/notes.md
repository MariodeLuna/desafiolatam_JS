var person = {
    fullName: "Juan Perez",
    age: 55,
    sayHi: function () {
        alert("Hi! I'm " + this.fullName);
    },
    introduce: function () {
        alert("Hi, I'm " + this.fullName + " and I'm " + this.age);
    }
}

//person.sayHi();
//person.introduce();









var Person = function (fullName, age) {
    this.fullName = fullName;
    this.age = age;
    this.sayHi = function(){
        alert("Hi");
    }
};


var person1 = new Person("Juan Perez", 55);
console.log(person1);

var person2 = new Person("Roberto Martinez", 40);
console.log(person2);

person2.sayHi();







var Person = function (args) {
    this.fullName = args.fullName;
    this.age = args.age;
    this.sayHi = function(){
        alert("Hi");
    }
};


var person1 = new Person({fullName: "Juan Perez", age: 55});
console.log(person1);

var person2 = new Person({fullName: "Roberto Martinez", age: 40});
console.log(person2);

person2.sayHi();














var Person = function (args) {
    this.fullName = args.fullName,
    this.age = args.age,

    //Private Interface
    this._sayHello = function () {}
};

Person.prototype.sayHi = function () {
    alert("hi");
}


var people = [
new Person({
    fullName: "Juan Perez",
    age: 55
}),
new Person({
    fullName: "Roberto Martinez",
    age: 40
})];

people.forEach(function (person) {
    console.log(person);
});

people[0].sayHi();