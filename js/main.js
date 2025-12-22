// js/main.js
// Mobile menu toggle - v1.4

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  // start closed (mobile)
  menu.style.display = "none";

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const isHidden = (menu.style.display === "none" || menu.style.display === "");
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

  // close when clicking a link
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", function () {
      menu.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "☰";
    });
  });
});