
// async word used to return the promise
const print = function(){

    return new Promise(function(resolve,reject){
    
      setTimeout(function(){
    resolve("Hello")
      },1000)
    })
     
    }
    
    // await can be used only inside the async function
    async function bye(){
    // this cause the function to wait 
      let p1= await print()
      console.log(p1)
    }
    
    // function with function literal
    bye()