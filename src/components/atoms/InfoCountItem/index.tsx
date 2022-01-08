import React, { useCallback, useEffect, useRef, useState } from 'react';
import './style.scss';
import { Text } from '@src/components/atoms';
import { useSpring, animated } from 'react-spring';

export interface InfoCountItemProps {
  info: {
    title: string;
    count?: number;
    unit: string;
  };
}

const InfoCountItem: React.FC<InfoCountItemProps> = ({ info }) => {
  const animatedDiv = useRef(null);
  const [targetNumber, setTargetNumber] = useState(0);
  const onIntersect: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && animatedDiv.current) {
          observer.unobserve(animatedDiv.current as Element);
          setTargetNumber(info?.count ?? 0);
        }
      });
    },
    [info?.count],
  );
  const { number } = useSpring({
    reset: true,
    from: { number: 0 },
    number: targetNumber,
    delay: 200,
    config: { mass: 1, tension: 280, friction: 120 },
  });
  useEffect(() => {
    let observer: IntersectionObserver;
    if (animatedDiv.current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.2 });
      observer.observe(animatedDiv.current as Element);
    }
    return () => observer && observer.disconnect();
  });

  return (
    <div className="count" key={info.title}>
      <div className="upper-wrapper">
        <Text
          fontSize="medium"
          fontWeight="bold"
          align="center"
          fontColor="white"
        >
          {info.title}
        </Text>
      </div>
      <div className="lower-wrapper">
        <Text
          className="number-text"
          fontWeight="light"
          fontColor="white"
          align="end"
        >
          <animated.div ref={animatedDiv}>
            {number.to((n) => Math.round(n))}
          </animated.div>
        </Text>
        <Text
          className="unit-text"
          fontSize="xxx-large"
          fontWeight="light"
          fontColor="white"
        >
          {info.unit}
        </Text>
      </div>
    </div>
  );
};

export default InfoCountItem;
