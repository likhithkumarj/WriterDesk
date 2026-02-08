import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile } from "../services/userService";
import { useLoading } from "./LoadingContext";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    getUserProfile()
      .then(({ data }) => {
        setUser(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
