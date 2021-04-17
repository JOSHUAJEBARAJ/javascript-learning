// 1 . basic function 
// let logFunction = function(){

//   console.log("Logcalled")
// }

// // the log function is called after 1 s
// setTimeout(logFunction,2000)

// 2. anoynmous function
// // anoynmous
// setTimeout(function(){

//   console.log("Anonymous function")
// },1000)

// 3. Evvent functio 
// the common pattern is used on events

var button = document.querySelector("#btn")

button.addEventListener("click",function(e){

  console.log("Button Clicked")
})