const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        console.log(pwFields)
        pwFields.forEach(password => {
            if(password.type === "password")
            {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})


// validation

function loginValidation(){
    var email = document.login.email;
    var password = document.login.password;
    var loginPage = document.login.submit;

    if(email.value.length <= 0) {
        alert("please enter your Email properly");
        email.focus();
        return false;
    }if(password.value.length <= 8) {
        alert("please enter your password");
        password.focus();
        return false;
    }
    if(loginPage.value = true){
        alert("Login successfully");
        window.location.href = "/menu.html"
    }
    return false;
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;

// change page to signup page when click on the signup 

function movetoSignup(){
    window.location.href = "signup.html"
}

function movetoForget(){
    window.location.href = "forget password.html"
}
