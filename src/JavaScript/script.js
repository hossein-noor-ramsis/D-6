const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const main = document.getElementById("main");
const items = document.getElementsByClassName("item");
const nav = document.getElementById("nav");
const backUp = document.getElementById("back-up");
const themBtn = document.getElementById("them-btn");
const home = document.getElementById("home");
const homeLink = document.getElementById("home-link");
const footer = document.getElementById("footer");

function menuFunction() {
  if (menu.className === "menu") {
    menu.className = "menu menu-action";
  } else {
    menu.className = "menu";
  }
}
menuButton.addEventListener("click", menuFunction);

function hideMenu() {
  menu.className = "menu";
}
main.onclick = hideMenu;
footer.onclick = hideMenu;
for (let i = 0; i < items.length; i++) {
  items[i].onclick = hideMenu;
}

function addNavShadow() {
  if (window.scrollY > 16) {
    nav.classList.add("shadow-sm");
  } else {
    nav.classList.remove("shadow-sm");
  }
}
window.addEventListener("scroll", addNavShadow)

function addBackUpBtn() {
  if (window.scrollY > 1000) {
    backUp.style.display = "block";
  } else {
    backUp.style.display = "none";
  }
}
window.addEventListener("scroll", addBackUpBtn)

home.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    homeLink.classList.add("show")
  }
})
// them js function
function changeTheme() {
  console.log(8)
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}
themBtn.addEventListener("click", changeTheme)