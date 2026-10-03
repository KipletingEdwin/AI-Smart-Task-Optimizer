
import axiosInstance from './axiosInstance';

export const signup = async (email, password, passwordConfirmation, name) => {
  const response = await axiosInstance.post('/auth/signup', {
    user: { email, password, password_confirmation: passwordConfirmation, name },
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data;
};