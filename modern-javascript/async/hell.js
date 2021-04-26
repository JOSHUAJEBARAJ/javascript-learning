// nesting callback insside the call back is called call back hell
// end goal we have to call the three resources in the sequential order for example login api should be called first

const getTodos = (url,callback) =>{
    const request = new XMLHttpRequest();
    
    // open 
    request.open("GET",url)
    
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
        //console.log("Ok")
      }else{
        callback("error",undefined)
       
    
      }
      }
    })
    }
    
    // general convention is to pass the error first 
    
    console.log(1)
    console.log(2)
    
    getTodos('https://jsonplaceholder.typicode.com/todos/1',(err,data)=>{ // 1st request
    
   console.log(data)
   getTodos('https://jsonplaceholder.typicode.com/todos/2',(err,data)=>{ // 2nd request
    console.log(data)
    getTodos('https://jsonplaceholder.typicode.com/todos/3',(err,data)=>{ // 3 rd request
    console.log(data)
    
   })
   })
    }
    )
    
    console.log(3)