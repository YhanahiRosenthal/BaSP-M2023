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
