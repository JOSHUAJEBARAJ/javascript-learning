const name = ['golang','java']

// setting the data
localStorage.setItem('todos',JSON.stringify(name))

const stored = localStorage.getItem('todos')

// converting into the array
console.log(JSON.parse(stored))