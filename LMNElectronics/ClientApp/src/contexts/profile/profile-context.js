import React, { createContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState([{ text: "Learn Hooks" }]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
