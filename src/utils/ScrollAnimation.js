import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, className = '', threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
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