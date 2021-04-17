
// function with promise

function promisefunction(){

    return new Promise(function(resolve,reject){
  
      setTimeout(function(){
        resolve("Hello")
      },1000)
    })
  }
  
  
    promisefunction()
    .then(val => console.log(val))
    .finally(()=>console.log("finally"))