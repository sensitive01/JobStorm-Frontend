import { axiosInstance } from "../axiosInstance/axiosInstance";

export const registerEmployer = async (
  companyName,
  contactPerson,
  contactEmail,
  mobileNumber,
  password
) => {
  try {
    const response = await axiosInstance.post(`/employer/signup`, {
      companyName,
      contactPerson,
      contactEmail,
      mobileNumber,
      password,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const loginEmployer = async (userEmail, password) => {
  try {
    const response = await axiosInstance.post(`/employer/login`, {
      userEmail,
      password,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const sendVeificationOtp = async (
  companyEmail,
  contactPerson,
  companyName,

) => {
  try {
    const response = await axiosInstance.post(`/employer/send-verification-otp`, {
      companyEmail,
      contactPerson,
      companyName,

    });
    return response;
  } catch (err) {
    return err;
  }
};


export const verifyOtpEmployer = async (userEmail, otp) => {
  try {
    const response = await axiosInstance.post(`/employer/verifyemailotp`, {
      userEmail,
      otp,
    });
    return response;
  } catch (err) {
    return err;
  }
};