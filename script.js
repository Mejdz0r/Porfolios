const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
