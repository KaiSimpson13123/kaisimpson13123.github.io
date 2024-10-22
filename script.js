document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll-btn');
  
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectsSection = document.querySelector('#projects');
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  