import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useActiveCategory, useFilter } from '../../../context/CarContext';
import { CAR_CATEGORY } from '../../../utils/carAttribute';
import Category from '../Category/Category';
import CardList from './CardList';
import styled from 'styled-components';

const CardSlide = () => {
  const { activeCategory } = useActiveCategory();
  const getCategoryCarInfo = useFilter();

  return (
    <div>
      <Category />
      <Swiper
        className="swiper-container"
        onActiveIndexChange={({ realIndex }) => {
          activeCategory(realIndex);
          getCategoryCarInfo('segment', CAR_CATEGORY[realIndex]);
        }}
      >
        {CAR_CATEGORY.map((_, index) => {
          return (
            <SwiperSlide key={`swiper-slide-${index}`}>
              <StCardWrapper>
                <CardList />
              </StCardWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlide;

const StCardWrapper = styled.div`
  min-height: calc(100vh - 100px);
`;
