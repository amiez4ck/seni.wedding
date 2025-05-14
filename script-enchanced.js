
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Only run toggle menu if both hamburger and nav exist (sidebar context)
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      if (!navLinks.classList.contains("active")) {
        document.querySelectorAll(".submenu").forEach(function (submenu) {
          submenu.style.display = "none";
        });
      }
    });

    // Toggle all submenu (including nested)
    document.querySelectorAll(".submenu-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();

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

        const isVisible = submenu.style.display === "block";
        submenu.style.display = isVisible ? "none" : "block";

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

    // Close nav if click outside sidebar
    document.addEventListener("click", function (e) {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar && !sidebar.contains(e.target)) {
        navLinks.classList.remove("active");
        document.querySelectorAll(".submenu").forEach(function (submenu) {
          submenu.style.display = "none";
        });
      }
    });
  }
});

function showTikTok(videoId) {
  const popup = document.getElementById('tiktok-popup');
  const embed = document.getElementById('tiktok-embed');
  embed.setAttribute('data-video-id', videoId);
  embed.setAttribute('cite', `https://www.tiktok.com/@seni.wedding/video/${videoId}`);
  popup.style.display = 'flex';

  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  embed.innerHTML = '<section>Loading...</section>';
  embed.appendChild(script);
}

function closeTikTok() {
  document.getElementById('tiktok-popup').style.display = 'none';
  document.getElementById('tiktok-embed').innerHTML = '';
}
