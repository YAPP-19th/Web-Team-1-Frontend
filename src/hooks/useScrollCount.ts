import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (start = 0, end = 0, duration = 2500) => {
  const spanElement = useRef<HTMLSpanElement>(null);
  let observer: IntersectionObserver;

  const countTime = Math.abs(Math.floor(duration / (end - start)));

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = spanElement;
      if (entry.isIntersecting && current) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          current.innerHTML = currentNumber.toString();

          if (currentNumber === end) {
            clearInterval(counter);
            observer.disconnect();
          }
        }, countTime);
      }
    },
    [start, end, countTime, spanElement],
  );

  useEffect(() => {
    if (spanElement.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.3,
      });
      observer.observe(spanElement.current);
    }

    return () => observer.disconnect();
  }, [handleScroll]);

  return {
    ref: spanElement,
  };
};

export default useScrollCount;
