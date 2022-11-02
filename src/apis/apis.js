import axios from 'axios';

export const getCarList = async () => {
  const { payload } = await (await axios.get(`https://preonboarding.platdev.net/api/cars`)).data;
  return payload;
};
