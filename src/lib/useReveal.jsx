import React from 'react';

/**
 * Adds `.is-visible` to elements with `.ff-reveal` when they enter the viewport.
 * Lightweight alternative to animation libs.
 */
export function useRevealOnScroll({ rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = {}) {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.ff-reveal'));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin, threshold }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootMargin, threshold]);
}
