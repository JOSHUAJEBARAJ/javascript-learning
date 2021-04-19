/**
 * strings
 * methods 
 * string literals
 * template string 
 */


 console.log('Hello')

 // concatenation
 
 let fname = "joshua"
 let lname = "Jebaraj"
 
 let fullname = fname+" "+lname
 
 console.log(fullname)
 
 
 // getting ccharacter
 
 console.log(fname[0])
 
 // properties
 
 console.log(fname.length)
 
 
 // methods
 
 // add the paranetheseis to the methods 
 
 console.log(fname.toUpperCase())
 
 let email = "joshua@gmail.com"
 
 let index = email.indexOf("@")
 
 console.log(index)
 
 
 // more methods
 
 let result = email.lastIndexOf("a")
 
 console.log(result)
 
 
 // template strings
 
 const Project = "SecSearch"
 const author = "Joshua"
 
 // concatenation way
 
 let output = 'The blog called ' + Project + ' Done by ' + author
 console.log(output)
 
 // template string 
 
 let ts =`The blog called ${Project} by ${author}`
 
 console.log(ts)