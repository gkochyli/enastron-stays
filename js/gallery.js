/* =============================================
   ENASTRON — Photo Gallery, Carousel & Lightbox
   Mobile carousel with counter, click-to-enlarge,
   navigation, keyboard support
   ============================================= */

(function () {
  'use strict';

  var gallery = document.getElementById('gallery');
  if (!gallery) return;

  var galleryItems = gallery.querySelectorAll('.gallery__item');
  var totalImages = galleryItems.length;

  // --- Mobile Carousel Counter ---
  var counterEl = document.getElementById('galleryCounter');
  if (counterEl && totalImages > 0) {
    var scrollTimer;
    gallery.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var scrollLeft = gallery.scrollLeft;
        var itemWidth = gallery.offsetWidth;
        var idx = Math.round(scrollLeft / itemWidth);
        counterEl.textContent = (idx + 1) + ' / ' + totalImages;
        // Update dots
        if (galleryDots.length) {
          galleryDots.forEach(function (dot, i) {
            dot.classList.toggle('is-active', i === idx);
          });
        }
      }, 50);
    });
  }

  // --- Mobile Gallery Dots ---
  var galleryDots = [];
  var galleryWrap = gallery.closest('.gallery-wrap');
  if (galleryWrap && totalImages > 1) {
    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'gallery-dots';
    for (var g = 0; g < totalImages; g++) {
      var gDot = document.createElement('button');
      gDot.className = 'gallery-dots__dot';
      gDot.setAttribute('aria-label', 'Go to photo ' + (g + 1));
      gDot.dataset.index = g;
      if (g === 0) gDot.classList.add('is-active');
      dotsContainer.appendChild(gDot);
    }
    galleryWrap.appendChild(dotsContainer);
    galleryDots = dotsContainer.querySelectorAll('.gallery-dots__dot');

    dotsContainer.addEventListener('click', function (e) {
      var btn = e.target.closest('.gallery-dots__dot');
      if (!btn) return;
      var idx = parseInt(btn.dataset.index, 10);
      gallery.scrollTo({ left: idx * gallery.offsetWidth, behavior: 'smooth' });
    });
  }

  // --- Mobile Photo Carousel Auto-Rotate ---
  if (totalImages > 1) {
    var photoTimer = null;
    var photoPaused = false;
    var photoInterval = 4000;

    function isPhotoAtEnd() {
      return gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth - 2;
    }

    function advancePhoto() {
      if (window.innerWidth > 767) return;
      if (isPhotoAtEnd()) {
        gallery.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        gallery.scrollBy({ left: gallery.offsetWidth, behavior: 'smooth' });
      }
    }

    function startPhotoCarousel() {
      if (photoTimer) return;
      photoTimer = setInterval(advancePhoto, photoInterval);
    }

    function stopPhotoCarousel() {
      clearInterval(photoTimer);
      photoTimer = null;
    }

    gallery.addEventListener('touchstart', function () {
      photoPaused = true;
      stopPhotoCarousel();
    }, { passive: true });

    gallery.addEventListener('touchend', function () {
      setTimeout(function () {
        photoPaused = false;
        startPhotoCarousel();
      }, 5000);
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      var photoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !photoPaused) {
            startPhotoCarousel();
          } else {
            stopPhotoCarousel();
          }
        });
      }, { threshold: 0.3 });
      photoObserver.observe(gallery);
    }
  }

  // --- Lightbox ---
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxCounter = document.getElementById('lightboxCounter');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');
  var showAllBtn = document.getElementById('showAllPhotos');

  if (!lightbox) return;

  var currentIndex = 0;

  // Collect gradient backgrounds from gallery items for the lightbox
  var gradients = [];
  galleryItems.forEach(function (item) {
    var placeholder = item.querySelector('.gallery__item-placeholder');
    if (placeholder) {
      gradients.push(placeholder.style.background || placeholder.style.backgroundImage);
    }
  });

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    if (gradients[currentIndex]) {
      lightboxImage.style.background = gradients[currentIndex];
    }
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + totalImages;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateLightboxImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateLightboxImage();
  }

  // Gallery item click
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Don't open lightbox if "show all" button was clicked
      if (e.target.closest('.gallery__show-all')) return;
      var index = parseInt(item.getAttribute('data-index'), 10);
      if (!isNaN(index)) {
        openLightbox(index);
      }
    });
  });

  // "Show all photos" button — open lightbox at first image
  if (showAllBtn) {
    showAllBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      openLightbox(0);
    });
  }

  // Lightbox controls
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextImage);
  lightboxPrev.addEventListener('click', prevImage);

  // Close on backdrop click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
    }
  });
})();
