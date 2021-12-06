import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Text } from '@src/components/atoms';
import Wave from '@src/pages/Landing/Wave';
import character from './character.json';
import './style.scss';

const Main: React.FC = () => {
  const spanElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: spanElement.current as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: character,
    });
  }, []);

  return (
    <>
      <section className="main-background">
        <div className="main-wrapper">
          <article className="main-title">
            <Text className="main-text" fontSize="xxxx-large" fontWeight="bold">
              취업의 바다에서{'\n'}길잡이가 되어주다
            </Text>
            <Text className="sub-text" fontSize="x-large" fontWeight="regular">
              취업의 바다에서 길잡이가 되어주다.{'\n'}
              취업의 바다에서 길잡이가 되어주다.{'\n'}
              취업의 바다에서 길잡이가 되어주다.{'\n'}
              취업의 바다에서 길잡이가 되어주다.
            </Text>
          </article>
          <article className="image-wrapper">
            <span ref={spanElement} />
          </article>
        </div>
        <Wave />
      </section>
    </>
  );
};

export default Main;
