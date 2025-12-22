// Mobile menu toggle (safe, isolated)
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    const isOpen = !menu.hasAttribute("hidden");

    if (isOpen) {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    } else {
      menu.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});
