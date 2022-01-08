import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import loadingImage from '@src/assets/lottie/loading.json';
import './style.scss';

const Loading: React.FC = () => {
  const spanElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: spanElement.current as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingImage,
    });
  }, []);

  return (
    <section className="_LOADING_">
      <div className="loading-background" />
      <div className="loading-image">
        <span ref={spanElement} />
      </div>
    </section>
  );
};

export default Loading;
