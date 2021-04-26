// timestamps ,difference , timestamps to date 

const before = new Date('April 25 2021')

const now = new Date();

console.log(now.getTime())

console.log(before.getTime())

// get the time 
const diff = now-before
console.log(diff)

const min = Math.round(diff/1000/60);
const hr = Math.round(min/60);
const day = Math.round(hr/24)

console.log(`The blog wrritten ${day} ago`)

// converting the timestamps to the time

console.log(new Date(1619396281381))

