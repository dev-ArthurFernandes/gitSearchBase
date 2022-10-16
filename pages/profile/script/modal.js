function modal(){
    
    const body = document.querySelector('body')
    
    const section = document.createElement('section')

    const div     = document.createElement('div')
    const h2      = document.createElement('h2')
    const p       = document.createElement('p')
    const span    = document.createElement('span')
    const button  = document.createElement('button')

    section.classList = 'modal'
    
    h2.innerText = 'Desculpa!'
    p.innerText = 'Parece que esse repositório não demonstração...'

    button.innerText = 'Entendi'

    button.addEventListener('click', () => {
        section.remove()
    })


    span.appendChild(button)
    div.append(h2,p,span)
    section.appendChild(div)
    body.appendChild(section)

}