// primtive type vs reference type
let a = "Joshua"
let b = a

console.log (`${a} ${b}`)

a= "Jebaraj"
console.log (`${a} ${b}`) // here only one value is updated 


// reference type 

let x = {name:"Joshua"}

let y = x

console.log(x,y)

x.name = "Jebaraj"

console.log(x,y) // here both value is updated 