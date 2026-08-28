function validateLogin(username, password){
    if (username === "admin" && password === "admin123"){
        return true;
    }
    return false;
}

console.log(validateLogin("admin34", "admin123"));