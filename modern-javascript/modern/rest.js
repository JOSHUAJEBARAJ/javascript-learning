// rest is smiliar to the vardiac parmater


const sum = (...nums)=>{

    console.log(nums)
  }
  
  
  const result = sum(1,2,3,4)
  
  
  // spread  opposite to the rest 
  
  
  const people = ['joshua','jebaraj']
  
  const newPeople = ['Joshua',...people]
  
  console.log(newPeople)
  
  console.log(...people)
  
  // object copy 
  
  const person ={name: 'joshua',age:10}
  
  // copy the object not the reference 
  const newPerson = {...person}
  
  console.log(newPerson)