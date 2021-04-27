

// get the weather 
const getWeather = async(id)=>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`
    const response = await fetch(base+query)
    const data = await response.json()
   
    return data[0]

}
// async returns the promise
const getCity = async(city)=>{

    const base ='http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(base+query)
    const data = await response.json()
    
    return data[0]
    


}


// getCity('chennai')
// .then(data=> console.log(data))
// .catch(err=> console.log(err))

// nesting the promises
// getCity('chennai')
// .then(data=> {
//     return getWeather(data.Key)
// })
// .then(data=> {
//         console.log(data)
// })
// .catch(err=> console.log(err))