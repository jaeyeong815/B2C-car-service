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
        <SwiperSlide>
          <CardList />
        </SwiperSlide>
        <SwiperSlide>
          <CardList />
        </SwiperSlide>
        <SwiperSlide>
          <CardList />
        </SwiperSlide>
        <SwiperSlide>
          <CardList />
        </SwiperSlide>
        <SwiperSlide>
          <CardList />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlide;

// const goNext = () => {
//   if (swiperRef?.current?.swiper) {
//     swiperRef.current.swiper.activeIndex();
//   }
// };
