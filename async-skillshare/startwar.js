const baseUrl ="https://swapi.dev/api/people/"


function get(num){


let finalurl = baseUrl+num+"/"

console.log(finalurl)
fetch(finalurl)
.then(function(value){
 
  return value.json() // call the function 
})
.then(function(response){

  console.log(response)
})


// arrow function 

// input => output
fetch(finalurl)
  .then(response => response.json())
  .then(data => console.log(data));
}

get(1)


