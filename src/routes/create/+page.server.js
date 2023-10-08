import { supabaseClient } from "$lib/supabase";
import { redirect } from '@sveltejs/kit';

export async function load({parent}) {
    let {session} = await parent();

    if (!session){
        throw redirect(307, "/login");
    }
}

function parseTags(input){
    //Use this to modify tags as needed
    let output = "";
    return output;
}

export const actions = {
    create: async (event) => {
        //Create post in db if logged in, etc.
        const formData = await event.request.formData();
        const sesh = event.locals.session;
        //console.log(sesh);
        let title = formData.get('title');
        let url = formData.get('url');
        let description = formData.get('description');
        let uid = sesh.user.id;
        let name = sesh.user.user_metadata.name;//Change this to using the (todo) built in name on our user table

        //Temp payload for testing. Either process tags here, or process them clientsided first
        //UID IS TEMP for TESTING ONLY
        const payload = {   title:title, 
                            description:description,
                            tags:formData.get('tags'),
                            uid:uid,
                            name:name,
                            url:url
                        };
        let {data, error } = await event.locals.sb.from("Posts").insert(payload).select().single();
        console.log(data);
        if(error){
            console.log(error);
        }
        else{
            throw redirect(303, `/forum/${data.id}`);
        }
    },
}