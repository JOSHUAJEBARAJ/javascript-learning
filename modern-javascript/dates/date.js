// date uses constructor , methods , timestamp , methods that returns the string 
const now = new Date()

console.log(now)

// object 
console.log (typeof now)

// methods

console.log(now.getFullYear())

// returns the month int starts with 0
console.log(now.getMonth())
console.log(now.getUTCDate())
// retruns the int starts with 0
console.log(now.getUTCDay())

// get time
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getUTCHours())

// timestamps

console.log('Timestamp',now.getTime())

// returns the string 

console.log(now.toDateString())
console.log(now.toTimeString())