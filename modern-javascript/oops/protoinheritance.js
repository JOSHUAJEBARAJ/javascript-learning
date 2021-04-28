
// prototype model   inheritance

function User(name){

    this.name= name 
  
    
    
  } 
  
  User.prototype.login = function(){
  
    console.log("Login")
  }
  
  
  
  function Admin(name){
  
  
  // similar to the super
  User.call(this,name)
  
  }
  
  // adding to the proto to the proto of the admin 
  Admin.prototype = Object.create(User.prototype)
      
      const userOne = new User('joshua')
      const userTwo = new User('jebaraj')
  
      const admin = new Admin('joshua')
      
      
      console.log(admin.name)
      admin.login()
      