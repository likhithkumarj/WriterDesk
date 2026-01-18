import { useEffect, useState } from "react";
import supabase from "../libs/supabaseClient";
import Loader from "../components/Loader";

export default function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        window.location.href = "/login";
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <Loader/>; // or spinner
  return children;
}
