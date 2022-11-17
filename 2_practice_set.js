// let arr = [12, 43, 64, 23,  2 ,43 ,23]
// let b = prompt("Enter number")
// b = Number.parseInt(b)
// arr.push(b)
// console.log(arr)

// arr = [12, 43, 64, 23,  2 ,43 ,23]
// let a;
// do {
//     a = prompt("Enter the number: ")
//     a = Number.parseInt(a)
//     arr.push(a)
// } while(a != 0);
// console.log(arr)

// let arr = [123, 42, 12, 34, 765, 65,10, 40, 320, 432]
// div_by_10 = arr.filter((x) => {
//     return x % 10 == 0
// })
// console.log(div_by_10)

let arr = [2, 5, 5, 2, 7, 5, 1, 9]
square = arr.map((x) => {
    return x * x
})
console.log(square)

arr = [1, 2, 3, 4, 5, 6, 7, 8]
fact = arr.reduce((x, y) => {
    return x * y
})
console.log(fact)