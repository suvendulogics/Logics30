import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [tabs, setTabs] = useState("");
  // function login(username, pass) {
  //     if (username === 'sk' && pass === "test") {
  //         setAuthenticated(true)
  //     } else {
  //         setAuthenticated(false)
  //     }
  // }

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
