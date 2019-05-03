let showConteht = (e) =>{
    e.preventDefault();
    console.log("show")
};

let showConteht1 =(e) =>{
    e.preventDefault();
    console.log("showkjkljk;j")
};

function sw(){
    document.getElementById("jsItem_box")
};


let buttonShowConten = document.getElementById("show_content");
buttonShowConten.addEventListener("click", sw);

let submitHandler =(e)=>{
    e.preventDefault();

    const email = document.getElementById("check_email").value;
    let emailErr = [];
    const redEmail = document.getElementById("error_email");

    const password = document.getElementById("check_password").value;
    let passErr = [];
    const redPass = document.getElementById("error_password");


// email
    if (!isSubmitDog(email)){
        emailErr.push(" You forgot '@' or '.' ")
    }
    if (!isWord(email)){
        emailErr.push(" Please enter a-z A-Z, ")
    }

    if (emailErr.length > 0) {
        redEmail.innerHTML = emailErr;
        redEmail. style.color = "red"
    } else{
        redEmail.innerHTML = "all right"
        redEmail. style.color = "green"
    }

    // password
    if (! isLowerWord(password)){
        passErr.push(" Please enter a-z")
    }
    if (! isUpperWord(password)){
        passErr.push(" Please enter A-Z")
    }
    if (! isNumber(password)){
        passErr.push(" Please enter 0-9");
    }

    if (passErr.length > 0) {
        redPass.innerHTML = passErr;
        redPass. style.color = "red"
    } else{
        redPass.innerHTML = "all right";
        redPass. style.color = "green"
    }

    if (passErr.length == 0 && emailErr.length == 0){
        buttonShowConten.addEventListener("click",  showConteht);
        buttonShowConten.style.backgroundColor = "green";
        buttonShowConten.addEventListener("click",  showConteht);
    }

};



document.addEventListener("submit", submitHandler, false);
let buttonSub = document.getElementById("button_submit").addEventListener("submit",  submitHandler);



// FUNCTIOUN TEST

// test email //
function isSubmitDog(pass){
    return /[\.]/.test(pass) && /[\@]/.test(pass);
}
function isWord(pass){
    return /[a-z]/i.test(pass);
}

// test password //
function isLowerWord(pass) {
    return /[a-z]/.test(pass)
}
function isUpperWord(pass) {
    return /[A-Z]/.test(pass)
}
function isNumber(pass) {
    return /[1-9]/.test(pass)
}