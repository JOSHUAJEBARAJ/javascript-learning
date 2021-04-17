let fname = function(){

    return new Promise(function(resolve,reject){
  
      setTimeout(function(){
        resolve("Joshua")
      },1000)
    })
  }
  
  let lname = function(){
  
    return new Promise(function(resolve,reject){
  
      setTimeout(function(){
        resolve("Jebaraj")
      },3000)
    })
  }
  
  
  Promise.all([fname(),lname()])
  .then(function(msg)
  {
    console.log(msg)
  })
  .catch(msg => console.log(msg))
  
  // promise all will go to catch if one of the promise return reject
  let blname = function(){
  
    return new Promise(function(resolve,reject){
  
      setTimeout(function(){
        reject("Jebaraj")
      },3000)
    })
  }
  
  Promise.all([fname(),blname()])
  .then(function(msg)
  {
    console.log(msg)
  })
  .catch(msg => console.log(msg))