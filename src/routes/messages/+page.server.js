import { error } from "@sveltejs/kit";

export async function load(event){
    let id = event.locals.session.user.id;

    //Get rows, find one with provided id
    let { data, err} = await event.locals.sb.rpc("get_other_name", {my_uid:id});

    //No results, return 404
    if(data == null){
        throw error(404, 'Messages not found');
    }
    if(data.length <= 0){
        throw error(404, 'Messages not found');
    }

    //ouid = uid of other person (not current user)
    data.forEach(function(value, index){
        value["ouid"] = id === value["receiver_uid"] ? value["sender_uid"] : value["receiver_uid"]
    });

    //Save most recent messages only
    data.reverse();
    data = data.filter((value, index, array) => index === array.findIndex((t) => (
        t.ouid === value.ouid
    )));

    //DELETE or COMMENT in build
    console.log("Sent:", data);

    return{
        messages:data,
    };
}