document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// Toggle all submenu by click
document.querySelectorAll(".submenu-toggle").forEach(function (toggleBtn) {
  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const submenu = this.nextElementSibling;

    // Elak toggle submenu jika submenu tidak wujud
    if (!submenu || !submenu.classList.contains("submenu")) return;

    // Toggle submenu semasa sahaja
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
  });
});
