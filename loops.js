/*
let sum = 0;
let n = prompt('enter value:')
n = parseInt(n)

for(let i=1; i<=n; i++){
    sum += 1
}
console.log(sum)
*/
// for in loop like python
let obj = {
    'a': 11,
    'b' : 12,
    'c' : 13,
    'd' : 14,
}
for(let a in obj){
    console.log(obj[a])
    console.log(a)

}   
// for of loop 
for(let a of 'vivek'){
    console.log(obj[a])
    console.log(a)
}