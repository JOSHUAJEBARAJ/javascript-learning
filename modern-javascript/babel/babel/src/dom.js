// files to change dom


const body = document.querySelector('body')


export const stylebody = ()=>{

    body.style.background = 'green'
}

const addTitle = (text) => {

    const title = document.createElement('h1')
    title.textContent = text
    body.appendChild(title)
}


addTitle('Hello')