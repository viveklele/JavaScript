let num = [2, 5, 12, 52, 89]

// forEach loop
num.forEach((element) => {
    console.log(element)
})

// Use of for loop in old format
for (let i=0; i<num.length; i++){
    console.info("For Loop", num[i], "value of i", i)
}

// Array.form
let name = "Kedar"
let arr = Array.from(name)
console.log(arr)

// "for of loop" best way to access elements in array
for (let k of num){
    console.log(k)
}

// for in loop it gives index range of array
for(k in num){
    console.log(k)
    console.log(num[k])
}
console.log(num)