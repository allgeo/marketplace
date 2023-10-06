import { error } from "@sveltejs/kit";

export async function load(event){
    let id = event.params.slug;

    //Get rows, find one with provided id
    const { data } = await event.locals.sb.from("Users").select().eq("id", id);
    //console.log(id);
    //console.log(data);
    
    //No results, return 404
    if(data == null){
        throw error(404, 'User not found');
    }
    if(data.length <= 0){
        throw error(404, 'User not found');
    }

    return{
        post:data[0],
    };
}