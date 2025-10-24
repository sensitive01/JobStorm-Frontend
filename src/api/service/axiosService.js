import { axiosInstance } from "../axiosInstance/axiosInstance";

export const registerCandidate = async (
  userName,
  userEmail,
  userPassword,
  userMobile
) => {
  try {
    const response = await axiosInstance.post(`/signup`, {
      userName,
      userEmail,
      userPassword,
      userMobile,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const loginCandidate = async (userEmail, userPassword) => {
  try {
    const response = await axiosInstance.post(`/login`, {
      userEmail,
      userPassword,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const resetPassword = async (userEmail) => {
  try {
    const response = await axiosInstance.post(`/sendemailotp`, {
      userEmail,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const verifyOTP = async (userEmail, otp) => {
  try {
    const response = await axiosInstance.post(`/verifyemailotp`, {
      userEmail,
      otp,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const changePassword = async (userEmail, password, confirmPassword) => {
  try {
    const response = await axiosInstance.post(`/change-password`, {
      userEmail,
      password,
      confirmPassword,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getMyName = async (userId) => {
  try {
    const response = await axiosInstance.get(`/get-my-name/${userId}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const bookDemoShedule = async (formData) => {
  try {
    const response = await axiosInstance.post(`/book-my-demo`, { formData });
    return response;
  } catch (err) {
    return err;
  }
};

export const editUserData = async (userId, formData) => {
  try {
    const response = await axiosInstance.post(
      `/edit-form-data/${userId}`,
       formData ,
      {
        headers: {
          "Content-Type": "multipart/form-data", // important for files
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getUserDetails = async (userId) => {
  try {
    const response = await axiosInstance.get(`/get-user-data/${userId}`);
    return response;
  } catch (err) {
    return err;
  }
};
