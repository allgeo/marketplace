import { error } from "@sveltejs/kit";
import { goto } from '$app/navigation';

export async function load(event){

    let id = event.params.slug;
    let uid = event.locals.session.user.id;

    //Get one entry from message table
    let { data, err } = await event.locals.sb.from('Messages').select().eq('id', id);

    //Ensure query worked
    if(data == null){
        throw error(404, 'Messages not found');
    }
    if(data.length <= 0){
        throw error(404, 'Messages not found');
    }
    let ouid = null;

    //Prevent people from accessing other ppls logs by using the url
    if(data[0].receiver_uid !== uid && data[0].sender_uid !== uid){
        throw error(404, 'Messages not found')
    }

    ouid = data[0].receiver_uid === uid ? data[0].sender_uid : data[0].receiver_uid;

    if(ouid == null){
        throw error(404, 'Messages not found');
    }

    //Get the messages, but only those that belong to this convo
    ({data, err} = await event.locals.sb.rpc("get_messages", {my_uid:uid}).or(`receiver_uid.eq.${ouid},sender_uid.eq.${ouid}`));

    return{
        messages:data,
    };
    
}

export const actions = {
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

    }
}