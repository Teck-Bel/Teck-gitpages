// /js/footer.js
(function () {
  // Bepaal brand automatisch op basis van de URL
  let brand = "Teck"; // fallback

  const url = window.location.pathname.toLowerCase();

  if (url.includes("skyteck")) brand = "SkyTeck";
  else if (url.includes("aquateck")) brand = "AquaTeck";
  else if (url.includes("eduteck")) brand = "EduTeck";
  else if (url.includes("modelteck")) brand = "ModelTeck";

  // Footer inladen
  fetch("/Teck-gitpages/includes/footer.html")
    .then((response) => response.text())
    .then((html) => {
      // {brand} vervangen
      html = html.replace("{brand}", brand);

      document.getElementById("footer-placeholder").innerHTML = html;
    });
})();
