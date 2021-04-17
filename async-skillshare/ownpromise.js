// variable with promise
// promise takes callback --> two function
let a = new Promise(function(resolve,reject){

    //   setTimeout(function(){
    // resolve("Resolved")
    //   },4000)
    
       setTimeout(function(){
    reject("Rejected")
      },4000)
    })
    
    a.then(function(val){
    
      console.log(val)
    },function(reject){
    
      console.log(reject)
    })
    
    // function with promise
    
    function promisefunction(){
    
      return new Promise(function(resolve,reject){
    
        setTimeout(function(){
          resolve("Hello")
        },1000)
      })
    }
    
    promisefunction()
    .then(function(val){
    
    console.log(val)
    })