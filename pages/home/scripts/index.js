function loadHome(){
    
    recentList()
    checkInput()
    
    searchUser.value = ''

    const bnt = document.querySelector('#searchUserButton')

    bnt.disabled = true
    bnt.innerHTML = 'Ver perfil do gitHub'
    bnt.style = 'opacity: 0.5;'

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