import { axiosInstance } from "../axiosInstance/axiosInstance";

export const registerCandidate = async (formData) => {
  try {
    const response = await axiosInstance.post(`/candidate-signup`, {
      formData,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const loginCandidate = async (formData) => {
  try {
    const response = await axiosInstance.post(`/candidate-login`, {
      formData,
    });
    return response;
  } catch (err) {
    return err;
  }
};


export const resetPassword = async (email) => {
  try {
    const response = await axiosInstance.post(`/candidate-reset-passowrd`, {
      email,
    });
    return response;
  } catch (err) {
    return err;
  }
};
