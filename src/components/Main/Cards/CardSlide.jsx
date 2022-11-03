import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useActiveCategory, useFilter } from '../../../context/CarContext';
import Category from '../Category/Category';
import CardList from './CardList';
import { CAR_CATEGORY } from '../../../utils/carAttribute';

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
        {categoryList.map((_, index) => {
          return (
            <SwiperSlide key={`swiper-slide-${index}`}>
              <CardList />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlide;
