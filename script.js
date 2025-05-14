document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
  console.log("Hamburger clicked!");
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
