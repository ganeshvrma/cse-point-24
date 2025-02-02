
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarLinks = document.querySelector(".navbar-links");

    menuIcon.addEventListener("click", function() {
      navbarLinks.classList.toggle("show");
    });
  });
