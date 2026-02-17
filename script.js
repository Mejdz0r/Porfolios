const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

const translation = {
  pl:{
    'about': 'O mnie',
    'abilitys': 'Umiejętności',
    'certificates': 'Certyfikaty',
    'projects': 'Projekty',
    'contact': 'Kontakt',
    'lang_btn': 'Język ▼',
    'about-header:': 'O mnie',
    'about-text': 'Jestem początkującym frontend developerem, pasjonuję się tworzeniem stron internetowych i chcę rozwijać swoje umiejętności w praktycznych projektach. Lubię uczyć się nowych technologii i narzędzi, aby tworzyć nowoczesne i responsywne strony. Wciąż poszerzam swoją wiedzę w zakresie web developmentu m.in poprzez kursy online i samodzielne projekty. Również studiuję infomatykę stosowaną na Politechnice Bydgoskiej.',
    'abilitys-header': 'Umiejętności',
    'abilitys-1': 'HTML5',
    'abilitys-2': 'CSS3',
    'abilitys-3': 'JavaScript',
    'abilitys-4': 'Responsive Web Design',
    'abilitys-5': 'Git / GitHub',
    'abilitys-6': 'SQL',
    'abilitys-7': 'PHP',
    'abilitys-8': 'Prompt Engineering',
    'certificates-header': 'Certyfikaty',
    'projects-header': 'Projekty',
    'projects-1-header': 'Projekt 1 - Strona portfolio',
    'projects-1-text': 'Strona pokazująca moje projekty, umiejętności i dane kontaktowe.',    
    'contact-header': 'Kontakt',
    'email': 'Email:',
    'linkedin': 'LinkedIn:',
    'footer': '© 2025 Kacper Majorkiewicz',
    'gotolinkedin': 'Przejdź do Linkedina'
  },
  en:{
    'about': 'About',
    'abilitys': 'Skills',
    'certificates': 'Certificates',
    'projects': 'Projects',
    'contact': 'Contact',
    'lang_btn': 'Language ▼',
    'about-header:': 'About Me',
    'about-text': 'I am a beginner frontend developer, passionate about creating websites and eager to develop my skills through practical projects. I enjoy learning new technologies and tools to create modern and responsive websites. I am continuously expanding my knowledge in web development through online courses and self-directed projects. I am also studying applied computer science at the Bydgoszcz University of Technology.',
    'abilitys-header': 'Skills',
    'abilitys-1': 'HTML5',
    'abilitys-2': 'CSS3',
    'abilitys-3': 'JavaScript',
    'abilitys-4': 'Responsive Web Design',
    'abilitys-5': 'Git / GitHub',
    'abilitys-6': 'SQL',
    'abilitys-7': 'PHP',
    'abilitys-8': 'Prompt Engineering',
    'certificates-header': 'Certificates',
    'projects-header': 'Projects',
    'projects-1-header': 'Project 1 - Portfolio Website',
    'projects-1-text': 'A website showcasing my projects, skills, and contact information.',
    'contact-header': 'Contact',
    'email': 'Email:',
    'linkedin': 'LinkedIn:',
    'footer': '© 2025 Kacper Majorkiewicz',
    'gotolinkedin': 'Go to LinkedIn'

  }
}
const langButtons = document.querySelectorAll('.lang-menu a');

langButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = btn.getAttribute('data-lang'); 
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      
      if (translation[lang][key]) {
        element.innerText = translation[lang][key];
      }
    });
  });
});
