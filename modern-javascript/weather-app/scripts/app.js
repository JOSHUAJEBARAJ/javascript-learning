const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')

// update the icon and image
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const updateUI = (data) =>{
    // const cityDets = data.cityDets;
    // const weatherDets = data.weatherDets

    // destructing

    const {cityDets,weatherDets} = data 
    console.log(weatherDets)

    const html = 
    `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weatherDets.WeatherText}</div>
    <div class="display-4 my-4">
        <span> ${weatherDets.Temperature.Metric.Value} </span>
        <span> &deg;c</span>`

        details.innerHTML=html
// update image
const iconSrc = `img/icons/${weatherDets.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);
let timeSrc=null
if (weatherDets.IsDayTime){
    timeSrc= 'img/day.svg'
}else{
    timeSrc= 'img/night.svg'
}

time.setAttribute('src',timeSrc)
        // remove the d-nown

        if(card.classList.contains('d-none')){
            card.classList.remove('d-none')
        }

}


// update ciy

const updateCity = async(city)=>{
    //console.log(city)

    const cityDets = await getCity(city)
    
    const weatherDets = await getWeather(cityDets.Key)

    // returining using the short hand
    return{cityDets ,weatherDets}



}
cityForm.addEventListener('submit',(e)=>{

    // prevent default action
    e.preventDefault();

    //
    const city = cityForm.city.value.trim()
    
    // resetting form 
    cityForm.reset()

    // updateCity(city)
    // .then(data =>{ console.log(data)})
    // .catch(err => {console.log(err)})

    updateCity(city)
    .then(data =>{ updateUI(data)})
    .catch(err => {console.log(err)})
})