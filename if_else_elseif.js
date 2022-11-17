// prompt ask a question 
let a = prompt('What is your age: ')
// console.log(typeof(a))
// aleart show a output
alert('a')
a = Number.parseInt(a) // converting string into number
// console.log(typeof(a))

if(a<0){
    alert('this is valid age')
}
else if (a<=9){
    alert('you are not eligible')
}
else if (a<18 && a){
    alert('ok then')
}
else{
    alert("invalid age")
}
// ternary operator
 console.log("you", a<18? 'cannot drive' : 'can drive')