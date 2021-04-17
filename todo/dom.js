

// printing the dom
//console.log(document)


// create

const newElement = document.createElement("div")
newElement.innerText = "Hello"

// adding attribute
newElement.setAttribute("class" ,"task")
// adding style
newElement.style.color = "red"

// reading
const container = document.querySelector("#container")


// events

const button = document.getElementById("add")

//button.onclick = buttonClick;

button.addEventListener("click",function(){
    console.log("Joshua")
})


window.addEventListener("resize",function(event){
    console.log(event)
})
function buttonClick(){
    console.log("Button clicked")
}


// updating
container.append(newElement)
console.log(container)