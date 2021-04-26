import React, { useContext } from "react";
import { ProfileContext } from "../../contexts/profile/profile-context";

const Profile = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div>
      <h1 className="mt-5 mb-5">Profile</h1>
      <h3>{profile}</h3>
    </div>
  );
};

export default Profile;
