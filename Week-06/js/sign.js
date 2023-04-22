var navbar = document.querySelector(".container-navbar");
var menuBurger = document.querySelector(".icon-burger");

menuBurger.addEventListener("click", function () {
  navbar.style.display = "flex";
});

window.addEventListener("click",function(e) {
    if (e.target == navbar) {
      navbar.style.display = "none";
    }
  });

var errorName = document.getElementById('error-name')

var p = document.createElement('p')
    p.classList = 'message-error'
    p.textContent = "This field must have at least 3 characters, must not have a number or simbols"


    var nameInput = document.getElementById("name")
    // var surname = document.getElementById("surname")
    // var dni = document.getElementById("dni")
    // var date = document.getElementById("date")
    // var phone = document.getElementById("phone")
    // var address = document.getElementById("address")
    // var location = document.getElementById("location")
    // var postalCode = document.getElementById("postal-code")
    // var email = document.getElementById("email")
    // var password = document.getElementById("password")
    // var confirmPassword = document.getElementById("confirm-password")