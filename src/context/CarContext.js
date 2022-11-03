import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import apis from '../apis/apis';

const CarContext = createContext(null);
const LodingContext = createContext(null);
const SelectCarContext = createContext(null);
const FilterCarContext = createContext(null);
const ActiveCategoryContext = createContext(null);

export const useCar = () => useContext(CarContext);
export const useLoding = () => useContext(LodingContext);
export const useSelectCar = () => useContext(SelectCarContext);
export const useFilter = () => useContext(FilterCarContext);
export const useActiveCategory = () => useContext(ActiveCategoryContext);

export const CarProvider = ({ children }) => {
  const [isLoding, setIsLoding] = useState(false);
  const [carList, setCarList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsLoding(true);
    apis.getCarList().then((res) => {
      setCarList(res);
      setIsLoding(false);
    });
  }, []);

  const getSelectCarInfo = useCallback(
    (id) => {
      return carList.filter((car) => car.id === parseInt(id));
    },
    [carList]
  );

  const activeCategory = (activeIdx) => {
    setActiveIndex(activeIdx);
  };

  const getCategoryCarInfo = (segment, condition) => {
    apis.getFilteredCarList(segment, condition).then((res) => {
      setCarList(res);
    });
  };

  return (
    <CarContext.Provider value={carList}>
      <SelectCarContext.Provider value={getSelectCarInfo}>
        <FilterCarContext.Provider value={getCategoryCarInfo}>
          <ActiveCategoryContext.Provider value={{ activeCategory, activeIndex }}>
            <LodingContext.Provider value={isLoding}>{children}</LodingContext.Provider>
          </ActiveCategoryContext.Provider>
        </FilterCarContext.Provider>
      </SelectCarContext.Provider>
    </CarContext.Provider>
  );
};
