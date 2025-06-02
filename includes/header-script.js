document.addEventListener("DOMContentLoaded", function () {
  fetch("/Teck-gitpages/includes/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Zet de pagina-titel in de header (als opgegeven in <body data-title="...">)
      const title = document.body.dataset.title;
      if (title) {
        const titleElement = document.getElementById("page-title");
        if (titleElement) {
          titleElement.textContent = title;
        }
      }
    });
});
