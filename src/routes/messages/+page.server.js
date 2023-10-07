import { error } from "@sveltejs/kit";

export async function load(event){
    let id = event.locals.session.user.id;

    //Get rows, find one with provided id
    const { data } = await event.locals.sb.from("Messages").select().or(`receiver_uid.eq.${id},sender_uid.eq.${id}`);
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
        messages:data,
    };
}