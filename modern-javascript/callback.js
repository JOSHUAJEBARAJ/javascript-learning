// callback function and for each
// Similar to the other function but passing the function as the parametr
// pass and call 
const myfunc = (callback) =>{

    var value=10
    // calling the function 
      callback(value)
    }
    
    // pass 
    
    myfunc(function(value){
    
      console.log(value)
    })
    
    // for each 
    
    let names = ['joshua','jebaraj']
    
    names.forEach(function(name){
    
      console.log(name)
    })
    
    // for eeach method with the 
    
    names.forEach((name,index)=> console.log(index,name))
    
    // creating the seperate function and passing it 
    
    let logName = (name,index)=> console.log(index,name)
    
    names.forEach(logName)