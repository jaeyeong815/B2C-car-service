import { useEffect, useState } from 'react';
import { useActiveCategory, useFilter } from '../../../context/CarContext';
import CategoryTag from './CategoryTag';
import { CAR_CATEGORY, CAR_TYPE } from '../../../utils/carAttribute';
import getKeyByValue from '../../../utils/getKeyByValue';

const CategoryFilter = () => {
  const getCategoryCarInfo = useFilter();
  const { activeIndex, activeCategory } = useActiveCategory();
  const [selected, SetSelected] = useState(0);

  const handleOnclick = (e) => {
    SetSelected(e.target.id);
  };

  useEffect(() => {
    activeCategory(selected);
    getCategoryCarInfo('segment', CAR_CATEGORY[selected]);
  }, [selected]);

  return CAR_CATEGORY.map((category, index) => {
    return (
      <CategoryTag
        key={index}
        id={index}
        text={getKeyByValue(CAR_TYPE, category)}
        name={category}
        onClick={handleOnclick}
        select={index === parseInt(activeIndex)}
      />
    );
  });
};

export default CategoryFilter;
