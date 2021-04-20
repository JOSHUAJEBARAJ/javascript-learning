// object literals , overriding ,accesing dot and square , methods  and this function and function shortcut and array of object 

let user = {
    name : 'Joshua',
    age : 10,
    languages: ['Golang','javasctipt'],
    login: function(){
      console.log("User logined")
    },
    changeage: function(age){
      this.age = age 
    },
    printage(){
      console.log(this.age)
    }
  };
  
  // accesing the value
  console.log(user.name)
  
  // overriding
  user.age=20
  console.log(user.age)
  
  // accessing using [] operatord
  
  let a= "name"
  console.log(user['name'])
  console.log(user[a])
  
  // methods
  user.login()
  
  // this operator
  
  user.changeage(300)
  console.log(user.age)
  
  // calling the shorcut operator
  user.printage()


  // const blogs = [
//   {id:1,Title:"Hello GCP"},
//   {id:2,Title:"Hello go"}
// ]

// array of objects

let a = {
    name: 'Joshua',
    // storing the array of objects 
    blogs :[
    {id:1,Title:"Hello GCP"},
    {id:2,Title:"Hello go"}
  ],
  
  // 
  logBlog(){
    this.blogs.forEach((blog)=>{
      console.log(blog.Title)})
  }
  }
  
  a.logBlog()
  
  