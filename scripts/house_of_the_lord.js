


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  
  menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});
