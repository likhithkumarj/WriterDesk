import { createContext, useContext, useEffect, useState } from "react";
import { getIdeas } from "../services/ideaService";
import { useLoading } from "./LoadingContext";

const IdeasContext = createContext();

export function IdeasProvider({ children }) {
  const [ideas, setIdeas] = useState([]);
  const { setLoading } = useLoading();

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      const { data, error } = await getIdeas();
      if (error) throw error;
      setIdeas(data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <IdeasContext.Provider value={{ ideas, fetchIdeas }}>
      {children}
    </IdeasContext.Provider>
  );
}

export const useIdeas = () => useContext(IdeasContext);