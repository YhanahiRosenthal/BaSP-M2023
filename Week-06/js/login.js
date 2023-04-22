var navbar = document.querySelector(".container-navbar");
var menuBurger = document.querySelector(".icon-burger");

menuBurger.addEventListener("click", function () {
  navbar.style.display = "flex";
});

window.addEventListener("click",function(event) {
    if (event.target == navbar) {
      navbar.style.display = "none";
    }
  });

var email = document.getElementById("email")
var password = document.getElementById("password")

var errorEmail = document.getElementById('error-email')
var errorPassword = document.getElementById('error-password')

var isValidEmail, isValidPassword;

var t = document.createElement('p')
    t.classList = 'error-message'
    t.textContent = "Email incorrect. This field must have an allowed format. Ex: user@user.com"

var g = document.createElement('p')
    g.classList = 'error-message'
    g.textContent = "Password incorrect. This field must have at least 8 characters with letters, numbers and simbols"



email.onblur = function(){
    if (!email.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)) {
                email.style.border = 'solid red 1px'
                errorEmail.appendChild(t)
                isValidEmail = false
    }else{

        email.style.border = 'none'
        isValidEmail = true
        if(t){
            errorEmail.removeChild(t)
        }
    }

    email.onfocus = function(){
      if(t){
        errorEmail.removeChild(t)
      }
    }
}

password.onblur = function(){
    if (!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/ || password.value.length > 7)) {
                password.style.border = 'solid red 1px'
                errorPassword.appendChild(g)
                isValidPassword = false
    }else{
        password.style.border = 'none'
        isValidPassword = true
        if(g){
            errorPassword.removeChild(g)
        }
    }

    email.onfocus = function(){
      if(g){
        errorEmail.removeChild(g)
      }
    }
}

var buttonSendRequest = document.getElementById('button-send-request')

buttonSendRequest.addEventListener('click', function(e){
    e.preventDefault()
    if(!isValidEmail){
      alert('Email incorrect. This field must have an allowed format. Ex: user@user.com')
    }else if(!isValidPassword){
      alert('Password incorrect. This field must have at least 8 characters with letters, numbers and simbols')
    }else if(isValidEmail, isValidPassword){
            alert('Successfully sent')
            alert("Email: " + email.value + ", " + "Password: " + password.value)
    }else{
        alert('Hay campos sin completar')
    }
})