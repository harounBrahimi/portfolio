/**
 * main.js — Interactions et comportements du portfolio
 * Toggle dark/light, scroll reveal, navigation active, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollReveal();
  initActiveNav();
  initMobileMenu();
  initSmoothScroll();
  initProjectFilter();
});

/* ============================================================
   1. THEME TOGGLE (dark / light, persisté en localStorage)
   ============================================================ */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const iconSun = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  // Récupérer le thème sauvegardé ou utiliser le dark par défaut
  const saved = localStorage.getItem('theme');
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  toggle.innerHTML = theme === 'dark' ? iconSun : iconMoon;
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.innerHTML = next === 'dark' ? iconSun : iconMoon;
    toggle.setAttribute('aria-label', next === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
  });
}

/* ============================================================
   2. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Ne pas ré-observer une fois révélé
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ============================================================
   3. NAVIGATION ACTIVE (highlight section courante)
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-height')} 0px -40% 0px`
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ============================================================
   4. MENU MOBILE (burger toggle)
   ============================================================ */
function initMobileMenu() {
  const burger = document.getElementById('nav-burger');
  const links = document.getElementById('nav-links');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Fermer le menu quand on clique sur un lien
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   5. SMOOTH SCROLL pour les ancres
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   6. FILTRE PROJETS (Pro / Perso / Tous)
   ============================================================ */
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category]');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      buttons.forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });

      // Show/hide cards
      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}
