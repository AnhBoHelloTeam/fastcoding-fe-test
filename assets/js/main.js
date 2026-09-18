/**
 * MAIN.JS - Vanilla JavaScript cho các tương tác cơ bản (Pure JS, no library)
 * Phục vụ tiêu chuẩn Responsive SP & Tabs của Fastcoding
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toggle Mobile Menu trên Smartphone (SP)
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });

    // Đóng menu khi click vào 1 liên kết
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
      });
    });
  }

  // 2. Chuyển Tab ở mục Featured Property (Appartment, Vila, Land)
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Có thể lọc thêm dữ liệu hoặc hiển thị animation nếu muốn
    });
  });

  // 3. Slider Indicator ở mục Hero
  const sliderItems = document.querySelectorAll('.hero__slider-item');
  sliderItems.forEach(item => {
    item.addEventListener('click', () => {
      sliderItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
