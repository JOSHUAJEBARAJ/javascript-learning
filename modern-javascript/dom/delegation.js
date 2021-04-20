
// parent 

const parent= document.querySelector('ul')

parent.addEventListener('click',(e)=>{

if (e.target.tagName === 'LI'){
  console.log(e.target)
}
})