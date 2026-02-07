import { useState } from "react";
import supabase from "../libs/supabaseClient";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [username, setusername] = useState("");
  const [bio, setbio] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);

  const saveStepOne = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from("users").update({
      username,
      bio,
    }).eq("id", user.id);

    setStep(2);
  };
  
  const saveSteptwo = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from("users").update({
      role,
      experience_level: experience
    }).eq("id", user.id);

    setStep(3);
  };

  const finishOnboarding = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from("users").update({
      genres,
      languages,
      onboarding_completed: true,
      onboarding_skipped: false
    }).eq("id", user.id);

    window.location.replace("/dashboard/ideas");
  };

  const skipOnboarding = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from("users").update({
      onboarding_skipped: true
    }).eq("id", user.id);

    window.location.replace("/dashboard/ideas");    
  };

  return (
    <div>
      <button onClick={skipOnboarding}>Skip for now</button>

      {step === 1 && (
        <>
          <h2>set your profile</h2>

          <input
            placeholder="UserName"
            onChange={e => setusername(e.target.value)}
          />

          
          <input
            placeholder="Bio"
            onChange={e => setbio(e.target.value)}
          />

          <button onClick={saveStepOne}>Continue</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Tell us about you</h2>

          <select onChange={e => setRole(e.target.value)}>
            <option value="">Select role</option>
            <option>Director</option>
            <option>Writer</option>
            <option>Actor</option>
            <option>Editor</option>
          </select>

          <select onChange={e => setExperience(e.target.value)}>
            <option value="">Experience level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Professional</option>
          </select>

          <button onClick={saveSteptwo}>Continue</button>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Your preferences</h2>

          <input
            placeholder="Genres (comma separated)"
            onChange={e => setGenres(e.target.value.split(","))}
          />

          <input
            placeholder="Languages (comma separated)"
            onChange={e => setLanguages(e.target.value.split(","))}
          />

          <button onClick={finishOnboarding}>Finish</button>
        </>
      )}
    </div>
  );
}
