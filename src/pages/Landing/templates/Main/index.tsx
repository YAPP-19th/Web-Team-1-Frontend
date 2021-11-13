import React from 'react';
import Text from '@src/atoms/Text';
import character from '@src/assets/images/character.svg';
import { Wave } from '@src/pages/Landing/templates';
import './style.scss';

const Main: React.FC = () => {
  return (
    <>
      <section className="main-background">
        <div className="main-wrapper">
          <article className="main-title">
            <div className="main-text">
              <Text fontSize="xxxx-large" fontWeight="bold">
                취업의 바다에서
              </Text>
              <Text fontSize="xxxx-large" fontWeight="bold">
                길잡이가 되어주다
              </Text>
            </div>
            <div className="sub-text">
              <Text fontSize="x-large" fontWeight="regular" lineHeight="wide">
                취업의 바다에서 길잡이가 되어주다.{'\n'}
                취업의 바다에서 길잡이가 되어주다.{'\n'}
                취업의 바다에서 길잡이가 되어주다.{'\n'}
                취업의 바다에서 길잡이가 되어주다.
              </Text>
            </div>
          </article>
          <article className="image-wrapper">
            <img src={character} alt="ship" />
          </article>
        </div>
        <Wave />
      </section>
    </>
  );
};

export default Main;
