
// prototype constructor name should be caps 

function User(name){

    this.name= name 
  
    // method inside constructor
    this.login = function(){
      console.log("Helllo")
    }
  } 
  
  
      
      const userOne = new User('joshua')
      const userTwo = new User('jebaraj')
      
      console.log(userOne)
      console.log(userTwo.login())
      // new keyword
      /**create the object
       * It binds this object
       * call the constructor function
       */