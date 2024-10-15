import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialUser = localStorage.getItem("User");
  // const globalUrl = "https://lofo.onrender.com"
  const globalUrl = "http://localhost:6005"
  const globalName = "CityEase";
  const [globalSearch,setGlobalSearch] = useState("");
  const [itemData,setItemData] = useState({});
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : null
  );

  return (
    <AuthContext.Provider
      value={{ globalUrl,itemData, setItemData, authUser, setAuthUser, globalName, globalSearch, setGlobalSearch }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);