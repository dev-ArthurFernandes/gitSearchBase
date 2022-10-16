function renderUserHeader(user){


    const emailButton = document.querySelector('.emailButton')
    const changeUser = document.querySelector('.changeUser')

    const {name, bio, avatar_url, html_url} = user

    avatar.src = avatar_url
    avatar.alt = name

    userName.innerText = name
    userStack.innerText = bio

    
    emailButton.addEventListener('click', () => {
        window.location.assign(html_url)
    })
    
    changeUser.addEventListener('click', () => {
        window.location.assign('/pages/home/index.html')
    })
}