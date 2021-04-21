const form = document.querySelector('.signup')

form.addEventListener('submit',e=>{
e.preventDefault() // this will prevent the form from reloading 
  console.log("Hello")
  console.log(form.username.value)
})