// child

const child = document.querySelectorAll('li')

child.forEach(child=>{

child.addEventListener('click',(e)=>{

  console.log(e.target)
  e.stopPropagation() // this will prevent the parent event calling 
})

})

// parent 

const parent= document.querySelector('ul')

parent.addEventListener('click',()=>{

  console.log("Parent")
})