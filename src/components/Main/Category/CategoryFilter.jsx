import { useEffect, useState } from 'react';
import { useActiveCategory, useFilter } from '../../../context/CarContext';
import categoryList from '../../../utils/category';
import conversionSegment from '../../../utils/conversionSegment';
import CategoryTag from './CategoryTag';

const CategoryFilter = () => {
  const getCategoryCarInfo = useFilter();
  const { activeIndex, activeCategory } = useActiveCategory();
  const [selected, SetSelected] = useState(0);

  const handleOnclick = (e) => {
    SetSelected(e.target.id);
  };

  useEffect(() => {
    activeCategory(selected);
    getCategoryCarInfo('segment', categoryList[selected]);
  }, [selected]);

  return categoryList.map((category, index) => {
    return (
      <CategoryTag
        key={index}
        id={index}
        text={conversionSegment(category)}
        name={category}
        onClick={handleOnclick}
        select={index === parseInt(activeIndex)}
      />
    );
  });
};

export default CategoryFilter;
