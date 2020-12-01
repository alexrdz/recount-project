import React, { useState, useEffect, useContext, createContext } from "react";

const userContext = createContext();

export function ProvideUser({ children }) {
  const user = useProvideUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export const useUserContext = () => useContext(userContext);

function useProvideUser() {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUserData(data);
      setCurrentUser(data[0]);
    }

    if (!userData) {
      fetchUser();
    }
  }, []);

  function getUser(userId) {
    if (userData) {
      const user = userData.find((u) => u.id === +userId);
      setUser(user);
    }
  }

  return {
    userData,
    setUserData,
    getUser,
    user,
    currentUser,
  };
}
