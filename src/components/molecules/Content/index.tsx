import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import { Text } from '@src/components/atoms';
import icon from '@src/assets/images/icon.svg';
import cn from 'classnames';
import './style.scss';

interface ContentProps {
  main: string;
  sub: string;
  image: Record<string, unknown>;
  direction: 'row' | 'reverse';
}

const Content: React.FC<ContentProps> = ({
  main,
  sub,
  image,
  direction = 'row',
}) => {
  const spanElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: spanElement.current as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: image,
    });
  }, [image]);

  return (
    <article className={cn('content', `direction-${direction}`)}>
      <div className="content-image">
        <span ref={spanElement} />
      </div>
      <div className="content-description">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <Text
          className="main-text"
          fontSize="xxx-large"
          fontWeight="bold"
          fontColor="white"
        >
          {main}
        </Text>
        <Text fontSize="small" fontWeight="light" fontColor="white">
          {sub}
        </Text>
      </div>
    </article>
  );
};

export default Content;
