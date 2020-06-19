// my name
name = "Satyajit";
// number of states in India
states_in_india = 29;
// result of an addition operation
res = 5 + 4;
// calling functions
sayHello();
checkAge("Charles" , 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// decalring an array
var vegetables = ["cauliflowers", "okras", "tomatoes", "potatoes", "beans"];
for(var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

let pet = {
    name: 'John Doe',
    breed: 'muley'
}

var people = [
    {name: "ShadowWalker", age: 21},
    {name: "NoWay", age: 18},
    {name: "Muley", age: 23},
    {name: "Unseen", age: 20},
    {name: "Naratuga", age: 15},
]

for(var i = 0; i < people.length; i++ ){
    console.log(people[i].name);
    console.log(people[i].age);
    checkAge(people[i].name, people[i].age);
}

console.log(Object.assign(pet, {
    name: "Marley",
    breed: "Golden Retreiver"
}))

pet.name = "Buster"
pet.breed = "German Shepherd"






// function definitions:

// function to alert browser with hello world
function sayHello() {
    alert("Hello World");
}

function checkAge(name, age) {
    if(age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view the page");
    }
}