// async and await
/**
 * aysnc method returns the promise 
 * we have to use the then atleast one time to get the value from the async function
 * await makes the code wait untilt it returns the response
 */


 const getTodo = async() =>{

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data 
  }
  
  getTodo()
  .then(data => console.log(data))