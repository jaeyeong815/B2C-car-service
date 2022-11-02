import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getCarList } from '../apis/apis';

const CarContext = createContext(null);
const SelectCarContext = createContext(null);

export const useCar = () => useContext(CarContext);
export const useSelectCar = () => useContext(SelectCarContext);

export const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    getCarList().then((res) => setCarList(res));
  }, []);

  const getSelectCarInfo = useCallback((id) => {
    return carList.filter((car) => car.id === parseInt(id));
  });

  return (
    <CarContext.Provider value={carList}>
      <SelectCarContext.Provider value={getSelectCarInfo}>{children}</SelectCarContext.Provider>
    </CarContext.Provider>
  );
};
