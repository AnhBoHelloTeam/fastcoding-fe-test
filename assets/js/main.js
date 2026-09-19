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

  // Featured Property tabs
  const propertyTabs = document.querySelectorAll('.featured__tab, .tab-btn');
  propertyTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      propertyTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Testimonial nav buttons
  const testimonialBtns = document.querySelectorAll('.testimonials__nav-btn');
  testimonialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isNext = btn.classList.contains('testimonials__nav-btn--next');
      const frontBox = document.querySelector('.testimonials__image-front');
      if (frontBox) {
        frontBox.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        frontBox.style.opacity = '0.7';
        frontBox.style.transform = isNext ? 'translateX(4px)' : 'translateX(-4px)';
        setTimeout(() => {
          frontBox.style.opacity = '1';
          frontBox.style.transform = 'none';
        }, 200);
      }
    });
  });
});
