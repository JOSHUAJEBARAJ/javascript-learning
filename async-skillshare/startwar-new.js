const baseUrl ="https://swapi.dev/api/films/"

let data = {}

let filmname = []

async function get(){

data = await fetch(baseUrl).then(val => val.json())

// getting the title
filmname=data.results.map(obj => obj.title)
console.log(filmname)  
} 

get()
