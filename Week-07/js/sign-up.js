var navbar = document.querySelector(".container-navbar");
var menuBurger = document.querySelector(".icon-burger");

menuBurger.addEventListener("click", function () {
  navbar.style.display = "flex";
});

window.addEventListener("click", function (e) {
  if (e.target == navbar) {
    navbar.style.display = "none";
  }
});

var nameInput = document.getElementById("name");
var surname = document.getElementById("surname");
var email = document.getElementById("emails");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
var dni = document.getElementById("dni");
var date = document.getElementById("date");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var locations = document.getElementById("locations");
var postalCode = document.getElementById("postal-code");

var errorName = document.getElementById("error-name");
var errorSurname = document.getElementById("error-surname");
var errorEmail = document.getElementById("error-email");
var errorPassword = document.getElementById("error-password");
var errorConfirmPassword = document.getElementById("error-confirm-password");
var errorDni = document.getElementById("error-dni");
var errorDate = document.getElementById("error-date");
var errorPhone = document.getElementById("error-phone");
var errorAddress = document.getElementById("error-address");
var errorLocation = document.getElementById("error-location");
var errorPostal = document.getElementById("error-postal");

var isValidName, isValidSurname, isValidEmail, isValidPassword, isValidConfirm;

var isValidDNI,
  isValidDate,
  isValidPhone,
  isValidAddress,
  isValidLocation,
  isValidPostal;

let arrayInput = [
  date,
  address,
  locations,
  email,
  dni,
  postalCode,
  nameInput,
  password,
  surname,
  confirmPassword,
  phone,
];

let arrayKeys = [
  "date",
  "address",
  "location",
  "email",
  "dni",
  "Postal code",
  "name",
  "password",
  "surname",
  "confirmPassword",
  "phone",
];

function localTrue() {
  window.addEventListener("load", () => {
    if (localStorage.length > 0) {
      for (let i = 0; i < arrayInput.length; i++) {
        arrayInput[i].focus();
        arrayInput[i].value = JSON.parse(localStorage.getItem(arrayKeys[i]));
      }
    }
  });
}

function validateForm() {
  localTrue();

  nameInput.onblur = function () {
    if (!isNaN(nameInput.value) || nameInput.value.length < 3) {
      var p = document.createElement("p");
      p.classList = "message-error";
      p.textContent =
        "This field must have at least 3 characters, must not have a number or simbols";
      nameInput.style.border = "solid red 1px";
      errorName.appendChild(p);
      isValidName = false;
    } else {
      nameInput.style.border = "none";
      isValidName = true;
      if (p) {
        errorName.removeChild(p);
      }
    }

    nameInput.onfocus = function () {
      if (p) {
        errorName.removeChild(p);
      }
    };
  };

  surname.onblur = function () {
    if (!isNaN(surname.value) || surname.value.length < 3) {
      var s = document.createElement("p");
      s.classList = "message-error";
      s.textContent =
        "This field must have at least 3 characters, must not have a number or simbols";
      surname.style.border = "solid red 1px";
      errorSurname.appendChild(s);
      isValidSurname = false;
    } else {
      surname.style.border = "none";
      isValidSurname = true;
      if (s) {
        errorSurname.removeChild(s);
      }
    }

    surname.onfocus = function () {
      if (s) {
        errorSurname.removeChild(s);
      }
    };
  };

  email.onblur = function () {
    if (!email.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)) {
      var t = document.createElement("p");
      t.classList = "message-error";
      t.textContent =
        "This field must have an allowed format. Ex: user@user.com";
      email.style.border = "solid red 1px";
      errorEmail.appendChild(t);
      isValidEmail = false;
    } else {
      email.style.border = "none";
      isValidEmail = true;
      if (t) {
        errorEmail.removeChild(t);
      }
    }

    email.onfocus = function () {
      if (t) {
        errorEmail.removeChild(t);
      }
    };
  };

  password.onblur = function () {
    var passwordValue = password.value;

    function validatePassword(passwordValue) {
      var letters = false;
      var numbers = false;

      if (passwordValue.length < 8) {
        return false;
      }
      for (var i = 0; i < passwordValue.length; i++) {
        var character = passwordValue.charAt(i);

        if (character >= "0" && character <= "9") {
          numbers = true;
        } else if (
          (character >= "a" && character <= "z") ||
          (character >= "A" && character <= "Z")
        ) {
          letters = true;
        }
      }

      return letters && numbers;
    }

    if (!validatePassword(passwordValue)) {
      var g = document.createElement("p");
      g.classList = "message-error";
      g.textContent =
        "This field must have at least 8 characters with letters, numbers and simbols";
      password.style.border = "solid red 1px";
      errorPassword.appendChild(g);
      isValidPassword = false;
    } else {
      password.style.border = "none";
      isValidPassword = true;
      if (g) {
        errorPassword.removeChild(g);
      }
    }

    password.onfocus = function () {
      if (g) {
        errorPassword.removeChild(g);
      }
    };
  };
}

confirmPassword.onblur = function () {
  if (password.value !== confirmPassword.value) {
    var n = document.createElement("p");
    n.classList = "message-error";
    n.textContent = "Passwords do not match";
    confirmPassword.style.border = "solid red 1px";
    errorConfirmPassword.appendChild(n);
    isValidConfirm = false;
  } else {
    confirmPassword.style.border = "none";
    isValidConfirm = true;
    if (n) {
      errorConfirmPassword.removeChild(n);
    }
  }

  confirmPassword.onfocus = function () {
    if (n) {
      errorConfirmPassword.removeChild(n);
    }
  };
};

dni.onblur = function () {
  if (isNaN(dni.value) || dni.value.length < 7) {
    var d = document.createElement("p");
    d.classList = "message-error";
    d.textContent = "This field must have at least 8 numbers, only numbers";
    dni.style.border = "solid red 1px";
    errorDni.appendChild(d);
    isValidDNI = false;
  } else {
    dni.style.border = "none";
    isValidDNI = true;
    if (d) {
      errorDni.removeChild(d);
    }
  }

  dni.onfocus = function () {
    if (d) {
      errorDni.removeChild(d);
    }
  };
};

date.onblur = function () {
  if (date.value == "") {
    var m = document.createElement("p");
    m.classList = "message-error";
    m.textContent = "This field is not complete";
    date.style.border = "solid red 1px";
    errorDate.appendChild(m);
    isValidDate = false;
  } else {
    date.style.border = "none";
    isValidDate = true;
    if (m) {
      errorDate.removeChild(m);
    }
  }

  date.onfocus = function () {
    if (m) {
      errorDate.removeChild(m);
    }
  };
};

phone.onblur = function () {
  if (
    isNaN(phone.value) ||
    phone.value.length < 10 ||
    phone.value.length > 10
  ) {
    var q = document.createElement("p");
    q.classList = "message-error";
    q.textContent = "This field must have only 10 numbers. Ex: 1123324567";
    phone.style.border = "solid red 1px";
    errorPhone.appendChild(q);
    isValidPhone = false;
  } else {
    phone.style.border = "none";
    isValidPhone = true;
    if (q) {
      errorPhone.removeChild(q);
    }
  }

  phone.onfocus = function () {
    if (q) {
      errorPhone.removeChild(q);
    }
  };
};

address.onblur = function () {
  var addressValue = address.value;

  function validateAddress(addressValue) {
    var words = addressValue.split(" ");

    if (addressValue == "") {
      return true;
    }

    if (words.length < 2) {
      return true;
    }

    var lastWord = words[words.length - 1];

    if (isNaN(lastWord)) {
      return true;
    }

    if (lastWord == "") {
      return true;
    }

    for (var i = 0; i < words.length - 1; i++) {
      if (!isNaN(words[i])) {
        return true;
      }
    }

    if (lastWord.length <= 0 || lastWord.length > 3) {
      return false;
    }

    return true;
  }

  if (validateAddress(addressValue)) {
    var k = document.createElement("p");
    k.classList = "message-error";
    k.textContent =
      "This field must have at least 5 numbers, one blank space and name of address";
    address.style.border = "solid red 1px";
    errorAddress.appendChild(k);
    isValidAddress = false;
  } else {
    address.style.border = "none";
    isValidAddress = true;
    if (k) {
      errorAddress.removeChild(k);
    }
  }

  address.onfocus = function () {
    if (k) {
      errorAddress.removeChild(k);
    }
  };
};

locations.onblur = function () {
  if (locations.value.length <= 2) {
    var z = document.createElement("p");
    z.classList = "message-error";
    z.textContent = "This field must have at least 3 characters";
    locations.style.border = "solid red 1px";
    errorLocation.appendChild(z);
    isValidLocation = false;
  } else {
    locations.style.border = "none";
    isValidLocation = true;
    if (z) {
      errorLocation.removeChild(z);
    }
  }

  locations.onfocus = function () {
    if (z) {
      errorLocation.removeChild(z);
    }
  };
};

postalCode.onblur = function () {
  if (
    isNaN(postalCode.value) ||
    postalCode.value.length < 4 ||
    postalCode.value.length > 5
  ) {
    var b = document.createElement("p");
    b.classList = "message-error";
    b.textContent = "This field must have at least 5 numbers";
    postalCode.style.border = "solid red 1px";
    errorPostal.appendChild(b);
    isValidPostal = false;
  } else {
    postalCode.style.border = "none";
    isValidPostal = true;
    if (b) {
      errorPostal.removeChild(b);
    }
  }

  postalCode.onfocus = function () {
    if (b) {
      errorPostal.removeChild(b);
    }
  };
};

validateForm();

var buttonSendForm = document.getElementById("button-send-form");

buttonSendForm.addEventListener("click", function (e) {
  e.preventDefault();

  var newDate = new Date(date.value);
  var day = (newDate.getDate() + 1).toString().padStart(2, "0");
  var month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  var year = newDate.getFullYear();
  let dateParam = month + "/" + day + "/" + year;

  let url =
    "https://api-rest-server.vercel.app/signup" +
    "?name=" +
    nameInput.value +
    "&lastName=" +
    surname.value +
    "&dni=" +
    dni.value +
    "&dob=" +
    dateParam +
    "&phone=" +
    phone.value +
    "&address=" +
    address.value +
    "&city=" +
    locations.value +
    "&zip=" +
    postalCode.value +
    "&email=" +
    email.value +
    "&password=" +
    password.value;

  let containerModal = document.getElementById("container-modal");
  let close = document.getElementById("close");

  close.addEventListener("click", () => {
    containerModal.style.display = "none";
  });

  let imgModal = document.getElementById("image-modal");
  let text = document.getElementById("content-text");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        containerModal.style.display = "flex";
        imgModal.setAttribute("src", "../../assets/images/success.png");
        text.innerHTML =
          "<p>¡" +
          data.msg +
          "!</p>" +
          "<p>name: " +
          nameInput.value +
          "</p>" +
          "<p>lastName: " +
          surname.value +
          "</p>" +
          "<p>dni: " +
          dni.value +
          "</p>" +
          "<p>dob: " +
          dateParam +
          "</p>" +
          "<p>phone: " +
          phone.value +
          "</p>" +
          "<p>address: " +
          address.value +
          "</p>" +
          "<p>city: " +
          locations.value +
          "</p>" +
          "<p>zip: " +
          postalCode.value +
          "</p>" +
          "<p>email: " +
          email.value +
          "</p>" +
          "<p>password: " +
          password.value +
          "</p>";
        localStorage.setItem("name", JSON.stringify(nameInput.value));
        localStorage.setItem("surname", JSON.stringify(surname.value));
        localStorage.setItem("email", JSON.stringify(email.value));
        localStorage.setItem("password", JSON.stringify(password.value));
        localStorage.setItem(
          "confirmPassword",
          JSON.stringify(confirmPassword.value)
        );
        localStorage.setItem("dni", JSON.stringify(dni.value));
        localStorage.setItem("date", JSON.stringify(date.value));
        localStorage.setItem("phone", JSON.stringify(phone.value));
        localStorage.setItem("address", JSON.stringify(address.value));
        localStorage.setItem("location", JSON.stringify(locations.value));
        localStorage.setItem("Postal code", JSON.stringify(postalCode.value));
      } else {
        containerModal.style.display = "flex";
        let error = "";
        data.errors.forEach((e) => {
          error += e.msg + "\n";
        });
        throw new Error(error);
      }
    })
    .catch((error) => {
      imgModal.setAttribute("src", "../../assets/images/error.png");
      text.innerHTML = "<label>" +
      error +
      "</label>";
    });
});
