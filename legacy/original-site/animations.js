/* ============================================
   ANIMATIONS & INTERACTIONS
   Scroll reveal, navbar, counter, smooth scroll
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // SCROLL REVEAL (Intersection Observer)
  // ============================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    );

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Add stagger delay for grid children
          const parent = entry.target.parentElement;
          if (parent && (parent.classList.contains('grid') || parent.classList.contains('stagger-children'))) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = (index * 0.1) + 's';
          }
          
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================
  // NAVBAR SCROLL BEHAVIOR
  // ============================================
  function initNavbar() {
    const navbar = document.querySelector('nav.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // SMOOTH SCROLL NAVIGATION
  // ============================================
  function initSmoothScroll() {
    const navButtons = document.querySelectorAll('[data-scroll-to]');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-scroll-to');
        const target = document.getElementById(targetId);
        
        if (target) {
          const offset = 64; // navbar height
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }

        // Close mobile menu if open
        if (mobileMenu) {
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');

    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // ============================================
  // COUNTER ANIMATION (Comparativo section)
  // ============================================
  function initCounter() {
    const counterEl = document.getElementById('total-counter');
    if (!counterEl) return;

    const targetValue = 21000;
    let hasAnimated = false;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounter(counterEl, 0, targetValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counterEl);
  }

  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function tick(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      
      element.textContent = 'R$ ' + current.toLocaleString('pt-BR');
      
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = 'R$ ' + end.toLocaleString('pt-BR');
      }
    }
    
    requestAnimationFrame(tick);
  }

  // ============================================
  // WHATSAPP FLOATING BUTTON ANIMATION
  // ============================================
  function initWhatsAppFloat() {
    const whatsappBtn = document.querySelector('.whatsapp-float img');
    if (!whatsappBtn) return;

    let time = 0;
    function floatAnimation() {
      time += 0.03;
      const y = Math.sin(time) * 5;
      whatsappBtn.style.transform = 'translateY(' + y + 'px)';
      requestAnimationFrame(floatAnimation);
    }
    
    floatAnimation();
  }

  // ============================================
  // CTA BUTTON SCROLL TO FORM
  // ============================================
  function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.btn-cta');
    
    ctaButtons.forEach(function(btn) {
      // Only if not a submit button
      if (btn.type === 'submit') return;
      
      btn.addEventListener('click', function() {
        const formSection = document.getElementById('formulario');
        if (formSection) {
          const offset = 64;
          const top = formSection.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================
  // FORM HANDLING
  // ============================================
  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {};
      formData.forEach(function(value, key) { data[key] = value; });
      
      // Build WhatsApp message
      const msg = encodeURIComponent(
        'Olá! Vim pelo site e gostaria de mais informações.\n\n' +
        'Nome: ' + (data.nome || '') + '\n' +
        'Email: ' + (data.email || '') + '\n' +
        'WhatsApp: ' + (data.whatsapp || '') + '\n' +
        'Empresa: ' + (data.empresa || '') + '\n' +
        'Setor: ' + (data.setor || '') + '\n' +
        'Faturamento: ' + (data.faturamento || '')
      );
      
      window.open('https://wa.me/5575981401481?text=' + msg, '_blank');
    });
  }

  // ============================================
  // INITIALIZE ALL
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initNavbar();
    initSmoothScroll();
    initMobileMenu();
    initCounter();
    initWhatsAppFloat();
    initCTAButtons();
    initForm();
  });
})();
