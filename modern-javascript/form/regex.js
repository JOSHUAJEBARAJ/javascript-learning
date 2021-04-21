/**
 * patterns starts with //
 * [a-z][A-Z] - alphabets
 * [0-9] - numbers
 * {}-  specifies the count {6}= 6 characters {6,} = 6 to n  {6,10} = 6 to 10
 */

 const name = 'joshua'

 const pattern = /^[a-z]{6,}$/
 
 
 
 let result = pattern.test(name)
 
 console.log(result)
 
 // methods on input return the index if its false it will result negative
 let result2 = name.search(pattern)
 
 
 console.log(result2)
 
 
 
 