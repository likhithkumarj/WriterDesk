import { useEffect } from "react";
import supabase from "../libs/supabaseClient";
import { useLoading } from "../context/LoadingContext";

export default function AuthGuard({ children }) {
  const { setLoading } = useLoading();

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        window.location.href = "/login";
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  return children;
}
