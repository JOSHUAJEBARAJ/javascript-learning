// parent.chilren,sibling,chaining
let article = document.querySelector('article')

console.log(article.children)

// creating the array from the children
Array.from(article.children).forEach((children)=> console.log(children))

const title = document.querySelector('h2')

// parent element 
console.log(title.parentElement)
console.log(title.parentElement.parentElement.parentElement)

// sibling
console.log(title.nextSibling)