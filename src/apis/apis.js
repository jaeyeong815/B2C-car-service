import axios from 'axios';
import axiosInstance from '../utils/axios';

// export const getCarList = async () => {
//   const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars`)).data;
//   return payload;
// };

// export const getFilterCarList = async (filter, condition) => {
//   if (condition === '전체') {
//     const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars`)).data;
//     return payload;
//   }
//   const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars?${filter}=${condition}`)).data;
//   return payload;
// };

const apis = {
  getCarList: async () => {
    const { data } = await axiosInstance();
    return data.payload;
  },
  getFilteredCarList: async (filter, condition) => {
    if (condition === '전체') {
      const { data } = await axiosInstance();
      return data.payload;
    }

    const { data } = await axiosInstance({
      params: {
        filter: condition,
      },
    });
    return data.payload;
  },
};

export default apis;
