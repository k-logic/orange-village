document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu toggle
  var hamburger = document.querySelector('.hamburger');
  var navOverlay = document.querySelector('.nav-overlay');

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
    });

    navOverlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Hero slider (top page only)
  var slides = document.querySelectorAll('.hero__slide');
  if (slides.length > 1) {
    var current = 0;
    slides[0].classList.add('active');

    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // Scroll to top
  var btnTop = document.querySelector('.btn-top');
  if (btnTop) {
    btnTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
