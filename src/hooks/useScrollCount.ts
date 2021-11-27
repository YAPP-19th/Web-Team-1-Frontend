import { useRef, useEffect, useCallback, useMemo } from 'react';

/* useScrollCount
 * 랜딩 페이지에서 특정 컴포넌트가 viewport 내부에 있는지 확인하기 위해서
 * IntersectionObserver를 통해 특정 컴포넌트를 관찰하도록 하고,
 * viewport 내부에 해당 컴포넌트가 들어올 경우 카운트 이벤트를 발생시킨다.
 */

const useScrollCount = (count = 0) => {
  const targetElement = useRef<HTMLDivElement>(null);
  const intervalTime = useMemo(
    () => (count !== 0 ? Math.abs(Math.floor(2000 / count)) : 2000),
    [count],
  );
  let observer: IntersectionObserver; // 수정 필요 (issue #11)

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = targetElement;
      if (entry.isIntersecting && current) {
        observer.unobserve(current);
        let currentNumber = 0;
        const counterInterval = setInterval(() => {
          currentNumber += 1;
          current.innerHTML = currentNumber.toString(); // 수정 필요 (issue #11)
          if (currentNumber === count) {
            clearInterval(counterInterval);
          }
        }, intervalTime);
      }
    },
    [intervalTime, count], // 수정 필요 (issue #11)
  );

  useEffect(() => {
    if (targetElement.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.2,
      }); // 수정 필요 (issue #11)
      observer.observe(targetElement.current);
    }

    return () => observer.disconnect();
  }, [handleScroll]);

  return targetElement;
};

export default useScrollCount;
