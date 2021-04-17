// get 

fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())
.then (response => console.log(response[0]))

const todo = {
userId:1,
id:1,
title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}

// post 
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(todo) // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .then (data => console.log(data))
  .catch(reject => console.log("Unable to create the function"))
 
