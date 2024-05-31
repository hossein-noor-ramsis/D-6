const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const main = document.getElementById("main");
const items = document.getElementsByClassName("item");
const nav = document.getElementById("nav");

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