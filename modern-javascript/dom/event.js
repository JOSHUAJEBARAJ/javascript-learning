// button events

const button = document.querySelector('button')

// we can pass the event 
button.addEventListener('click',(e)=>{

console.log(e)
console.log("Button clicked")
})

// items

const todos = document.querySelectorAll('li')

// we should add the addEventListener to the each node not the nodelist

todos.forEach( todo =>{
todo.addEventListener('click',(e)=>{


  console.log(e.target)
  e.target.style.textDecoration='line-through';


})
  
}


)