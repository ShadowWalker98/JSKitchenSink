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