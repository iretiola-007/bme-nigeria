const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

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


   // AUTO LOAD ARTICLES FROM JSON

async function loadArticles(){

  const container = document.querySelector(".article-grid");

  if(!container) return;

  try{

    const response = await fetch("assets/data/articles.json");

    const articles = await response.json();

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

  } catch(error){

    console.error("Error loading articles:", error);

  }

}

loadArticles();


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});

const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled = (scrollTop / height) * 100;

if(progress){
progress.style.width = scrolled + "%";
}

});

const container = document.getElementById("articlesContainer");

fetch("assets/data/articles.json")
  .then(res => res.json())
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
  });