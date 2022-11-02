import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCars = async () => {
  return instance.get(`${process.env.REACT_APP_API}`);
};
