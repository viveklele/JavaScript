// console.log(console)
console.error("This is erro")
obj = {
    a:3,
    b: 4,
    c: 1
}
console.table(obj)
console.warn("Please don't drink soda")
console.info("Important info")

console.time("forloop")
for (let i=0; i<100; i++){
    console.log(23)
}
console.timeEnd('forloop')