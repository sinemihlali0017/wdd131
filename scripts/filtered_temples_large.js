// scripts-large.js
document.addEventListener("DOMContentLoaded", () => {
  // Only run for large screens
  if (window.innerWidth >= 768) {
    const templeCards = document.querySelectorAll(".temple-card");

    // Example: add hover animation for desktop
    templeCards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.boxShadow = "0 12px 20px rgba(0,0,0,0.25)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      });
    });

    // Optional: fix nav menu always visible for large screens
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("show"); // ensure desktop menu is always visible
  }
});
