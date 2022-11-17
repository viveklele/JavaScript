let arr = [12, 423, 3, 765, 4]

// Array map method
let a = arr.map((value, index, number) =>{
    console.log(value, index, number)
    return value*2
})
console.log(a)
// another type of syntax
let newarr = arr.map(a => a*2)
console.log(newarr)

// filter method => use to filter Array
arr2 = [23, 12, 34, 65, 43, 3, 1, 0, 5, 6, 7, 8]
let a2 = arr2.filter((value) => {
    // console.log(value<43)
    return value<43
})
console.log(a2)

// reduce function => it's perform operation from index 0 to n
arr3 = [23, 12, 34, 65, 43, 3, 1, 0, 5, 6, 7, 8]
// method 1
let a3 = arr3.reduce((x, y) => {
    return x + y
})
console.log(a3)

// method 2
reduce_function = (value, k) => {
    return value + k
}
let newarr2 = arr3.reduce(reduce_function)
console.log(newarr2)