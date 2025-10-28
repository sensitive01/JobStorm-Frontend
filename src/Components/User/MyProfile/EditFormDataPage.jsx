import React, { useEffect, useState } from "react";
import { editUserData, getUserDetails } from "../../../api/service/axiosService";

const EditFormDataPage = ({ formData }) => {
  const userId = localStorage.getItem("userId");

  // Helper functions to split userName into firstName and lastName
  const getFirstName = () => {
    if (formData?.firstName) return formData.firstName;
    if (formData?.userName) {
      const parts = formData.userName.split(" ");
      return parts[0] || "";
    }
    return "";
  };

  const getLastName = () => {
    if (formData?.lastName) return formData.lastName;
    if (formData?.userName) {
      const parts = formData.userName.split(" ");
      return parts.slice(1).join(" ") || "";
    }
    return "";
  };

  const [formState, setFormState] = useState({
    // Personal Info
    firstName: getFirstName(),
    lastName: getLastName(),
    userName: formData?.userName || "",
    gender: formData?.gender || "",
    dob: formData?.dob || "",
    maritalStatus: formData?.maritalStatus || "",
    languages: formData?.languages?.join(", ") || "",

    // Contact
    userEmail: formData?.userEmail || "",
    userMobile: formData?.userMobile || "",

    // Address
    addressLine1: formData?.addressLine1 || "",
    addressLine2: formData?.addressLine2 || "",
    city: formData?.city || "",
    state: formData?.state || "",
    pincode: formData?.pincode || "",
    currentCity: formData?.currentCity || "",
    preferredLocation: formData?.preferredLocation || "",

    // Professional Details
    currentrole: formData?.currentrole || "",
    specialization: formData?.specialization || "",
    gradeLevels: formData?.gradeLevels?.join(", ") || "",
    totalExperience: formData?.totalExperience || "",
    expectedSalary: formData?.expectedSalary || "",
    isAvailable: formData?.isAvailable || false,

    // Profile Summary
    profilesummary: formData?.profilesummary || "",

    // Online Presence
    github: formData?.github || "",
    linkedin: formData?.linkedin || "",
    portfolio: formData?.portfolio || "",
  });

  // Separate state for arrays
  const [skills, setSkills] = useState(formData?.skills || []);
  const [education, setEducation] = useState(formData?.education || []);
  const [workExperience, setWorkExperience] = useState(
    formData?.workExperience || []
  );

  // Temporary input states
  const [skillInput, setSkillInput] = useState("");
  const [educationInput, setEducationInput] = useState({
    type: "",
    degree: "",
    institution: "",
    startDate: "",
    endDate: "",
  });
  const [workExperienceInput, setWorkExperienceInput] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    isCurrentlyWorking: false,
  });

  const [profileImage, setProfileImage] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDetails(userId);
        if (response.status===200) {
          const data = response.data.data;
          setUserData(data);

          // Update form state with fetched data
          setFormState({
            firstName: data.userName?.split(" ")[0] || "",
            lastName: data.userName?.split(" ").slice(1).join(" ") || "",
            userName: data.userName || "",
            gender: data.gender || "",
            dob: data.dob || "",
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

          // Set arrays
          setSkills(data.skills || []);
          setEducation(data.education || []);
          setWorkExperience(data.workExperience || []);

          // Set profile image
          if (data.userProfilePic?.url) {
            setProfileImage(data.userProfilePic.url);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Skills handlers
  const addSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Education handlers
  const addEducation = () => {
    if (
      educationInput.type &&
      educationInput.degree &&
      educationInput.institution &&
      educationInput.startDate
    ) {
      setEducation([...education, { ...educationInput }]);
      setEducationInput({
        type: "",
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      });
    } else {
      alert("Please fill all required education fields");
    }
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleEducationInputChange = (field, value) => {
    setEducationInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Work Experience handlers
  const addWorkExperience = () => {
    if (
      workExperienceInput.position &&
      workExperienceInput.company &&
      workExperienceInput.startDate
    ) {
      setWorkExperience([...workExperience, { ...workExperienceInput }]);
      setWorkExperienceInput({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        isCurrentlyWorking: false,
      });
    } else {
      alert("Please fill all required work experience fields");
    }
  };

  const removeWorkExperience = (index) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  const handleWorkExperienceInputChange = (field, value) => {
    setWorkExperienceInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCurrentlyWorkingChange = (checked) => {
    setWorkExperienceInput((prev) => ({
      ...prev,
      isCurrentlyWorking: checked,
      endDate: checked ? "" : prev.endDate,
    }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleResumeFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleCoverLetterFileChange = (e) => {
    setCoverLetterFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file uploads
    const submitData = new FormData();

    // Combine firstName and lastName into userName
    const fullName = `${formState.firstName} ${formState.lastName}`.trim();
    submitData.append("userName", fullName);

    // Personal Info
    submitData.append("gender", formState.gender);
    submitData.append("dob", formState.dob);
    submitData.append("maritalStatus", formState.maritalStatus);

    // Convert languages to array
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

    // Professional Details
    submitData.append("currentrole", formState.currentrole);
    submitData.append("specialization", formState.specialization);
    submitData.append("totalExperience", formState.totalExperience);
    submitData.append("expectedSalary", formState.expectedSalary);
    submitData.append("isAvailable", formState.isAvailable);

    // Convert gradeLevels to array
    if (formState.gradeLevels) {
      const gradeLevelsArray = formState.gradeLevels
        .split(",")
        .map((level) => level.trim())
        .filter((level) => level);
      submitData.append("gradeLevels", JSON.stringify(gradeLevelsArray));
    }

    // Skills array
    const filteredSkills = skills.filter((skill) => skill.trim());
    submitData.append("skills", JSON.stringify(filteredSkills));

    // Education array
    submitData.append("education", JSON.stringify(education));

    // Work Experience array
    submitData.append("workExperience", JSON.stringify(workExperience));

    submitData.append("profilesummary", formState.profilesummary);

    // Online Presence
    submitData.append("github", formState.github);
    submitData.append("linkedin", formState.linkedin);
    submitData.append("portfolio", formState.portfolio);

    // Append files
    if (profileImageFile) {
      submitData.append("userProfilePic", profileImageFile);
    }

    if (resumeFile) {
      submitData.append("resume", resumeFile);
    }

    if (coverLetterFile) {
      submitData.append("coverLetterFile", coverLetterFile);
    }

    try {
      const response = await editUserData(userId, submitData);

      if (response.status===200) {
        alert("Profile updated successfully!");
        window.location.reload();
      } else {
        alert(`Error: ${response.message || "Failed to update profile"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while updating your profile.");
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <form onSubmit={handleSubmit}>
        {/* Profile Picture Section */}
        <div>
          <h5 className="fs-17 fw-semibold mb-3">My Account</h5>
          <div className="text-center">
            <div className="mb-4 profile-user">
              <img
                src={
                  profileImage ||
                  (userData?.userProfilePic?.url
                    ? userData.userProfilePic.url
                    : "assets/images/user/img-02.jpg")
                }
                className="rounded-circle img-thumbnail profile-img"
                id="profile-img"
                alt="Profile"
              />
              <div className="p-0 rounded-circle profile-photo-edit">
                <input
                  id="profile-img-file-input"
                  type="file"
                  className="profile-img-file-input"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
                <label
                  htmlFor="profile-img-file-input"
                  className="profile-photo-edit avatar-xs"
                >
                  <i className="uil uil-edit" />
                </label>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  value={formState.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={formState.dob}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="maritalStatus" className="form-label">
                  Marital Status
                </label>
                <select
                  className="form-select"
                  id="maritalStatus"
                  value={formState.maritalStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  value={formState.userEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="userMobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="userMobile"
                  value={formState.userMobile}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Address Details</h5>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="addressLine1" className="form-label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  value={formState.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Street address, P.O. box"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="addressLine2" className="form-label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine2"
                  value={formState.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, unit, building, floor"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={formState.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  value={formState.state}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  value={formState.pincode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="currentCity" className="form-label">
                  Current City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="currentCity"
                  value={formState.currentCity}
                  onChange={handleInputChange}
                  placeholder="e.g., Bangalore, Mumbai"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="preferredLocation" className="form-label">
                  Preferred Work Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="preferredLocation"
                  value={formState.preferredLocation}
                  onChange={handleInputChange}
                  placeholder="e.g., Bangalore, Remote"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Professional Details</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="currentrole" className="form-label">
                  Current Role
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="currentrole"
                  value={formState.currentrole}
                  onChange={handleInputChange}
                  placeholder="e.g., Software Developer"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="specialization" className="form-label">
                  Specialization
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="specialization"
                  value={formState.specialization}
                  onChange={handleInputChange}
                  placeholder="e.g., Full Stack Development"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="totalExperience" className="form-label">
                  Total Experience (Years)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="totalExperience"
                  value={formState.totalExperience}
                  onChange={handleInputChange}
                  placeholder="e.g., 5 years"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="expectedSalary" className="form-label">
                  Expected Salary (Annual)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="expectedSalary"
                  value={formState.expectedSalary}
                  onChange={handleInputChange}
                  placeholder="e.g., 1200000"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="isAvailable"
                    checked={formState.isAvailable}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="isAvailable">
                    Available for Job Opportunities
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Skills</h5>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    className="form-control"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addSkill())
                    }
                    placeholder="Enter a skill"
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addSkill}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            {skills.length > 0 && (
              <div className="col-lg-12">
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge bg-primary d-flex align-items-center gap-2"
                      style={{ fontSize: "14px", padding: "8px 12px" }}
                    >
                      {skill}
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        style={{ fontSize: "10px" }}
                        onClick={() => removeSkill(index)}
                        aria-label="Remove"
                      ></button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Education */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Education</h5>
          <div className="border p-3 mb-3 rounded">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={educationInput.type}
                    onChange={(e) =>
                      handleEducationInputChange("type", e.target.value)
                    }
                    placeholder="e.g., Degree, Diploma"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Degree</label>
                  <input
                    type="text"
                    className="form-control"
                    value={educationInput.degree}
                    onChange={(e) =>
                      handleEducationInputChange("degree", e.target.value)
                    }
                    placeholder="e.g., B.Sc, B.Ed"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Institution</label>
                  <input
                    type="text"
                    className="form-control"
                    value={educationInput.institution}
                    onChange={(e) =>
                      handleEducationInputChange("institution", e.target.value)
                    }
                    placeholder="Institution name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={educationInput.startDate}
                    onChange={(e) =>
                      handleEducationInputChange("startDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={educationInput.endDate}
                    onChange={(e) =>
                      handleEducationInputChange("endDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addEducation}
                >
                  Add Education
                </button>
              </div>
            </div>
          </div>

          {education.length > 0 && (
            <div className="mt-3">
              <h6 className="mb-3">Added Education:</h6>
              {education.map((edu, index) => (
                <div key={index} className="border p-3 mb-2 rounded bg-light">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <strong>{edu.degree}</strong> - {edu.type}
                      <br />
                      <span className="text-muted">{edu.institution}</span>
                      <br />
                      <small>
                        {edu.startDate} - {edu.endDate || "Present"}
                      </small>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => removeEducation(index)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Work Experience */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Work Experience</h5>
          <div className="border p-3 mb-3 rounded">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Position / Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={workExperienceInput.position}
                    onChange={(e) =>
                      handleWorkExperienceInputChange("position", e.target.value)
                    }
                    placeholder="Job title"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={workExperienceInput.company}
                    onChange={(e) =>
                      handleWorkExperienceInputChange("company", e.target.value)
                    }
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={workExperienceInput.startDate}
                    onChange={(e) =>
                      handleWorkExperienceInputChange("startDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={workExperienceInput.endDate}
                    onChange={(e) =>
                      handleWorkExperienceInputChange("endDate", e.target.value)
                    }
                    disabled={workExperienceInput.isCurrentlyWorking}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="isCurrentlyWorking"
                      checked={workExperienceInput.isCurrentlyWorking}
                      onChange={(e) =>
                        handleCurrentlyWorkingChange(e.target.checked)
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="isCurrentlyWorking"
                    >
                      Currently working here
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addWorkExperience}
                >
                  Add Work Experience
                </button>
              </div>
            </div>
          </div>

          {workExperience.length > 0 && (
            <div className="mt-3">
              <h6 className="mb-3">Added Work Experience:</h6>
              {workExperience.map((work, index) => (
                <div key={index} className="border p-3 mb-2 rounded bg-light">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <strong>{work.position}</strong>
                      <br />
                      <span className="text-muted">{work.company}</span>
                      <br />
                      <small>
                        {work.startDate} -{" "}
                        {work.isCurrentlyWorking ? "Present" : work.endDate}
                      </small>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => removeWorkExperience(index)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile Summary */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Profile Summary</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="languages" className="form-label">
                  Languages
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="languages"
                  value={formState.languages}
                  onChange={handleInputChange}
                  placeholder="e.g., English, Hindi, Spanish"
                />
                <small className="text-muted">
                  Separate languages with commas
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="gradeLevels" className="form-label">
                  Grade Levels (if applicable)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gradeLevels"
                  value={formState.gradeLevels}
                  onChange={handleInputChange}
                  placeholder="e.g., 10th, 12th"
                />
                <small className="text-muted">Separate with commas</small>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="profilesummary" className="form-label">
                  Profile Summary
                </label>
                <textarea
                  className="form-control"
                  id="profilesummary"
                  rows={5}
                  value={formState.profilesummary}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself, your experience, and what makes you unique..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* File Uploads */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Documents</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="resumeFile" className="form-label">
                  Resume / CV
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="resumeFile"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeFileChange}
                />
                {userData?.resume?.name && (
                  <small className="text-muted d-block mt-1">
                    Current file: {userData.resume.name}
                  </small>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="coverLetterFileUpload" className="form-label">
                  Cover Letter File
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="coverLetterFileUpload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleCoverLetterFileChange}
                />
                {userData?.coverLetterFile?.name && (
                  <small className="text-muted d-block mt-1">
                    Current file: {userData.coverLetterFile.name}
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Online Presence */}
        <div className="mt-4">
          <h5 className="fs-17 fw-semibold mb-3">Online Presence</h5>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">
                  LinkedIn
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="linkedin"
                  value={formState.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="github" className="form-label">
                  GitHub
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="github"
                  value={formState.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="portfolio" className="form-label">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="portfolio"
                  value={formState.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-end">
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFormDataPage;