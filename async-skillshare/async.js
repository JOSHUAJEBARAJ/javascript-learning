
// async word used to return the promise
const print = async function(){

    return "Hello"
  }
  
  async function bye(){
  
    return "bye"
  }
  
  // function with function literal
  print()
  .then(val => console.log(val))
  
  // ordinary function 
  bye()
  .then(val => console.log(val))