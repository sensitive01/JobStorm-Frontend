import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import {
  editUserData,
  getUserDetails,
} from "../../../../api/service/axiosService";
import ProfileSidebar from "./components/ProfileSidebar";
import PersonalDetailsSection from "./sections/PersonalDetailsSection";
import VerifiedDocumentsSection from "./sections/VerifiedDocumentsSection";
import AddressSection from "./sections/AddressSection";
import ProfessionalDetailsSection from "./sections/ProfessionalDetailsSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import OnlinePresenceSection from "./sections/OnlinePresenceSection";
import "./EditProfilePage.css";

const EditProfilePage = ({ formData, profileImages }) => {
  const userId = localStorage.getItem("userId");

  // Helper functions
  const getFirstName = () => {
    if (formData?.firstName) return formData.firstName;
    if (formData?.userName) return formData.userName.split(" ")[0] || "";
    return "";
  };

  const getLastName = () => {
    if (formData?.lastName) return formData.lastName;
    if (formData?.userName)
      return formData.userName.split(" ").slice(1).join(" ") || "";
    return "";
  };

  // Main form state
  const [formState, setFormState] = useState({
    firstName: getFirstName(),
    lastName: getLastName(),
    userName: formData?.userName || "",
    gender: formData?.gender || "",
    dob: formData?.dob || "",
    nationality: formData?.nationality || "",
    passportNumber: formData?.passportNumber || "",
    maritalStatus: formData?.maritalStatus || "",
    languages: formData?.languages?.join(", ") || "",
    userEmail: formData?.userEmail || "",
    userMobile: formData?.userMobile || "",
    addressLine1: formData?.addressLine1 || "",
    addressLine2: formData?.addressLine2 || "",
    city: formData?.city || "",
    state: formData?.state || "",
    pincode: formData?.pincode || "",
    currentCity: formData?.currentCity || "",
    location: formData?.location || "",
    preferredLocation: formData?.preferredLocation || "",
    currentrole: formData?.currentrole || "",
    specialization: formData?.specialization || "",
    gradeLevels: formData?.gradeLevels?.join(", ") || "",
    totalExperience: formData?.totalExperience || "",
    expectedSalary: formData?.expectedSalary || "",
    isAvailable: formData?.isAvailable || false,
    profilesummary: formData?.profilesummary || "",
    github: formData?.github || "",
    linkedin: formData?.linkedin || "",
    portfolio: formData?.portfolio || "",
  });

  // Array states
  const [skills, setSkills] = useState(formData?.skills || []);
  const [education, setEducation] = useState(formData?.education || []);
  const [workExperience, setWorkExperience] = useState(
    formData?.workExperience || [],
  );

  // File states
  const [profileImage, setProfileImage] = useState(profileImages);
  const [profileImageFile, setProfileImageFile] = useState(null);

  // Document files
  const [documents, setDocuments] = useState({
    passport: {
      file: null,
      expiryDate: formData?.passportExpiryDate
        ? new Date(formData.passportExpiryDate).toISOString().split("T")[0]
        : "",
    },
    educationCertificate: { file: null },
    policeClearance: { file: null },
    mofaAttestation: { file: null },
    resume: { file: null },
    coverLetterFile: { file: null },
  });

  // UI states
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUserDetails(userId);
      if (response.status === 200) {
        const data = response.data.data;
        setUserData(data);

        // Update documents with expiry date from user data
        if (data.passportExpiryDate) {
          setDocuments((prev) => ({
            ...prev,
            passport: {
              ...prev.passport,
              expiryDate: new Date(data.passportExpiryDate)
                .toISOString()
                .split("T")[0],
            },
          }));
        }

        setFormState({
          firstName: data.userName?.split(" ")[0] || "",
          lastName: data.userName?.split(" ").slice(1).join(" ") || "",
          userName: data.userName || "",
          gender: data.gender || "",
          dob: data.dob || "",
          nationality: data.nationality || "",
          passportNumber: data.passportNumber || "",
          maritalStatus: data.maritalStatus || "",
          languages: data.languages?.join(", ") || "",
          userEmail: data.userEmail || "",
          userMobile: data.userMobile || "",
          addressLine1: data.addressLine1 || "",
          addressLine2: data.addressLine2 || "",
          city: data.city || "",
          state: data.state || "",
          pincode: data.pincode || "",
          currentCity: data.currentCity || "",
          location: data.location || "",
          preferredLocation: data.preferredLocation || "",
          currentrole: data.currentrole || "",
          specialization: data.specialization || "",
          gradeLevels: data.gradeLevels?.join(", ") || "",
          totalExperience: data.totalExperience || "",
          expectedSalary: data.expectedSalary || "",
          isAvailable: data.isAvailable || false,
          profilesummary: data.profilesummary || "",
          github: data.github || "",
          linkedin: data.linkedin || "",
          portfolio: data.portfolio || "",
        });

        setSkills(data.skills || []);
        setEducation(data.education || []);
        setWorkExperience(data.workExperience || []);

        if (data.userProfilePic?.url) {
          setProfileImage(data.userProfilePic.url);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setSubmitError("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  // Fetch user data
  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId, fetchData]);

  // Handlers
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProfileImageChange = (file) => {
    if (file) {
      setProfileImageFile(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleDocumentChange = (documentType, file, additionalData = {}) => {
    setDocuments((prev) => {
      const newState = {
        ...prev,
        [documentType]: {
          ...prev[documentType],
          ...(file ? { file } : {}), // Only include file if it exists
          ...additionalData,
        },
      };
      console.log("Document state after update:", newState);
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    const submitData = new FormData();

    // Combine firstName and lastName
    const fullName = `${formState.firstName} ${formState.lastName}`.trim();
    submitData.append("userName", fullName);

    // Personal Info
    submitData.append("gender", formState.gender);
    submitData.append("dob", formState.dob);
    submitData.append("nationality", formState.nationality);
    submitData.append("passportNumber", formState.passportNumber);
    submitData.append("maritalStatus", formState.maritalStatus);
    submitData.append("location", formState.location);

    // Languages
    if (formState.languages) {
      const languagesArray = formState.languages
        .split(",")
        .map((lang) => lang.trim())
        .filter((lang) => lang);
      submitData.append("languages", JSON.stringify(languagesArray));
    }

    // Contact
    submitData.append("userEmail", formState.userEmail);
    submitData.append("userMobile", formState.userMobile);

    // Address
    submitData.append("addressLine1", formState.addressLine1);
    submitData.append("addressLine2", formState.addressLine2);
    submitData.append("city", formState.city);
    submitData.append("state", formState.state);
    submitData.append("pincode", formState.pincode);
    submitData.append("currentCity", formState.currentCity);
    submitData.append("preferredLocation", formState.preferredLocation);

    // Professional
    submitData.append("currentrole", formState.currentrole);
    submitData.append("specialization", formState.specialization);
    submitData.append("totalExperience", formState.totalExperience);
    submitData.append("expectedSalary", formState.expectedSalary);
    submitData.append("isAvailable", formState.isAvailable);

    if (formState.gradeLevels) {
      const gradeLevelsArray = formState.gradeLevels
        .split(",")
        .map((level) => level.trim())
        .filter((level) => level);
      submitData.append("gradeLevels", JSON.stringify(gradeLevelsArray));
    }

    // Arrays
    submitData.append("skills", JSON.stringify(skills.filter((s) => s.trim())));
    submitData.append("education", JSON.stringify(education));
    submitData.append("workExperience", JSON.stringify(workExperience));
    submitData.append("profilesummary", formState.profilesummary);

    // Online Presence
    submitData.append("github", formState.github);
    submitData.append("linkedin", formState.linkedin);
    submitData.append("portfolio", formState.portfolio);

    // Files - Profile Image
    if (profileImageFile) {
      submitData.append("userProfilePic", profileImageFile);
    }

    // Documents
    if (documents.passport.file) {
      submitData.append("passport", documents.passport.file);
      submitData.append("passportExpiryDate", documents.passport.expiryDate);
    }
    if (documents.educationCertificate.file) {
      submitData.append(
        "educationCertificate",
        documents.educationCertificate.file,
      );
    }
    if (documents.policeClearance.file) {
      submitData.append("policeClearance", documents.policeClearance.file);
    }
    if (documents.mofaAttestation.file) {
      submitData.append("mofaAttestation", documents.mofaAttestation.file);
    }
    if (documents.resume.file) {
      submitData.append("resume", documents.resume.file);
    }
    if (documents.coverLetterFile.file) {
      submitData.append("coverLetterFile", documents.coverLetterFile.file);
    }

    console.log("submitData", submitData);

    try {
      const response = await editUserData(userId, submitData);

      if (response.status === 200) {
        setSubmitSuccess(true);
        toast.success("Profile updated successfully!");
        await fetchData(); // Refresh data locally automatically
      } else {
        setSubmitError(response.message || "Failed to update profile");
        toast.error(`Error: ${response.message || "Failed to update profile"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("An error occurred while updating your profile");
      toast.error("An error occurred while updating your profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-profile-page">
      <form onSubmit={handleSubmit}>
        <div className="profile-layout">
          {/* Main Content */}
          <main className="profile-main-content">
            {/* Personal Details */}
            <PersonalDetailsSection
              formState={formState}
              handleInputChange={handleInputChange}
              profileImage={profileImage}
              onProfileImageChange={handleProfileImageChange}
            />

            {/* Verified Documents */}
            <VerifiedDocumentsSection
              documents={documents}
              handleDocumentChange={handleDocumentChange}
              userData={userData}
            />

            {/* Address Section */}
            <AddressSection
              formState={formState}
              handleInputChange={handleInputChange}
            />

            {/* Professional Details */}
            <ProfessionalDetailsSection
              formState={formState}
              handleInputChange={handleInputChange}
            />

            {/* Skills Section - Now in main content after Professional Details */}
            <SkillsSection skills={skills} setSkills={setSkills} />

            {/* Education */}
            <EducationSection
              education={education}
              setEducation={setEducation}
            />

            {/* Work Experience */}
            <WorkExperienceSection
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />

            {/* Online Presence */}
            <OnlinePresenceSection
              formState={formState}
              handleInputChange={handleInputChange}
            />

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>

            {submitSuccess && (
              <div className="alert alert-success mt-3">
                Profile updated successfully!
              </div>
            )}
            {submitError && (
              <div className="alert alert-danger mt-3">{submitError}</div>
            )}
          </main>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
