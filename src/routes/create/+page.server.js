import { supabaseClient } from "$lib/supabase";
import { redirect } from '@sveltejs/kit';

export async function load({parent}) {
    let {session} = await parent();

    if (!session){
        throw redirect(307, "/login");
    }
}

export const actions = {
    create: async ({cookies, request}) => {
        //Create post in db if logged in, etc.
        const formData = await request.formData();
        //Temp payload for testing. Either process tags here, or process them clientsided first
        //UID IS TEMP for TESTING ONLY
        const payload = {   title:formData.get('title'), 
                            desc:formData.get('desc'),
                            tags:formData.get('tags'),
                            uid:'2c3fb581-53dc-49e7-b5eb-97ea1710ceac',
                        };
        const { error } = await supabaseClient.from("testposts").insert(payload);
        console.log(error);
    },
}