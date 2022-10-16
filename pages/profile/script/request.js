const myHeaders = {
    'Content-Type': 'application/json'
  }

function gitUser(user){
    fetch(`https://api.github.com/users/${user}`,{
        method: "GET",
        headers: myHeaders
    }).then(resp => resp.json()).then(resp => {
        renderUserHeader(resp)
    })
}

function userRepository(user){
    fetch(`https://api.github.com/users/${user}/repos`,{
        method: "GET",
        headers: myHeaders
    }).then(resp => resp.json()).then(resp => {
        renderUserRepository(resp)
    })
}
