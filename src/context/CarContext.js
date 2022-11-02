import { createContext, useContext, useEffect, useState } from 'react';
import { getCarList } from '../apis/apis';

const CarContext = createContext(null);

export const useCar = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    getCarList().then((res) => setCarList(res));
  }, []);

  return <CarContext.Provider value={carList}>{children}</CarContext.Provider>;
};
