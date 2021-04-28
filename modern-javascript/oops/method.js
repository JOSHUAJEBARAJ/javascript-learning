
// methods

class User {

    constructor(username){
    this.name = username 
    
    }
    login(){
    
      console.log(this.name+" Login ")
      return this 
    }
    
    logout(){
    
      console.log(this.name+" Logout ")
      return this 
    }
    }
    
    const userOne = new User('joshua')
    const userTwo = new User('jebaraj')
    
    userOne.login()
    userTwo.logout()
    
    // method chaining
    
    // by deault the method return the undefined to chain we have to return  this in method  
    userOne.login().logout()