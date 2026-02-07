import supabase from "../libs/supabaseClient";

export async function signIn(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) alert(error.message);
  else window.location.href = "/dashboard/ideas";
}

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/dashboard/ideas"
    }
  });
};


export async function signUp(email, password) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Check your email for confirmation");
  }
}
  

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert(error.message);
  } else {
    window.location.href = "/login";
  }
}




export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data.user;
};
