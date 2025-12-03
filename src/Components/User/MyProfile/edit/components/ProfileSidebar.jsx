import React from "react";
import ProfileCard from "./ProfileCard";
import "./ProfileSidebar.css";

const ProfileSidebar = ({
  profileImage,
  userName,
  currentRole,
  location,
  email,
  mobile,
}) => {
  return (
    <div className="profile-sidebar">
      <ProfileCard
        profileImage={profileImage}
        userName={userName}
        currentRole={currentRole}
        location={location}
        email={email}
        mobile={mobile}
      />
    </div>
  );
};

export default ProfileSidebar;
