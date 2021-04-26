// const data = JSON.parse(request.responseText)  used to convert the json
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
          // converting the data into Javascript
          const data = JSON.parse(request.responseText) // it will return the object
        callback(undefined,data)
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
      // retun the length
    console.log(data.length)
    }
    })
    
    console.log(3)