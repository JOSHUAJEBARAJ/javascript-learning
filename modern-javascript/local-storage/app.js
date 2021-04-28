// setting the value

localStorage.setItem('name','joshua')
localStorage.setItem('age',10)


// getting the value

const name = localStorage.getItem('name')
console.log(name)

// updating the value

localStorage.setItem('age',100)


// deleting the item

localStorage.removeItem('name')

// removing the all item

localStorage.clear()