import {redirect} from "@sveltejs/kit";

export async function load(event){
    //Auto redirect to self profile
    let id = event.locals.session.user.id;
    
    const { data } = await event.locals.sb.from("Users").select(`id`).eq('uid', id).single();

    if(data){
        if(data.id){
            throw redirect(303, `/user/${data.id}`);
        }
    }
    throw redirect(404, `/`);

}
