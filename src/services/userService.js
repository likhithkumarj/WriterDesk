import supabase from "../libs/supabaseClient"

export const getUserProfile = async () => {
    const { data : {user}} = await supabase.auth.getUser();

    return supabase
        .from("users")
        .select("id, username, bio")
        .eq("id", user.id)
        .single();
};
