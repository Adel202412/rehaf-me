// Mobile menu toggle - Fixed version
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) {
    console.error("Menu button or mobile menu not found");
    return;
  }

  // Initial state - make sure mobile menu is hidden
  menu.style.display = "none";
  btn.setAttribute("aria-expanded", "false");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isHidden = menu.style.display === "none";

    if (isHidden) {
      menu.style.display = "flex";
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "✕";
    } else {
      menu.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "☰";
    }
  });
});