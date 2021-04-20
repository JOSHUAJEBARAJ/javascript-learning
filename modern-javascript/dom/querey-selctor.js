// querySelector and querySelector all
const para = document.querySelector('p')
// select using css 
const cls = document.querySelector('.error')

console.log(para)

console.log(cls)

// querySelectorall

const paras = document.querySelectorAll('p')

console.log(paras)

// printing the other element

paras.forEach((para)=> console.log(para))