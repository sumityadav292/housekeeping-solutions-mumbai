import { useEffect } from "react";

function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "section:not(.hero)"
    );

    if (!sections.length) return;

    document.documentElement.classList.add("reveal-ready");

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

export default ScrollReveal;