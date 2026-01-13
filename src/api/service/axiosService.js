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
      formData,
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

export const getAllJobs = async (category, jobTitle, location, experience) => {
  try {
    const response = await axiosInstance.get(`/employer/fetchjobs?category=${category}&jobTitle=${jobTitle}&location=${location}&experience=${experience}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const submitEasyApply = async (
  uploadedFileUrl,
  jobId,
  coverLetter,
  candidateId
) => {
  try {
    const response = await axiosInstance.post(
      `/apply-job/${jobId}/${candidateId}`,
      { uploadedFileUrl, coverLetter }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getMyAppliedJobs = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/get-applied-jobs/${candidateId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const candidateSaveJob = async (candidateId, jobId) => {
  try {
    const response = await axiosInstance.put(
      `/candidate-save-job/${candidateId}/${jobId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getSavedJobs = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/get-saved-jobs/${candidateId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getSavedJobDetails = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/get-saved-jobs-details/${candidateId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getJobDataOrCompanyData = async () => {
  try {
    const response = await axiosInstance.get(
      `/get-company-name-or-job-name`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getJobsByType = async (jobType) => {
  try {
    const response = await axiosInstance.get(
      `/get-jobs-by-type/${jobType}`
    );
    return response;
  } catch (err) {
    return err;
  }
};


export const getBlogList = async () => {
  try {
    const response = await axiosInstance.get(
      `/get-all-blogs`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getDistictValues = async () => {
  try {
    const response = await axiosInstance.get(
      `/get-distict-category-location`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getRandomBlogs = async () => {
  try {
    const response = await axiosInstance.get(
      `/get-random-blogs`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getDasboardData = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/get-candidate-dashboard-data/${candidateId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const generateSubscription = async (candidateId) => {
  try {
    const response = await axiosInstance.post(
      `/generate-job-storm-card/${candidateId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const getSubscriptionCardData = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/get-job-storm-card-data/${candidateId}`
    );
    return response;
  } catch (err) {
    return err;
  }
};


export const getAllCandidatePlans = async () => {
  try {
    const response = await axiosInstance.get(
      `/pricing-plans`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const bookSubscription = async (
  data
) => {
  try {
    // Ensure the endpoint matches your backend route structure
    // If your backend runs on /api, this becomes /api/payment/create-order
    const response = await axiosInstance.post("/payment/create-order", {
      data
    });

    // We must return response.data because it contains { success: true, paymentData: { ... } }
    return response;
  } catch (err) {
    console.error("Error booking subscription:", err);
    throw err;
  }
};



export const verifyPayment = async (txnid, verificationData) => {
  try {
    const response = await axiosInstance.post(
      `/payment/payu/success`,
      verificationData
    );
    return response;
  } catch (err) {
    return err;
  }
};


export const getMyTransactionHistory = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/get-candidate-transaction-history/${candidateId}`

    );
    return response;
  } catch (err) {
    return err;
  }
};


export const clearAllTransactions = async (candidateId) => {
  try {
    const response = await axiosInstance.delete(
      `/clear-all-transactions/${candidateId}`

    );
    return response;
  } catch (err) {
    return err;
  }
};



export const postPaymentStatus = async (txnid, amount, planType, status, employeeId,) => {
  try {
    const response = await axiosInstance.get(
      `/payment/verify-payment?employeeId=${employeeId}&txnid=${txnid}&amount=${amount}&planType=${planType}&status=${status}`,

    );
    return response;
  } catch (err) {
    return err;
  }
};


export const isCadidateSubscribed = async (candidateId) => {
  try {
    const response = await axiosInstance.get(
      `/is-candidate-subscribed/${candidateId}`

    );
    return response;
  } catch (err) {
    return err;
  }
};

export const submitContactForm = async (data) => {
  try {
    const response = await axiosInstance.post(`/api/contact-us`, data);
    return response;
  } catch (err) {
    return err;
  }
};