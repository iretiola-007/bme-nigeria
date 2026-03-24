    
    // ---------- Scroll Animations for Sections ----------
    
    const sections = document.querySelectorAll("section");
    
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // ---------- Smooth scroll for navbar links ----------
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const offset = 90; // navbar height
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      });
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
  
 // ---------- Auto Table of Contents ----------

document.addEventListener("DOMContentLoaded", () => {

  const tocContainer = document.querySelector(".toc");
  const headings = document.querySelectorAll("main h2, main h3");

  if (!tocContainer || headings.length === 0) return;

  const list = document.createElement("ul");

  headings.forEach((heading, index) => {

    const id = "section-" + index;
    heading.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = heading.textContent;
    a.href = "#" + id;

    if (heading.tagName === "H3") {
      li.style.marginLeft = "15px";
      li.style.fontSize = "0.9rem";
    }

    li.appendChild(a);
    list.appendChild(li);
  });

  tocContainer.appendChild(list);

});

document.addEventListener("DOMContentLoaded", () => {

const article = document.querySelector("main");
const readingTimeElement = document.querySelector("#reading-time");

if(!article || !readingTimeElement) return;

const text = article.innerText;

const words = text.trim().split(/\s+/).length;

const wordsPerMinute = 200;

const minutes = Math.ceil(words / wordsPerMinute);

readingTimeElement.textContent = minutes + " min read";

});
  
  
  // toc toggle
/* document.addEventListener("DOMContentLoaded", function () {

  const tocToggle = document.getElementById("tocToggle");
  const toc = document.querySelector(".toc");

  if (!tocToggle || !toc) return;

  tocToggle.addEventListener("click", () => {
    toc.classList.toggle("active");
  });

}); */
  
  document.addEventListener("DOMContentLoaded", function () {

  const tocToggle = document.getElementById("tocToggle");
  const toc = document.querySelector(".toc");

  if (!tocToggle || !toc) return;

  tocToggle.addEventListener("click", () => {
    toc.classList.toggle("active");
  });

    
});

const sections = document.querySelectorAll('section');
const tocLinks = document.querySelectorAll('.toc a');

function updateTOC() {
  let scrollPosition = window.scrollY + 100; // adjust offset if needed

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    const tocLink = document.querySelector(`.toc a[href="#${id}"]`);

    if (scrollPosition >= top && scrollPosition < bottom) {
      tocLinks.forEach(link => link.classList.remove('current'));
      tocLink.classList.add('current');
    }
  });
}

window.addEventListener('scroll', updateTOC);
window.addEventListener('load', updateTOC);

const sections = document.querySelectorAll('section');
const tocLinks = document.querySelectorAll('.toc a');

function updateTOC() {
  let scrollPosition = window.scrollY + 100; // adjust offset if needed

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    const tocLink = document.querySelector(`.toc a[href="#${id}"]`);

    if (scrollPosition >= top && scrollPosition < bottom) {
      tocLinks.forEach(link => link.classList.remove('current'));
      tocLink.classList.add('current');
    }
  });
}

window.addEventListener('scroll', updateTOC);
window.addEventListener('load', updateTOC);