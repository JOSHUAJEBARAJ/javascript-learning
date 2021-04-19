// arrow function

const calcArea = function (raduis){

    return 3.14*raduis
  }
  
  // arrow function
  
  const calcAreaarrow = (raduis)=>{
    return 3.14*raduis
  }
  
  const circle = raduis => 3.14* raduis;
  
  let area = calcArea(10)
  console.log(area)
  
  
  let area1 = calcAreaarrow(10)
  console.log(area1)
  
  
  const greet = () => "Hello"
  
  var result=greet()
  console.log(result)