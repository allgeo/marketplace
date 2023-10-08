import { error } from "@sveltejs/kit";

export async function load(event){
    let id = event.params.slug;
    let { data, err } = await event.locals.sb.select().eq('id', id);
    console.log(data);
}

export const actions = {
    talk: async (event) => {
        //Create post in db if logged in, etc.
        const formData = await event.request.formData();
        const ouid = formData.get('uid');
        const uid = event.locals.session.user.id;

        let { data, err} = await event.locals.sb.rpc("get_messages", {my_uid:uid}).or(`receiver_uid.eq.${ouid},sender_uid.eq.${ouid}`);
        
        return{
            messages:data,
        };

    },
    send: async(event) =>{
        const formData = await event.request.formData();
        let message = formData.get('message'),
        receiver_uid = formData.get('ouid'),
        sender_uid = event.locals.session.user.id;

        const payload = {   
            message: message,
            receiver_uid: receiver_uid,
            sender_uid: sender_uid,
        };

        const { error } = await event.locals.sb.from("Messages").insert(payload);

        if(error){
        console.log(error);
        }

        let { data, err} = await event.locals.sb.rpc("get_messages", {my_uid:uid}).or(`receiver_uid.eq.${ouid},sender_uid.eq.${ouid}`);
        
        return{
            messages:data,
        };
    }
}