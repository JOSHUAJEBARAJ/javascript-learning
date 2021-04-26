

const getTodos = (url,callback) =>{
    return new Promise ((resolve,reject)=>{
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
        resolve(data)
        //console.log("Ok")
      }else{
        reject("error")
       
    
      }
      }
    })
    }

)
}

getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data)=>{
    console.log("Promise resolved 1",data)
 return getTodos('https://jsonplaceholder.typicode.com/todos/2')
  
  }).then((data)=>{

    console.log("Promise resolved 2",data)
  })
  
  .catch((error)=>{
    console.log(error)
  });

