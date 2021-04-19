// function declaration function expression hoisting parmater, default paramter , return value 

function greet(){

    console.log("Hello")
  
  }
  
  greet()
  
  // function expresssion have the ; at the end 
  
  const speak = function(){
    console.log("Speak")
  };
  
  speak()
  
  // function hoisting 
  // function greet(){
  
  //   console.log("Hello")
  
  // }
  
  
  // function parameter
  function sayName(name="Joshua"){
  
   let result = `Good morning ${name}`
   console.log(result)
  
  
  }
  
  sayName("Jebaraj")
  // using default value 
  sayName()
  
  // return 
  const area = function(radius)
  {
    return radius*3.14
  }
  
  let answer = area(10)
  
  console.log(answer)