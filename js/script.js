// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// list menu on click
document.querySelector("#list-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// close list menu by click outside the box
const listMenu = document.querySelector("#list-menu");

document.addEventListener("click", function (e) {
  if (!listMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
