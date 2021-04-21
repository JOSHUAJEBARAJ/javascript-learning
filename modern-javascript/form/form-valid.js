// form validtion 
const form = document.querySelector('.signup')

const name = 'joshu'

const pattern = /^[a-z]{6,}$/


// live feedback

form.username.addEventListener('keyup',e=>{

 // console.log(e.target.value,form.username.value) both gives  same value 

 if (e.target.value.match(pattern)){
   console.log("pass")
   form.username.setAttribute('class','sucess')
 }
 else{
   console.log("Fal")
    form.username.setAttribute('class','error')
 }
})



// .sucess {
//   border: 2 px solid lime; 
// }

// .error {
//   border: 2 px solid red; 
// }


