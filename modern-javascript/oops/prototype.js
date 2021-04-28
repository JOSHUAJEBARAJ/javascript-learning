
// prototype model  

// when we define method inside the class javascript put it inside the prototype

// every object has prototype , methods are stored in the prototype

// object have the proto properties which points to the protoype so that we dont have to store for each object 

function User(name){

    this.name= name 
  
    // method inside constructor
    
  } 
  
  // prototype
  
  User.prototype.login = function(){
  
    console.log("Login")
  }
  
  
      
      const userOne = new User('joshua')
      const userTwo = new User('jebaraj')
      
      console.log(userOne)
      console.log(userTwo.login())
      