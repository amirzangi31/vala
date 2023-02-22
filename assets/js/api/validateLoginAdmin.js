const validateLogin = async() => {
    const user = window.localStorage.getItem("user-admin");
    if(!user){
        window.location.replace("http://127.0.0.1:5500/valaclinick/admin/sign-up-in.html")
    }else {
        return;
    }
}



export {validateLogin}