console.log("Hello world")
let name = 'Vivek';
let alive = true;
let typeOf = null;
let person = {
    name: 'Vivek',
    age: 23,
    surename: "None"
    
}
// dot notation 
person.name = 'john';
// bracket notation
person['name'] = 'Marry';
console.log(person.name);
console.log(name);

// Array
let selectedColour = ['Red', 2, 'Blue', 'Black', 'Green'];
console.log(selectedColour.length);

function greet(name) {
    console.log('Hello', name);
}
greet("Rahul");