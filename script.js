document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const channelName = document.querySelector('.channel-name');
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-section');
  
        // Remove all active states
        navItems.forEach(i => i.classList.remove('active'));
        sections.forEach(section => {
          section.classList.remove('active');
          section.style.display = 'none';
        });
  
        // Activate clicked nav + matching section
        item.classList.add('active');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
          targetSection.style.display = 'flex';
          channelName.textContent = `# ${targetId}`;
        }
      });
    });
  
    // Initial hide
    sections.forEach(section => {
      if (!section.classList.contains('active')) {
        section.style.display = 'none';
      }
    });
  });
  