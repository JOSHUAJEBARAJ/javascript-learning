// ajax

const xhr = new XMLHttpRequest // ready state -0

const container = document.getElementById("container")


 function create(data){
     console.log(data)

    for (let i=0;i<data.length;i++){
        const newElement = document.createElement("h3")
newElement.textContent = data[i].title
container.append(newElement)
    }
 }

xhr.open("GET","https://jsonplaceholder.typicode.com/todos") // ready state-1

xhr.send() // read state -4

// function print(){
//     console.log("A")
// }



xhr.onreadystatechange = function(){
   if (xhr.readyState ===4){
       if (xhr.status ==200){
           let a = JSON.parse(xhr.responseText)
           //console.log("Test")
           
           create(a)

       }
   }
}

//console.log(xhr)


// Notes
/**
 * There are two ways 

- addEventListener
- onreadystatechange

https://stackoverflow.com/questions/34905828/xmlhttprequest-onreadystatechange-vs-addeventlistener

There are 4 state

- 0 - no set
- 1 - open
- 2 - Headers will be send preload
- 3 - loading
- 4 - done
 */