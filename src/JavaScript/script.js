// variables
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const items = document.getElementsByClassName("item");
const backUp = document.getElementById("back-up");
const themBtn = document.getElementById("them-btn");

const home = document.getElementById("home");
const homeLink = document.getElementById("home-link");
const footer = document.getElementById("footer");

const homeItem = document.getElementById("home-item");
const aboutItem = document.getElementById("about-item");
const servicesItem = document.getElementById("services-item");
const contactItem = document.getElementById("contact-item");

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const servicesSection = document.getElementById("services");
const contactSection = document.getElementById("contact");
const appSection = document.getElementById("app");
const supportSection = document.getElementById("support");

const homeToAbout =
  homeSection.scrollHeight + aboutSection.scrollHeight + supportSection.scrollHeight;
const homeToServices =
  homeSection.scrollHeight +
  aboutSection.scrollHeight +
  supportSection.scrollHeight +
  servicesSection.scrollHeight +
  appSection.scrollHeight;
// show the menu
function showMenu() {
  if (menu.className === "menu") {
    menu.className = "menu menu-action";
  } else {
    menu.className = "menu";
  }
}
menuButton.addEventListener("click", showMenu);

// hide the menu
function hideMenu() {
  menu.className = "menu";
}
main.onclick = hideMenu;
footer.onclick = hideMenu;
for (let i = 0; i < items.length; i++) {
  items[i].onclick = hideMenu;
}

// add the navbar shadow
function addNavShadow() {
  if (window.scrollY > 16) {
    nav.classList.add("shadow-sm");
  } else {
    nav.classList.remove("shadow-sm");
  }
}
window.addEventListener("scroll", addNavShadow);

// show scroll up btn
function showScrollUpBtn() {
  if (window.scrollY > 1000) {
    backUp.style.display = "block";
  } else {
    backUp.style.display = "none";
  }
}
window.addEventListener("scroll", showScrollUpBtn);

home.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    homeLink.classList.add("show");
  }
});

// check user default them
function checkThem() {
  if (localStorage?.getItem("savedThem") === undefined) {
    localStorage.setItem("savedThem", "");
  }

  if (localStorage.getItem("savedThem") === "dark") {
    changeThem();
    themBtn.setAttribute("checked", "checked");
  } else {
    themBtn.removeAttribute("checked", "checked");
  }
}
checkThem();

// change user them
function changeThem() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("savedThem", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("savedThem", "dark");
  }
}
themBtn.addEventListener("click", changeThem);

// add the item token to current section of navbar item
window.addEventListener("scroll", function () {
  if (this.scrollY < homeSection.scrollHeight - 10) {
    homeItem.classList.add("show");
    aboutItem.classList.remove("show");
    servicesItem.classList.remove("show");
    contactItem.classList.remove("show");
  } else if (this.scrollY < homeToAbout - 10) {
    homeItem.classList.remove("show");
    aboutItem.classList.add("show");
    servicesItem.classList.remove("show");
    contactItem.classList.remove("show");
  } else if (this.scrollY < homeToServices - 10) {
    homeItem.classList.remove("show");
    aboutItem.classList.remove("show");
    servicesItem.classList.add("show");
    contactItem.classList.remove("show");
  } else {
    homeItem.classList.remove("show");
    aboutItem.classList.remove("show");
    servicesItem.classList.remove("show");
    contactItem.classList.add("show");
  }
});

homeItem.boxElemStyles
