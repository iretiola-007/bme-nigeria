// ---------- Typewriter Animation on Scroll ----------

const headings = document.querySelectorAll(".typewriter-heading");

function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";
  element.dataset.typed = "false";
  element.classList.add("cursor-blink");

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.remove("cursor-blink");
      element.dataset.typed = "true";
    }
  }
  type();
}

// Trigger typing when heading is in viewport
const headingObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting && el.dataset.typed !== "true") {
        typeWriter(el, el.textContent);
      }
    });
  },
  { threshold: 0.5 }
);

headings.forEach(heading => headingObserver.observe(heading));

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