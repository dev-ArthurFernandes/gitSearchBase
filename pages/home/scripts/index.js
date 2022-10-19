function loadHome(){
    
    recentList()
    checkInput()

    const bnt = document.querySelector('#searchUserButton')

    bnt.innerHTML = 'Ver perfil do gitHub'

    bnt.addEventListener('click', () => {
        const user = document.getElementById('searchUser').value
        notFound.innerHTML = ''
        bnt.innerHTML = ''
        bnt.append(Animation())
        checkUserExist(user)
    })

    addEventListener('keypress', () => {
       if(event.key === 'Enter'){
        const user = document.getElementById('searchUser').value
        notFound.innerHTML = ''
        bnt.innerHTML = ''
        bnt.append(Animation())
        checkUserExist(user)
       }
    })
}

loadHome()