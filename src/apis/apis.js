import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const getCars = async () => {
  return instance.get(`${process.env.REACT_APP_API}`);
};

export const assortedCars = async (segment) => {
  return instance.get(`${process.env.REACT_APP_API}?segment=${segment}`);
};
