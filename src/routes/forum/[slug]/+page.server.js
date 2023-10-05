import { supabaseClient } from "$lib/supabase";
import { error } from "@sveltejs/kit";

export async function load({ params }){
    let id = params.slug;

    //Get rows, find one with provided id
    const { data } = await supabaseClient.from("testposts").select().eq("id", id);
    //console.log(id);
    //console.log(data);
    
    //No results, return 404
    if(data == null){
        throw error(404, 'Forum not found');
    }
    if(data.length <= 0){
        throw error(404, 'Forum not found');
    }

    return{
        post:data[0],
    };
}