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


email.onblur = function(){
    if (!email.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)) {

                var t = document.createElement('p')
                  t.classList = 'error-message'
                  t.textContent = "Email incorrect. This field must have an allowed format. Ex: user@user.com"
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

    var passwordValue = password.value

    function validatePassword(passwordValue){

        var letters = false
        var numbers = false

        if (passwordValue.length < 8) {
            return false
        }
        for (var i = 0; i < passwordValue.length; i++){

            var character = passwordValue.charAt(i)

            if (character >= '0' && character <= '9'){
                numbers = true

            } else if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
                letters = true
            }
        }
        return letters && numbers
    }

    if (!validatePassword(passwordValue)) {

        var g = document.createElement('p')
            g.classList = 'error-message'
            g.textContent = "Password incorrect. This field must have at least 8 characters with letters, numbers and simbols"
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

    password.onfocus = function(){
        if(g){
          errorPassword.removeChild(g)
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
    }else{
            var url = `https://api-rest-server.vercel.app/login?email=${email.value}&password=${password.value}`

            fetch(url)
                .then(res => res.json())
                .then(data => {
                  if(data.status === "success"){
                    alert(data)
                  }else{
                    alert(data.msg)
                  }
              })
              .catch((error) => console.log(error))
      }
  })

  'qwertyuio123456789'