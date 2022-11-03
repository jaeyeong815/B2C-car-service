import { useEffect, useState } from 'react';
import { useActiveCategory, useFilter } from '../../../context/CarContext';
import categoryList from '../../../utils/category';
import conversionSegment from '../../../utils/conversionSegment';
import CategoryTag from './CategoryTag';

const CategoryFilter = () => {
  const getCategoryCarInfo = useFilter();
  const { activeCategory } = useActiveCategory();
  const [selected, setSelected] = useState('전체');
  const [activeIdx, SetActiveIdx] = useState(0);

  const handleOnclick = (e) => {
    setSelected(e.target.name);
    SetActiveIdx(e.target.id);
  };

  useEffect(() => {
    activeCategory(activeIdx);
    getCategoryCarInfo('segment', selected);
  }, [selected]);

  return categoryList.map((category, index) => {
    return (
      <CategoryTag
        key={index}
        id={index}
        text={conversionSegment(category)}
        name={category}
        onClick={handleOnclick}
        select={category === selected || index === activeIdx}
      />
    );
  });
};

export default CategoryFilter;
