// let random_number = ['snake', 'water', 'gun'] 
// random_number = random_number[Math.floor(Math.random()*random_number.length)]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}
random_number = getRandomInt(1, 4)
console.log(random_number)

// 1: water 2: gun 3: snake
let user_input = prompt("Select opetion between 1:\"water\" 2:\"gun\", 3:\"snake\"")
user_input = Number.parseInt(user_input)

if (random_number == user_input){
    console.log("The game resulted in tie")
}
else if (user_input==1 && random_number==2){
    console.log("you won")
}
else if(user_input==2 && random_number==1){
     console.log("computer won")
}
else if(user_input==2 && random_number==3){
    console.log("You won")
}
else if(user_input==3 && random_number==2){
    console.log("computer won")
}
else if(user_input==1 && random_number==3){
    console.log("computer won")
}
else if(user_input==2 && random_number==3){
    console.log("You won")
}
else if(user_input==3 && random_number==1){
    console.log("You won")
}
else{
    console.log("Please enter valid input")
}