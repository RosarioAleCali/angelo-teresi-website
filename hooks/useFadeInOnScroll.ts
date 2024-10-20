import { useEffect } from 'react';

const useFadeInOnScroll = (
  selector: string = '.fadeInElement',
  threshold: number = 0.4
): void => {
  useEffect(() => {
    const elements: NodeListOf<Element> = document.querySelectorAll(selector);

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInVisible');
          } else {
            entry.target.classList.remove('fadeInVisible');
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    elements.forEach((el: Element) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el: Element) => {
        observer.unobserve(el);
      });
    };
  }, [selector, threshold]);
};

export default useFadeInOnScroll;