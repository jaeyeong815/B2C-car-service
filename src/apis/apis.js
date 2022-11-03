import axios from 'axios';

export const getCarList = async () => {
  const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars`)).data;
  return payload;
};

export const getFilterCarList = async (filter, condition) => {
  if (condition === '전체') {
    const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars`)).data;
    return payload;
  }
  const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars?${filter}=${condition}`)).data;
  return payload;
};
