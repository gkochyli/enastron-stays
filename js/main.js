/* =============================================
   ENASTRON STAYS — Main JavaScript
   Mobile nav toggle, smooth scroll, fade-in
   ============================================= */

(function () {
  'use strict';

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Hero Carousel ---
  var heroSlides = document.querySelectorAll('.hero__slide');

  if (heroSlides.length > 1) {
    var currentSlide = 0;

    setInterval(function () {
      heroSlides[currentSlide].classList.remove('is-active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('is-active');
    }, 6000);
  }

  // --- Fade-In on Scroll ---
  var fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    fadeElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // --- Reviews Carousel Auto-Rotate ---
  var reviewsGrids = document.querySelectorAll('.reviews__grid');

  reviewsGrids.forEach(function (grid) {
    var interval = 4000;
    var timer = null;
    var paused = false;

    // --- Build dots indicator ---
    var cards = grid.querySelectorAll('.review-card');
    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'reviews__dots';
    for (var d = 0; d < cards.length; d++) {
      var dot = document.createElement('button');
      dot.className = 'reviews__dot';
      dot.setAttribute('aria-label', 'Go to review ' + (d + 1));
      dot.dataset.index = d;
      if (d === 0) dot.classList.add('is-active');
      dotsWrap.appendChild(dot);
    }
    grid.parentNode.insertBefore(dotsWrap, grid.nextSibling);

    var dots = dotsWrap.querySelectorAll('.reviews__dot');

    function updateDots() {
      var cardW = getCardWidth();
      if (!cardW) return;
      var active = Math.round(grid.scrollLeft / cardW);
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === active);
      });
    }

    // Click a dot to jump
    dotsWrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.reviews__dot');
      if (!btn) return;
      var idx = parseInt(btn.dataset.index, 10);
      grid.scrollTo({ left: idx * getCardWidth(), behavior: 'smooth' });
    });

    // Update dots on scroll
    var scrollTimeout;
    grid.addEventListener('scroll', function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateDots, 50);
    }, { passive: true });

    function getCardWidth() {
      var card = grid.querySelector('.review-card');
      return card ? card.offsetWidth : 0;
    }

    function isAtEnd() {
      return grid.scrollLeft + grid.offsetWidth >= grid.scrollWidth - 2;
    }

    function advance() {
      if (isAtEnd()) {
        grid.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        grid.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
      }
    }

    function start() {
      if (timer) return;
      timer = setInterval(advance, interval);
    }

    function stop() {
      clearInterval(timer);
      timer = null;
    }

    // Pause on touch, resume after 5s
    grid.addEventListener('touchstart', function () {
      paused = true;
      stop();
    }, { passive: true });

    grid.addEventListener('touchend', function () {
      setTimeout(function () {
        paused = false;
        start();
      }, 5000);
    }, { passive: true });

    // Pause on mouse hover, resume on leave
    grid.addEventListener('mouseenter', function () {
      paused = true;
      stop();
    });

    grid.addEventListener('mouseleave', function () {
      paused = false;
      start();
    });

    // Start when grid scrolls into view
    if ('IntersectionObserver' in window) {
      var gridObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !paused) {
            start();
          } else {
            stop();
          }
        });
      }, { threshold: 0.3 });
      gridObserver.observe(grid);
    }
  });
})();
