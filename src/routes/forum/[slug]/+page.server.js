import { error } from "@sveltejs/kit";

export async function load(event){
    let id = event.params.slug;

    //Get rows, find one with provided id
    const { data } = await event.locals.sb.rpc("get_posts_with_user_id").eq("id", id);
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
        const { error } = await event.locals.sb.from("Posts").insert(payload);
        if(error){
            console.log(error);
        }
    },
    edit: async (event) =>{
        let id = event.params.slug;
        const formData = await event.request.formData();

        let {data, error} = await event.locals.sb.rpc("get_posts_with_user_id").eq("id", id).single();
        console.log(data);
        data.title = "123123123";
        console.log(data);
        let title = formData.get('title').length > 0 ? formData.get('title') : data.title;
    }
}