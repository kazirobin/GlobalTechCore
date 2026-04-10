// script.js - Navbar Functionality

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const languageSelector = document.querySelector('.language-selector');
  const selectorButton = document.querySelector('.selector-button');

  // Scroll Effect - Glass + Color Change
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger Toggle with smooth icon transition
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const icon = hamburger.querySelector('i');
    
    mobileMenu.classList.toggle('open');
    
    if (mobileMenu.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Language Selector Click (Mobile)
  selectorButton.addEventListener('click', (e) => {
    if (window.innerWidth < 992) {
      e.stopPropagation();
      languageSelector.classList.toggle('active');
    }
  });

  // Change Language
  document.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const newFlag = option.dataset.flag;
      const newCode = option.dataset.code;

      document.getElementById('selected-flag').src = newFlag;
      document.getElementById('selected-country').textContent = newCode;

      if (window.innerWidth < 992) {
        languageSelector.classList.remove('active');
      }
    });
  });

  // Close mobile menu when clicking links
  document.querySelectorAll('.mobile-menu .nav-link, .mobile-menu .mobile-login').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('open');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    
    // Close language dropdown on outside click (mobile)
    if (window.innerWidth < 992 && !languageSelector.contains(e.target)) {
      languageSelector.classList.remove('active');
    }
  });
});