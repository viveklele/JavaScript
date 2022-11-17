// document.write use to show output on webpage
alert("Enter number")
let number = prompt("Enter number")
document.write("number", number)
console.log(number)

// confirm
let conf = confirm("Are you sure to write this")
if (conf){
    document.write(number)
}
else{
    document.write("Please allow me to write")
}