document.addEventListener("DOMContentLoaded", () => {

  
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (hamburger && sideMenu && overlay) {

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      sideMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
    });

  }

  // navbar scroll effect

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // scroll progress bar

  const progress = document.querySelector(".progress");

  window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;

    if (progress) {
      progress.style.width = scrolled + "%";
    }

  });

  // load articles from JSON

  const container = document.querySelector(".article-grid");

  if (container) {

    fetch("/assets/data/articles.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load JSON");
        }
        return response.json();
      })
      .then(articles => {

        articles.forEach(article => {

          const card = document.createElement("article");
          card.classList.add("article-card");

          card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.link}">Read Article →</a>
          `;

          container.appendChild(card);

        });
