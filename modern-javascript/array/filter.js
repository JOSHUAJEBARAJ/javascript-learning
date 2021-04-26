// filter is a clabback and non destructive ie doesnt change the orginal

const scores = [10,20,30,40,50]
// since its not destucitve we are storing it in the new array 
const pass=scores.filter((score)=>{

 return  score > 20;
})


console.log(pass)

const users = [
  {name:'Joshua',premium:true},
   {name:'Malar',premium:true},
    {name:'Jebaraj',premium:false}
]

const premiumuser = users.filter((user)=>{
  return user.premium
})

console.log(premiumuser)