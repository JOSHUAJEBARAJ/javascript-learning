// promise js 

/**
 * Function should return the  promise 
 * Promise constructor accept two callback Function
 * then method has the two callback function  the second method will be called during the reject operation 
 */

 const doSomething = ()=>{

    return new Promise((resolve,reject)=>{
      //resolve("Data")
      reject("error")
    })
  }
  
  doSomething().then((data)=>{
    console.log(data)
  // 
  
  }).catch((error)=>{
    console.log(error)
  });