// break and continue , switch , scope

const a = [1,2,3,4,5,6,7,8]

for (let i=0;i<a.length;i++){

  if (a[i]%2!=0){

   continue
  }
  console.log(a[i])
}

// switch uses strict 

const grade = 'A'

switch(grade){

  case 'A':
  console.log("Grade a")
  break
  case 'B':
  console.log("Grade B")
  break 
  default:
  console.log("Not in grade")

}

// scope

let no =10

if (true){
  let  no =20

  console.log("Inside scope "+no)
}

console.log("Outside "+no)

// var keyword change the original value 

var number =10

if (true){
  var  number =20

  console.log("Inside scope "+no)
}

console.log("Outside "+no)