import { useEffect, useRef, useState } from 'react';

const useIO = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const intersectionObserver = useRef(null);

  const { root, rootMargin, threshold } = options || {}

  useEffect(() => {
    if (elements.length) {
      intersectionObserver.current = new IntersectionObserver((ioEntries) => {
        setEntries(ioEntries);
      }, {
        threshold,
        root,
        rootMargin
      });

      elements.forEach(element => {
        intersectionObserver.current.observe(element);
      });
    }
    return () => {
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    }
  }, [elements, root, rootMargin, threshold]);

  return [intersectionObserver.current, setElements, entries];
};

export default useIO;
