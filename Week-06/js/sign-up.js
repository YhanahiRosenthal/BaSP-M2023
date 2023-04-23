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

var nameInput = document.getElementById("name")
var surname = document.getElementById("surname")
var email = document.getElementById("emails")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirm-password")
var dni = document.getElementById("dni")
var date = document.getElementById("date")
var phone = document.getElementById("phone")
var address = document.getElementById("address")
var locations = document.getElementById("locations")
var postalCode = document.getElementById("postal-code")

var errorName = document.getElementById('error-name')
var errorSurname = document.getElementById('error-surname')
var errorEmail = document.getElementById('error-email')
var errorPassword = document.getElementById('error-password')
var errorConfirmPassword = document.getElementById('error-confirm-password')
var errorDni = document.getElementById('error-dni')
var errorDate = document.getElementById('error-date')
var errorPhone = document.getElementById('error-phone')
var errorAddress = document.getElementById('error-address')
var errorLocation = document.getElementById('error-location')
var errorPostal = document.getElementById('error-postal')

var p = document.createElement('p')
    p.classList = 'message-error'
    p.textContent = "This field must have at least 3 characters, must not have a number or simbols"

var s = document.createElement('p')
    s.classList = 'message-error'
    s.textContent = "This field must have at least 3 characters, must not have a number or simbols"

var t = document.createElement('p')
    t.classList = 'message-error'
    t.textContent = "This field must have an allowed format. Ex: user@user.com"

var g = document.createElement('p')
    g.classList = 'message-error'
    g.textContent = "This field must have at least 8 characters with letters, numbers and simbols"

var n = document.createElement('p')
    n.classList = 'message-error'
    n.textContent = "Passwords do not match"

var d = document.createElement('p')
    d.classList = 'message-error'
    d.textContent = "This field must have at least 8 numbers, only numbers"

var m = document.createElement('p')
    m.classList = 'message-error'
    m.textContent = "This field is not complete"

var q = document.createElement('p')
    q.classList = 'message-error'
    q.textContent = "This field must have only 10 numbers. Ex: 1123324567"

var k = document.createElement('p')
    k.classList = 'message-error'
    k.textContent = "This field must have at least 5 numbers, one blank space and name of address"

var z = document.createElement('p')
    z.classList = 'message-error'
    z.textContent = "This field must have at least 3 characters"

var b = document.createElement('p')
    b.classList = 'message-error'
    b.textContent = "This field must have at least 5 numbers"


var isValidName, isValidSurname, isValidEmail, isValidPassword, isValidConfirm;
var isValidDNI, isValidDate, isValidPhone, isValidAddress, isValidLocation, isValidPostal;

function validateForm(){


    nameInput.onblur = function(){
        if (!nameInput.value.match(/^[A-Za-z\s]/) || nameInput.value.length < 3) {

            nameInput.style.border = 'solid red 1px'
            errorName.appendChild(p)
            isValidName = false
        }else{
            nameInput.style.border = 'none'
            isValidName = true
            if(p){
                errorName.removeChild(p)
            }
        }

        nameInput.onfocus = function(){
            if(p){
              errorName.removeChild(p)
            }
    }
}

    surname.onblur = function(){
        if (!surname.value.match(/^[A-Za-z\s]/) || surname.value.length < 3) {

            surname.style.border = 'solid red 1px'
            errorSurname.appendChild(s)
            isValidSurname = false
        }else{
            surname.style.border = 'none'
            isValidSurname = true
            if(s){
                errorSurname.removeChild(s)
            }
        }

        surname.onfocus = function(){
            if(s){
              errorSurname.removeChild(s)
            }
    }
}

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

        password.onfocus = function(){
            if(g){
              errorPassword.removeChild(g)
            }
    }
}

    confirmPassword.onblur = function(){
        if(password.value !== confirmPassword.value){
            confirmPassword.style.border = 'solid red 1px'
            errorConfirmPassword.appendChild(n)
            isValidConfirm = false
        }else{
            confirmPassword.style.border = 'none'
            isValidConfirm = true
                if(n){
                    errorConfirmPassword.removeChild(n)
                }
        }

        confirmPassword.onfocus = function(){
            if(n){
              errorConfirmPassword.removeChild(n)
            }
    }
}

    dni.onblur = function(){
        if (isNaN(dni.value) || dni.value.length < 7) {
                    dni.style.border = 'solid red 1px'
                    errorDni.appendChild(d)
                    isValidDNI = false
        }else{
            dni.style.border = 'none'
            isValidDNI = true
            if(d){
                errorDni.removeChild(d)
            }
        }

        dni.onfocus = function(){
            if(d){
              errorDni.removeChild(d)
            }
    }
}

    date.onblur = function(){
        if(date.value == ''){
            date.style.border = 'solid red 1px'
            errorDate.appendChild(m)
            isValidDate = false
        }else{
            date.style.border = 'none'
            isValidDate = true
                if(m){
                    errorDate.removeChild(m)
                }
        }

        date.onfocus = function(){
            if(m){
              errorDate.removeChild(m)
            }
    }
}

    phone.onblur = function(){
        if (isNaN(phone.value) || phone.value.length < 10 || phone.value.length > 10){
                phone.style.border = 'solid red 1px'
                errorPhone.appendChild(q)
                isValidPhone = false
        }else{
            phone.style.border = 'none'
            isValidPhone = true
                if(q){
                    errorPhone.removeChild(q)
                }
        }

        phone.onfocus = function(){
            if(q){
              errorPhone.removeChild(q)
            }
    }
}

    address.onblur = function(){
        if (!address.value.match(/^[a-zA-ZÁÉÍÓÚáéíóú\s]+\s\d{4,}$/)){
                address.style.border = 'solid red 1px'
                errorAddress.appendChild(k)
                isValidAddress = false
        }else{
            address.style.border = 'none'
            isValidAddress = true
                if(k){
                    errorAddress.removeChild(k)
                }
        }

        address.onfocus = function(){
            if(k){
              errorAddress.removeChild(k)
            }
    }
}

    locations.onblur = function(){
        if (!locations.value.match(/^[A-Za-z0-9]/) || locations.value.length <= 2){
                locations.style.border = 'solid red 1px'
                errorLocation.appendChild(z)
                isValidLocation = false
        }else{
            locations.style.border = 'none'
            isValidLocation = true
                if(z){
                    errorLocation.removeChild(z)
                }
        }

        locations.onfocus = function(){
            if(z){
              errorLocation.removeChild(z)
            }
    }
}

    postalCode.onblur = function(){
        if (!postalCode.value.match(/^\d{4,5}$/)){
                postalCode.style.border = 'solid red 1px'
                errorPostal.appendChild(b)
                isValidPostal = false
        }else{
            postalCode.style.border = 'none'
            isValidPostal = true
                if(b){
                    errorPostal.removeChild(b)
                }
        }

        postalCode.onfocus = function(){
            if(b){
              errorPostal.removeChild(b)
            }
    }

}}

validateForm()

var buttonSendForm = document.getElementById('button-send-form')

buttonSendForm.addEventListener('click', function(e){
    e.preventDefault()
    if(!isValidName){
        alert("The field 'Name' has an error or is not complete")
    }else if(!isValidSurname){
        alert("The field 'Surame' has an error or is not complete")
    }else if(!isValidEmail){
        alert("The field 'Email' has an error or is not complete")
    }else if(!isValidPassword){
        alert("The field 'Password' has an error or is not complete")
    }else if(!isValidConfirm){
        alert("Passwords do not match or are not complete")
    }else if(!isValidDNI){
        alert("The field 'DNI' has an error or is not complete")
    }else if(!isValidDate){
        alert("The field 'Date' is not complete")
    }else if(!isValidPhone){
        alert("The field 'Phone' has an error or is not complete")
    }else if(!isValidAddress){
        alert("The field 'Address' has an error or is not complete")
    }else if(!isValidLocation){
        alert("The field 'Location' has an error or is not complete")
    }else if(!isValidPostal){
        alert("The field 'Postal code' has an error or is not complete")
    }else if(isValidName, isValidSurname, isValidEmail, isValidPassword, isValidConfirm,
        isValidDNI, isValidDate, isValidPhone, isValidAddress, isValidLocation, isValidPostal){
            alert('Successfully sent')
            alert("YOUR DATA: " + "Name: " + nameInput.value + ", " +
            "Surname: " + surname.value + ", " +
            "Email: " + email.value + ", " +
            "Password: " + password.value + ", " +
            "DNI: " + dni.value + ", " +
            "Date: " + date.value + ", " +
            "Phone: " + phone.value + ", " +
            "Address: " + address.value + ", " +
            "Location: " + locations.value + ", " +
            "Postal code: " + postalCode.value)
    }else{
        alert('Hay campos sin completar')
    }
})


