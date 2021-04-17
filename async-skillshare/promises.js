// callback hell 
let asynfunction = function(){
    return new Promise(function(resolve,reject){
  
  setTimeout(function(){
  
    resolve("Async")},2000)
  })
  
  
    }
  
  
  let asynfunction2 = function(){
    return new Promise(function(resolve,reject){
  
  setTimeout(function(){
  
    resolve("Async -2")},2000)
  })
  
  
    }
  
  
  asynfunction().then(function(val)
  {
    console.log(val)
  
    return asynfunction2()
  }) // chaining the callback
  .then(function (val){
  
    console.log(val)
  })
  
  // main 
  console.log("Main")