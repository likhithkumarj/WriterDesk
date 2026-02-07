import { useEffect, useState } from "react";
import supabase from "../libs/supabaseClient";
import Loader from "../components/Loader";

export default function OnboardingGate({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.replace("/login");
        return;
      }

      const { data } = await supabase
        .from("users")
        .select("onboarding_completed, onboarding_skipped")
        .eq("id", user.id)
        .single();

      if (!data.onboarding_completed && !data.onboarding_skipped) {
        window.location.replace("/onboarding");
      } else {
        setLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  if (loading) return <Loader />;
  return children;
}
