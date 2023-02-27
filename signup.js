//password view eye

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
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

// option selection

function populate(s1,s2)
        {
            var s1 = document.getElementById(s1);
            var s2 = document.getElementById(s2);

            s2.innerHTML = "";

            if(s1.value == "andhrapradesh")
            {
                var optionArray = ['vizag|Vizag','vijayawada|Vijayawada','kakinada|Kakinada','guntur|Guntur','kurnool|Kurnool','anantapur|Anantapur','chittor|Chittor','nellore|Nellore','tirupati|Tirupati','eluru|Eluru'];
            }
            else if(s1.value == "telangana")
            {
                var optionArray = ['hyderabd|Hyderabad','warangal|Warangal','bhongiri|Bhongiri','karimnagar|Karimnagar','nalgonda|Nalgonda','nizamabad|Nizamabad','khammam|Khammam'];
            }
            else if(s1.value == "karnataka")
            {
                var optionArray = ['bengaluru|Bengaluru','yadagiri|Yadagiri','ballari|Ballari','udupi|Udupi','bidar|Bidar','kolar|Kolar','raichur|Raichur','mangaluru|Mangaluru','hassan|Hassan']
            }
            else if(s1.value == "tamilnadu")
            {
                var optionArray = ['chennai|Chennai','madurai|Madurai','coimbatore|Coimbatore','salem|Salem','thanjavur|Thanjavur','kanyakumari|Kanyakumari','kanchipuram|Kanchipuram','kumbakonam|kumbakonam','tiruppur|Tiruppur']
            }
            else if(s1.value == "maharashtra")
            {
                var optionArray = ['mumbai|Mumbai','pune|Pune','nagpur|Nagpur','aurangabad|Aurangabad','nashik|Nashik','kolhapur|Kolhapur','solapur|Solapur','dhule|Dhule','latur|Latur','jalna|Jalna','wardha|Wardha','panvel|Panvel`']
            }
            else if(s1.value == "uttarakhand")
            {
                var optionArray = ['dehradun|Dehradun','nainital|Nainital','mussoorie|Mussoorie','haldwani|Haldwani','ramnagar|Ramnagar','roorkee|Roorkee','new tehri|New Tehri','srinagar|Srinagar','chamba|Chamba','landour|Landour','badrinath|Badrinath']
            }
            else if(s1.value == "punjab")
            {
                var optionArray = ['amritsar|Amritsar','hoshiarpur|Hoshiarpur','patiala|Patiala','jalandhar|Jalandhar','moga|Moga','firozpur|Firozpur','pathankot|Pathankot','abohar|Abohar','rajpura|Rajpura','sunam|Sunam','sangrur|Sangrur','chandigarh|Chandigarh','zirakpur|Zirakpur']
            }

            for(var option in optionArray)
            {
                var pair = optionArray[option].split("|");
                var newoption = document.createElement("option");

                newoption.value = pair[0];
                newoption.innerHTML = pair[1];
                s2.options.add(newoption)
            }
        }

// text can only numerics

function restrictAlphabets(e){
    var x = e.which || e.keycode;
    if((x >= 48 && x <= 57))
        return true;
    else
        return false;
}

// validation

function validate() {
    var firstName = document.signup_page.firstname;
    var lastName = document.signup_page.lastname;
    var Email = document.signup_page.email;
    var Password = document.signup_page.password;
    var conformPassword = document.signup_page.conformpassword;
    var mobileNumber = document.signup_page.mobilenumber;
    var Address1 = document.signup_page.address1;
    var Address2 = document.signup_page.address2;
    var Select1 = document.signup_page.select1;
    var Select2 = document.signup_page.select2;
    var pinCode = document.signup_page.pincode;
    var signup = document.signup_page.signup;

    if(firstName.value.length <= 0){
        alert("First Name is required");
        firstName.focus();
        return false;
    }
    if(lastName.value.length <= 0){
        alert("Last Name is required");
        lastName.focus();
        return false;
    }
    if(Email.value.length <= 0){
        alert("Email id is required");
        Email.focus();
        return false;
    }
    if(Password.value.length <= 8){
        alert("Password should be greater than 8 characters");
        Password.focus();
        return false;
    }
    if(Password.value != conformPassword.value){
        alert("password doesn't match");
        return false;
    }
    
    if(mobileNumber.value.length != 10){
        alert("Mobile number should be 10 digits");
        mobileNumber.focus();
        return false;
    }
    if(Address1.value.length <= 0){
        alert("Address is required");
        Address1.focus();
        return false;
    }
    if(Address2.value.length <= 0){
        alert("Enter Street name / Land Mark");
        Address2.focus();
        return false;
    }
    if(Select1.value == ""){
        alert("Select your state");
        Select1.focus();
        return false;
    }
    if(Select2.value == ""){
        alert("Select your city");
        Select2.focus();
        return false;
    }
    if(pinCode.value.length != 6){
        alert("Please enter correct pin code");
        pinCode.focus();
        return false;
    }
    if(signup.value = true){
        alert("your details are submitted successfully");
        window.location.href = "menu.html"
    }
    return false;
}

// loader

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;

// change page to login page when click on the login 

function movetoLogin(){
    window.location.href = "index.html";
}
