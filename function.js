let marks = {
    "abc": 21,
    "bcd": 32,
    'ads': 33
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log(marks[Object.keys(marks)[i]])
}

// arrow function
let name = () =>{
    return 'hello'
}
console.log(name())

// correct number
let corr_no = 5;
let i;
while (i != corr_no){
    i = prompt("Enter number: ") 
}