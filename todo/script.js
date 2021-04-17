
const button = document.getElementById("add");
const inputbox= document.getElementById("task")

button.addEventListener("click",add)

function add(){
    console.log(inputbox.value)

}


inputbox.addEventListener("keyup",function(e){

    if (e.code=="Enter")
    {
        add()
       // console.log("Add")
    }
})