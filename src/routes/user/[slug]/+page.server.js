import { error } from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export async function load(event){
    let id = event.params.slug;

    //Get rows, find one with provided id
    const { data } = await event.locals.sb.from("Users").select().eq("id", id);

    //No results, return 404
    if(data == null){
        throw error(404, 'User not found');
    }
    if(data.length <= 0){
        throw error(404, 'User not found');
    }

    let { d, err } = await event.locals.sb.rpc("increment_views_user", {user_id:id,});

    return{
        post:data[0],
    };
}

export const actions = {
    edit: async (event) => {
        //Get posted form data
        let id = event.params.slug;

		const formData = await event.request.formData();
        let { data, error } = await event.locals.sb.from("Users").select().eq("id", id).single();

        //If empty, = empty string
        let name = formData.get('alias').length > 0 ? formData.get('alias') : data.name;
        let description = formData.get('description').length > 0 ? formData.get('description') : data.description;

        let tags = formData.get('new_tag');

        if(tags.length > 0){
            if(data.tags.length > 0){
                tags = data.tags + ", "+ tags;
            }
        }
        else{
            tags = data.tags;
        }
        //Opts bulk tagging instead of adding individual tags
        tags = formData.get('bulk_tag').length > 0 ? formData.get('bulk_tag') : tags;

        ({error} = await event.locals.sb.from("Users").update({name:name, description:description, tags:tags}).eq('id',id));
    },
    cleartags: async(event)=>{
        //Clears all tags
        let id=event.params.slug;
        const {error} = await event.locals.sb.from("Users").update({tags:""}).eq('id',id);
    },
    msg: async(event)=>{
        let oid = event.params.slug;
        let uid = event.locals.session.user.id;
        const formData = await event.request.formData();
        
        //Ouid should be data.uid
        let {data, error} = await event.locals.sb.from("Users").select("uid").eq("id", oid).single();

        let message = formData.get("message");

        if(data){
            const payload = {
                message:message,
                receiver_uid:data.uid,
                sender_uid:uid
            };

            if(message.length > 0){
                ({data, error} = await event.locals.sb.from("Messages").insert(payload).select().single());
                console.log(data, error);
                if(data){
                    throw redirect(307, `/messages/${data.id}`);
                }
            }
        }

    },

};
