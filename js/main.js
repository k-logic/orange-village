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

  // Date-based content switch (2026/3/28~)
  var switchDate = new Date(2026, 2, 28); // month is 0-indexed: 2 = March
  if (new Date() >= switchDate) {
    var priceOld = document.getElementById('price-old');
    var priceNew = document.getElementById('price-new');
    if (priceOld) priceOld.style.display = 'none';
    if (priceNew) priceNew.style.display = '';

    var newsPrice = document.getElementById('news-price-update');
    if (newsPrice) newsPrice.style.display = '';
  }

  // Scroll animation
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    // 既に画面内にある要素はすぐ表示
    fadeEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible');
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    fadeEls.forEach(function (el) {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });
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
