arr = [1, 2, 3, 4, 5, 6, 7]
for (let i in arr){
    console.log(arr[i])
}
// Using Join Method
console.log(arr.join('-'))

arr.pop()
console.log(arr)

// push return array lenght and append element
console.log(arr.push())

// shift remove first element of array
console.log(arr.shift())

// ushift add element at begining
console.log(arr.unshift(12))
console.log(arr)

// delete 
delete arr[0]
console.log(arr)

let newarry = ['a', 'b', 'c']
console.log(arr.concat(newarry))

let abc = 234
console.log(typeof(abc))

// sort method
function compare(a, b){
    return a-b
}
let num = [32, 12, 3, 53, 83, 23]
console.log(num.sort(compare))

// splice fundtion
// syntax = position:number of elements to remover: elements
num = [12, 21, 45, 84, 75, 12, 32]
num.splice(2, 2, 111, 222, 333, 444, 2323)
console.log(num)