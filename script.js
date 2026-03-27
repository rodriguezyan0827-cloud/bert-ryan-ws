

const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
const THRESHOLD = 8; // px — ignore tiny jitter

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  if (current <= 0) {
    // Always show at the very top
    navbar.classList.remove('hidden');
  } else if (current > lastScrollY + THRESHOLD) {
    // Scrolling DOWN — hide navbar
    navbar.classList.add('hidden');
  } else if (current < lastScrollY - THRESHOLD) {
    // Scrolling UP — show navbar
    navbar.classList.remove('hidden');
  }


  /* ---------- SCROLL REVEAL ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Small delay so the transition feels intentional
        setTimeout(() => entry.target.classList.add('visible'), 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
  lastScrollY = current;
}, { passive: true });