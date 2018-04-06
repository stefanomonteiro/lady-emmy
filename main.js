const navbar = document.querySelector(".navbar");
const navbar_height = navbar.offsetHeight;
const navbarLogo = document.querySelector(".navbar__logo");
const navbarItem = document.querySelectorAll(".navbar__item");
const navbarSocialIcons = document.querySelectorAll(".navbar__social-icons");

document.addEventListener("scroll", function(e) {
  let scrollpos = window.scrollY;

  if (scrollpos > navbar_height) {
    navbar.classList.add("navbar--sticky");
    navbarLogo.classList.add("navbar__logo--sticky");
    navbarItem.forEach(element => {
      element.classList.add("navbar__item--sticky");
    });
    navbarSocialIcons.forEach(element => {
      element.classList.add("navbar__social-icons--sticky");
    });
  }
  if (scrollpos < 10) {
    navbar.classList.remove("navbar--sticky");
    navbarLogo.classList.remove("navbar__logo--sticky");
    navbarItem.forEach(element => {
      element.classList.remove("navbar__item--sticky");
    });
    navbarSocialIcons.forEach(element => {
      element.classList.remove("navbar__social-icons--sticky");
    });
  }

  //   console.log("Old: " + oldScrollpos + " | scrollpos: " + scrollpos);
});
