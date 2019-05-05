



let buttonShowConten = document.getElementById("show_content");
let buttonSubmit = document.getElementById("button_submit");
//
//
//
// buttonSubmit.addEventListener("click", sw, wrong_submit);

let submitHandler =(e)=>{
    e.preventDefault();

    const email = document.getElementById("check_email").value;
    let emailErr = [];
    const redEmail = document.getElementById("error_email");

    const password = document.getElementById("check_password").value;
    let passErr = [];
    const redPass = document.getElementById("error_password");

    //Ex
    if (!isSubmitDog(email)){
        emailErr.push(" You forgot '@' or '.' ")
    }
    if (!isWord(email)){
        emailErr.push(" Please enter a-z A-Z, ")
    }

    if (! isLowerWord(password)){
        passErr.push(" Please enter a-z")
    }
    if (! isUpperWord(password)){
        passErr.push(" Please enter A-Z")
    }
    if (! isNumber(password)){
        passErr.push(" Please enter 0-9");
    }

    // email
    switch (emailErr.length > 0) {
        case true : redEmail.innerHTML = emailErr; redEmail. style.color = "red"; break;
        case false : redEmail.innerHTML = "all right", redEmail. style.color = "green"
    }

    // password
    switch (passErr.length > 0) {
        case true : redPass.innerHTML = passErr; redPass. style.color = "red"; break;
        case false : redPass.innerHTML = "all right"; redPass. style.color = "green"
    }

    // check true login & password
    switch (passErr.length == 0 && emailErr.length == 0) {
        case true : loginFalse(buttonShowConten, buttonSubmit);
            buttonSubmit.addEventListener("click",  wrong(buttonSubmit), false);
            buttonShowConten.innerHTML = "Push button to see all range";
            break;
        case false : loginTrue(buttonShowConten, buttonSubmit);
            buttonShowConten.innerHTML = "You will see main content after registration";
    }

    if (passErr.length != 0 && emailErr.length != 0){
        buttonSubmit.addEventListener("submit",  wrong_submit(buttonSubmit), false);
    }

};


document.addEventListener("submit", submitHandler, false);

//media
function wrong(buttonSubmit) {
    buttonSubmit.style.animationName = "wrong";
    console.log("wrong")
}


function wrong_submit(buttonSubmit) {
    buttonSubmit.addEventListener("click", (e)=>{
        buttonSubmit.style.animationName = "submit_wrong";

        setTimeout(function () {
            buttonSubmit.style.animationName = "wrong";
        }, 500);
        console.log(",")
    })
}


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

//fun add / remove class

function loginTrue(buttonShowConten, buttonSubmit) {
    buttonShowConten.classList.remove("button_submit_untouch");
    buttonSubmit.classList.remove("button_submit_touch");

    buttonShowConten.classList.add("button_submit_touch");
    buttonSubmit.classList.add("button_submit_untouch");
}
function loginFalse(buttonShowConten, buttonSubmit) {
    buttonShowConten.classList.remove("button_submit_touch");
    buttonSubmit.classList.remove("button_submit_untouch");

    buttonShowConten.classList.add("button_submit_untouch");
    buttonSubmit.classList.add("button_submit_touch");
}



// let x = getComputedStyle(document.getElementById("button_submit"));
// let y = getComputedStyle(document.getElementById("show_content"));
// console.log(y.width)
// console.log(x.width)
// if (x.width == "100px"){
//     console.log("100px")
// }
