// getting the dom

const clock = document.querySelector('.clock')


// getting the time

const tick = () =>{

    const now = new Date()
    const min = now.getMinutes()
    const sec = now.getSeconds()
    const hr = now.getHours()
    //console.log(sec)

    const html = `
    <span>${hr}</span>:
    <span>${min}</span>:
    <span>${sec}</span>`

    clock.innerHTML = html

}

setInterval(tick,1000)
