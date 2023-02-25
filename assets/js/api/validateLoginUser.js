const getUserLocal = async() => {
    const user = window.localStorage.getItem("user");   
    console.log(user)    
    if(!user){
        window.location.replace("http://127.0.0.1:5500/valaclinick/sign-up.html")
    }else {
        return;
    }
}

export {getUserLocal}