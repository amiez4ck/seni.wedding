
document.addEventListener("DOMContentLoaded", function () {
  // Toggle main menu
  document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");

    if (!navLinks.classList.contains("active")) {
      document.querySelectorAll(".submenu").forEach(function (submenu) {
        submenu.style.display = "none";
      });
    }
  });

  // Handle all submenu toggles, including nested
  document.querySelectorAll(".submenu-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      // Find the closest submenu UL (next or deeper sibling)
      let submenu = null;
      let sibling = this.nextElementSibling;
      while (sibling) {
        if (sibling.tagName === "UL" && sibling.classList.contains("submenu")) {
          submenu = sibling;
          break;
        }
        sibling = sibling.nextElementSibling;
      }

      if (!submenu) return;

      // Toggle current submenu
      const isVisible = submenu.style.display === "block";
      submenu.style.display = isVisible ? "none" : "block";

      // Close other submenus at the same parent level
      const parent = this.closest("ul");
      if (parent) {
        parent.querySelectorAll(":scope > li > .submenu").forEach(function (siblingMenu) {
          if (siblingMenu !== submenu) {
            siblingMenu.style.display = "none";
          }
        });
      }
    });
  });

  // Close menu if clicking outside
  document.addEventListener("click", function (e) {
    const sidebar = document.querySelector(".sidebar");
    const nav = document.getElementById("nav-links");
    if (!sidebar.contains(e.target)) {
      nav.classList.remove("active");
      document.querySelectorAll(".submenu").forEach(function (submenu) {
        submenu.style.display = "none";
      });
    }
  });
});

function showTikTok(videoId) {
  const popup = document.getElementById('tiktok-popup');
  const embed = document.getElementById('tiktok-embed');
  embed.setAttribute('data-video-id', videoId);
  embed.setAttribute('cite', `https://www.tiktok.com/@seni.wedding/video/${videoId}`);
  popup.style.display = 'flex';

  // Insert script tag to load TikTok widget
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  embed.innerHTML = '<section>Loading...</section>'; // Reset
  embed.appendChild(script);
}

function closeTikTok() {
  document.getElementById('tiktok-popup').style.display = 'none';
  document.getElementById('tiktok-embed').innerHTML = '';
}
