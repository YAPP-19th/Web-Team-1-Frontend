import React from 'react';
import type { FC } from 'react';
import { useHistory } from 'react-router-dom';
import NotFoundImage from '@src/assets/images/notfound.svg';
import { Text, Button } from '@src/components/atoms';
import './style.scss';

const NotFound: FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.goBack();
  };

  return (
    <section className="notfound">
      <div className="notfound-wrapper">
        <img src={NotFoundImage} alt="notFound" />
        <Text
          align="center"
          fontColor="gil-blue"
          fontSize="xxx-large"
          fontWeight="bold"
        >
          페이지를 찾을 수 없습니다.
        </Text>
        <Text align="center" fontSize="xx-large">
          입력하신 주소가 정확한지 다시 한번 확인해 주세요.
        </Text>
        <Button
          innerText="메인으로 가기"
          buttonColor="white"
          textColor="gil-blue"
          textSize="medium"
          hasShadow
          handleClick={handleButtonClick}
        />
      </div>
    </section>
  );
};

export default NotFound;
