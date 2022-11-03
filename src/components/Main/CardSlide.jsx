import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useActiveCategory, useFilter } from '../../context/CarContext';
import categoryList from '../../utils/category';
import Category from './Category/Category';
import CardList from './CardList';

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
          getCategoryCarInfo('segment', categoryList[realIndex]);
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
