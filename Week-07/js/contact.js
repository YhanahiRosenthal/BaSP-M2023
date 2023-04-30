var nameInput = document.getElementById("name")
var surname = document.getElementById("surname")
var email = document.getElementById("emails")
var reason = document.getElementById("reason")
var messages = document.getElementById("message")

var errorName = document.getElementById('error-name')
var errorSurname = document.getElementById('error-surname')
var errorEmail = document.getElementById('error-email')
var errorMessage = document.getElementById('error-message')

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
    g.textContent = "This field must have at least 20 characters"

var isValidName, isValidSurname, isValidEmail, isValidMessage

nameInput.onblur = function(){
    if (!isNaN(surname.value)|| nameInput.value.length < 3) {

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
    if (!isNaN(surname.value) || surname.value.length < 3) {

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

messages.onblur = function(){
    if (!isNaN(messages.value) || messages.value.length < 20) {

        messages.style.border = 'solid red 1px'
        errorMessage.appendChild(g)
        isValidMessage = false
    }else{
        messages.style.border = 'none'
        isValidMessage = true
        if(g){
            errorMessage.removeChild(g)
        }
    }

    messages.onfocus = function(){
        if(g){
          errorMessage.removeChild(g)
        }
    }
}

var buttonSendMessageContact = document.getElementById('button-send-message-contact')

buttonSendMessageContact.addEventListener('click', function(e){
    e.preventDefault()
    if(!isValidName){
        alert("The field 'Name' has an error or is not complete")
    }else if(!isValidSurname){
        alert("The field 'Surname' has an error or is not complete")
    }else if(!isValidEmail){
        alert('Email incorrect. This field must have an allowed format. Ex: user@user.com')
    }else if(!isValidMessage){
        alert("The field 'Message' has an error or is not complete")
    }else if(isValidName, isValidSurname, isValidEmail, isValidMessage){
            alert('Successfully sent')
            alert("Name: " + nameInput.value + ", " + "Surname: " + surname.value + ", " +"Email: " + email.value + ", " + "Reason: " + reason.value + ", " + "Message: " + messages.value)
    }else{
        alert('Hay campos sin completar')
    }
})

