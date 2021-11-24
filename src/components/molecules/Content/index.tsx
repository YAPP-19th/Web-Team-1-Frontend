import React from 'react';
import { Text } from '@src/components/atoms';
import icon from '@src/assets/images/icon.svg';
import cn from 'classnames';
import './style.scss';

interface ContentProps {
  main: string;
  sub: string;
  image: string;
  direction: 'row' | 'reverse';
}

const Content: React.FC<ContentProps> = ({
  main,
  sub,
  image,
  direction = 'row',
}) => {
  return (
    <article className={cn('content', `direction-${direction}`)}>
      <div className="content-image">
        <img src={image} alt="map" />
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
        <Text
          fontSize="small"
          fontWeight="light"
          fontColor="white"
          lineHeight="wide"
        >
          {sub}
        </Text>
      </div>
    </article>
  );
};

export default Content;
