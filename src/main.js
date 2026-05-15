import './style.css';
import { initPanel, openPanel } from './diagram.js';

document.addEventListener('DOMContentLoaded', () => {
  // Trigger the loaded class shortly after DOM is ready so CSS keyframes fire.
  setTimeout(() => document.body.classList.add('loaded'), 100);

  initPanel();

  // Smooth scroll for in-page nav links
  document.querySelectorAll('nav a, a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;
    a.addEventListener('click', e => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Reveal the diagram when it scrolls into view
  const diagramWrap = document.querySelector('.diagram-wrap');
  if (diagramWrap) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          diagramWrap.classList.add('diagram-visible');
          io.unobserve(diagramWrap);
        }
      });
    }, { threshold: 0.2 });
    io.observe(diagramWrap);
  }

  // "Explore the system" button — open the center (bridge) panel
  document.getElementById('exploreBtn')?.addEventListener('click', () => {
    openPanel('center');
  });
});
