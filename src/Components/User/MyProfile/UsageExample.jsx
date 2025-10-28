// Example of how to use the UserForm component in your parent component

import UserForm from './UserForm-Fixed';
import { sendUserData } from '../api/userApi'; // Update path to your API file

const MyProfile = () => {
  return (
    <div className="container">
      {/* Other profile content */}
      
      {/* Pass the sendUserData function as a prop */}
      <UserForm sendUserData={sendUserData} />
      
      {/* Other content */}
    </div>
  );
};

export default MyProfile;

// ==========================================
// Alternative: If you prefer to import inside UserForm
// ==========================================

// Option 1: Import directly in UserForm-Fixed.jsx (line 2)
// Uncomment this line in UserForm-Fixed.jsx:
// import { sendUserData } from '../api/userApi';

// And change the component signature from:
// const UserForm = ({ sendUserData }) => {
// 
// To:
// const UserForm = () => {

// Then you don't need to pass it as a prop:
// <UserForm />

// ==========================================
// Your API structure should look like:
// ==========================================

// userApi.js
import axiosInstance from './axiosInstance';

export const sendUserData = async (formData) => {
  try {
    const response = await axiosInstance.post(`/save-candidate-data`, formData);
    return response;
  } catch (err) {
    return err;
  }
};

// ==========================================
// Backend will receive data in this format:
// ==========================================

/*
WITHOUT FILES:
{
  firstName: "John",
  lastName: "Doe",
  accountType: "it-software",
  email: "john@example.com",
  introduction: "Developer with 5 years...",
  languages: "English, Spanish",
  location: "MA",
  facebook: "https://facebook.com/john",
  twitter: "https://twitter.com/john",
  linkedin: "https://linkedin.com/in/john",
  whatsapp: "+1234567890",
  twoFactorEnabled: false,
  // Password fields only if changing password:
  currentPassword: "oldpass123",
  newPassword: "newpass456"
}

WITH FILES (FormData):
- All the above fields as FormData entries
- profileImage: File object
- cv: File object
*/