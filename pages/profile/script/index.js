function loadProfile(){
    const user = JSON.parse(localStorage.getItem('user'))
    gitUser(user)
    userRepository(user)
}

loadProfile()