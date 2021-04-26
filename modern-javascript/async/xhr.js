// XMLHttpRequest

const request = new XMLHttpRequest();

// open 
request.open("GET","https://jsonplaceholder.typicode.com/todos/")

// sending the request
request.send()


// event handling

request.addEventListener('readystatechange',()=>{

  //console.log(request.readyState,request)
  if (request.readyState===4){
    console.log(request.responseText)
  }
})
