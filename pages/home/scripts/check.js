const myHeaders = {
    'Content-Type': 'application/json'
  }

function checkUserExist(user){
    fetch(`https://api.github.com/users/${user}`,{
        method: "GET",
        headers: myHeaders
    })
    .then((resp) => {
        if(resp.status !== 200){
            notFound.innerHTML = `<input id="notFoundUser" type="text" value="Usuário não encontrado" readonly/>`
            loadHome()
        }else{
            return resp.json()
        }
    })
    .then(resp => {
        localStorage.setItem('user', JSON.stringify(user))

        let recentList = JSON.parse(localStorage.getItem('recentList')) || []
        
        let userObject = {
            id: resp.id,
            name: resp.name,
            avatar_url: resp.avatar_url,
            bio: resp.bio,
            html_url: resp.html_url,
            login: resp.login,
        }

        if(recentList.findIndex(Element => Element.name === resp.name) >= 0){
            recentList.splice(recentList.findIndex(Element => Element.id === resp.id),1)
            recentList = [...recentList, userObject]
        }else{
            if(recentList.length === 3){
             recentList.splice(0,1)
             recentList = [...recentList, userObject]   
            }else{
                recentList = [...recentList, userObject]
            }
        }


        localStorage.setItem('recentList', JSON.stringify(recentList))
        
        window.location.assign('/pages/profile/index.html')
    })
}

function checkInput(){

    if(searchUser.value !== ''){
        searchUserButton.disabled = false
        searchUserButton.style = 'opacity: 1; cursor: pointer;'
    }else{
        searchUserButton.disabled = true
        searchUserButton.style = 'opacity: 0.5;'
    }
    
}
