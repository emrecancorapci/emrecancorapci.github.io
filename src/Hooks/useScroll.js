import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > scrollY);

      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return { scrollY, isScrollingDown };
}
