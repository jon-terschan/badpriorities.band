const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open', !isExpanded);

    const icon = navToggle.querySelector('.nav-toggle-icon');
    if (icon) {
      icon.textContent = isExpanded ? '☰' : '✕';
    }
  });
}

console.log("Band site loaded");