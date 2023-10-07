import { error } from "@sveltejs/kit";

export async function load(event){
    let id = event.params.slug;

    //Get rows, find one with provided id
    const { data } = await event.locals.sb.from("Posts").select().eq("id", id);
    //console.log(id);
    //console.log(data);
    
    //No results, return 404
    if(data == null){
        throw error(404, 'Forum not found');
    }
    if(data.length <= 0){
        throw error(404, 'Forum not found');
    }

    let { d, err } = await event.locals.sb.rpc("increment_views_post", {post_id:id,});

    return{
        post:data[0],
    };
}