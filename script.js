// Simple scroll animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

console.log("🐻 Bear Rage Coin Loaded");
