import React from 'react';
import Text from '@src/components/atoms/Text';
import character from '@src/assets/images/character.svg';
import Wave from '@src/pages/Landing/Wave';
import './style.scss';

const Main: React.FC = () => {
  return (
    <>
      <section className="main-background">
        <div className="main-wrapper">
          <article className="main-title">
            <Text className="main-text" fontSize="xxxx-large" fontWeight="bold">
              취업의 바다에서{'\n'}길잡이가 되어주다
            </Text>
            <Text
              className="sub-text"
              fontSize="x-large"
              fontWeight="regular"
              lineHeight="wide"
            >
              취업의 바다에서 길잡이가 되어주다.{'\n'}
              취업의 바다에서 길잡이가 되어주다.{'\n'}
              취업의 바다에서 길잡이가 되어주다.{'\n'}
              취업의 바다에서 길잡이가 되어주다.
            </Text>
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
