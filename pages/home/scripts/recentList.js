function recentList(){
    const recentList = JSON.parse(localStorage.getItem('recentList')) || []

    const ol = document.querySelector('.recentList')
    ol.innerHTML = ''
    if(recentList.length !== 0){
        recentList.reverse().forEach(element => {
        
            const li = document.createElement('li')
            const label = document.createElement('label')
            const a = document.createElement('a')
    
            li.style = `background-image: url(${element.avatar_url});background-size: 50px;`
            label.for = 'link'
            a.id = 'link'
            a.innerText = 'Acessa este perfil'
            a.href = '/pages/profile/index.html'

            a.addEventListener('click', () => {
                localStorage.setItem('user', JSON.stringify(element.login))
            })
    
            label.appendChild(a)
            li.appendChild(label)
            ol.appendChild(li)
        });
    }else{
        ol.innerHTML = '<p>Não foi achado ninguém</p>'
    }
}