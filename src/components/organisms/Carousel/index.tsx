import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

const CarouselWrapper = styled.section`
  position: relative;
  width: 115rem;
`;

export interface CarouselProps {
  children: React.ReactNode; // 슬라이더 아이템 요소
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true, // 캐러셀 하단부 점으로 한번에 이동
      arrows: true, // 캐러셀을 움직이는 화살표 추가
      infinite: true, // 무한 캐러셀 여부
      speed: 300, // 슬라이더 속도
      slidesToShow: 4, // 한번에 보여줄 슬라이드 수
      autoplay: true, // 자동재생 여부
    }),
    [],
  );
  return (
    <CarouselWrapper>
      <Slider {...settings}>{children}</Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
