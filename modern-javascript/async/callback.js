// callback function takes another function as argument
const getTodos = (callback) =>{
    const request = new XMLHttpRequest();
    
    // open 
    request.open("GET","https://jsonplaceholder.typicode.com/todos/")
    
    // sending the request
    request.send()
    
    
    // event handling
    
    request.addEventListener('readystatechange',()=>{
    
      //console.log(request.readyState,request)
      if (request.readyState===4){
        if (request.status === 200){
        callback(undefined,request.responseText)
      }else{
        callback("error",undefined)
    
      }
      }
    })
    }
    
    // general convention is to pass the error first 
    
    console.log(1)
    console.log(2)
    
    getTodos((err,data)=>{
    
    if (err){
    console.log(err)
    }
    else{
    console.log(data)
    }
    })
    
    console.log(3)