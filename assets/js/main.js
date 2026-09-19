document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
    });

    // Đóng menu khi click vào 1 liên kết
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
      });
    });
  }

  // Stepper tabs
  const stepperNavs = document.querySelectorAll('.hero__stepper-nav, .about-property__stepper');
  stepperNavs.forEach(nav => {
    const tabs = nav.querySelectorAll('.stepper-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('stepper-tab--active'));
        tab.classList.add('stepper-tab--active');
      });
    });
  });

  // Property tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
