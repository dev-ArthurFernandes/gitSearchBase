function renderUserRepository(array){

    const repositoryList = document.querySelector(".repositoryList")

    array.forEach(element => {
        
        const {name, description, html_url, homepage} = element


        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const p  = document.createElement('p')
        const spanButton = document.createElement('span')
        const bnt1 = document.createElement('button')
        const bnt2 = document.createElement('button')

        
        li.classList = 'card'
        h2.id        = 'projectTitle'
        p.id         = 'projectBio'
        spanButton.classList = 'buttonSpan'
        bnt1.id      = 'repositoryButton'
        bnt2.id      = 'demoButton'
        

        h2.innerText = name
        p.innerText = description
        bnt1.innerText = 'Repositório'
        bnt2.innerText = 'Demo'

        bnt1.addEventListener('click', () => {
            window.location.assign(html_url)
        })
        bnt2.addEventListener('click', () => {
            if(homepage){
                window.location.assign(homepage)
            }else{
                modal()
            }
        })
        
        spanButton.append(bnt1, bnt2)
        li.append(h2,p,spanButton)
        repositoryList.append(li)

    });
}