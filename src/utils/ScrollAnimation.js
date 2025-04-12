import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, className = '', threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div ref={elementRef} className={`scroll-animation ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 