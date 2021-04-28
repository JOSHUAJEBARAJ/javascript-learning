// super 

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
    
    class Admin extends User{
    
    constructor(name,level){
      super(name)
      this.level=level
    }
    // deleting the user 
      deleteuser(user){
    
    users = users.filter((u)=>{
    return user.name !== u.name
    })
    
        
      }
    }
    
    const userOne = new User('joshua')
    const userTwo = new User('jebaraj')
    const admin = new Admin('jebaraj','junior')
    
    console.log(admin)
    