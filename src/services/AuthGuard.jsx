import { useEffect, useState } from "react";
import { getCurrentUser } from "./authService";

export default function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then(user => {
      if (!user) window.location.href = "/login";
      else setLoading(false);
    });
  }, []);

  if (loading) return null; // or loader
  return children;
}
