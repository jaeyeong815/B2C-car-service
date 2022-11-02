import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getCarList, getFilterCarList } from '../apis/apis';

const CarContext = createContext(null);
const LodingContext = createContext(null);
const SelectCarContext = createContext(null);
const FilterCarContext = createContext(null);

export const useCar = () => useContext(CarContext);
export const useLoding = () => useContext(LodingContext);
export const useSelectCar = () => useContext(SelectCarContext);
export const useFilter = () => useContext(FilterCarContext);

export const CarProvider = ({ children }) => {
  const [isLoding, setIsLoding] = useState(false);
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    setIsLoding(true);
    getCarList().then((res) => {
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

  const getCategoryCarInfo = useCallback((segment, condition) => {
    getFilterCarList(segment, condition).then((res) => setCarList(res));
  });

  return (
    <CarContext.Provider value={carList}>
      <SelectCarContext.Provider value={getSelectCarInfo}>
        <FilterCarContext.Provider value={getCategoryCarInfo}>
          <LodingContext.Provider value={isLoding}>{children}</LodingContext.Provider>
        </FilterCarContext.Provider>
      </SelectCarContext.Provider>
    </CarContext.Provider>
  );
};
