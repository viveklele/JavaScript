let random_number = Math.floor(Math.random() * 100)
// console.log(random_number)
let score = 101
do {
    guss_number = prompt("Guess Number: ")
    if(guss_number < random_number){
        console.log('Sorry! Magic number is bigger', guss_number)
    }
    else if (guss_number > random_number){
        console.log('Sorry! Magic number is smaller then ', guss_number)
    }
    score--
} while(guss_number != random_number)
console.log('You guess right nubmer', random_number)
console.log('You\'r score is', score, 'out of 100')