import { useEffect, useState } from 'react';
import { useFilter } from '../../../context/CarContext';
import categoryList from '../../../utils/category';
import conversionSegment from '../../../utils/conversionSegment';
import CategoryTag from './CategoryTag';

const CategoryFilter = () => {
  const getCategoryCarInfo = useFilter();
  const [selected, setSelected] = useState('전체');
  const handleOnclick = (e) => {
    setSelected(e.target.name);
  };
  useEffect(() => {
    getCategoryCarInfo('segment', selected);
  }, [selected, getCategoryCarInfo]);
  return categoryList.map((category, index) => {
    return (
      <CategoryTag
        key={index}
        text={conversionSegment(category)}
        name={category}
        onClick={handleOnclick}
        select={category === selected}
      />
    );
  });
};

export default CategoryFilter;
