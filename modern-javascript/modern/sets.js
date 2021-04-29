// sets similar to array but doesn't allow the duplicate

const names = ['Joshua','Jebaraj','Joshua']


const nameSet = new Set(names)

console.log(nameSet)


const ages= new Set()

ages.add(10).add(20)


console.log(ages.size)

// deleteting
ages.delete(10)

// checking
console.log(ages.has(20))

// clear
ages.clear()
console.log(ages)