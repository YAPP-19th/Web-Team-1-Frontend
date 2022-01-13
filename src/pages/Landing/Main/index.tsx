import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Text } from '@src/components/atoms';
import Wave from '@src/pages/Landing/Wave';
import character from '@src/assets/lottie/character.json';
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
              취업에 성공하려면 어떤 커리어를 만들어야 할까?{'\n'}
              취업의 길을 인도하는 커리어 로드맵 서비스
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
