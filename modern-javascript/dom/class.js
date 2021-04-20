// add and remove class

const para = document.querySelector('p')

para.classList.add('sucess')
console.log(para.classList)

// para.classList.remove('sucess')
// console.log(para.classList)

const paras = document.querySelectorAll('p')

// adding the class 
paras.forEach(para=>{
  if (para.textContent.includes('Sucess')){
    para.classList.add('sucess')

  }
  if (para.textContent.includes('failure')){
    para.classList.add('failure')

  }
})
