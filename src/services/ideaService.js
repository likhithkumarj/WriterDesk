import supabase from "../libs/supabaseClient";

export const createIdea = async (title) => {
  if (!title) throw new Error("Title required");

  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("ideas")
    .insert({
      user_id: user.id,
      title,
      content: ""
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const getIdeas = async () => {
    const { data : {user}} = await supabase.auth.getUser();

    return supabase
        .from("ideas")
        .select("id, title, content")
        .eq("user_id", user.id)
};
