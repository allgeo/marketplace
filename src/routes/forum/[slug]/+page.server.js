import { error, redirect} from "@sveltejs/kit";


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
    edit: async (event) =>{
        let id = event.params.slug;
        const formData = await event.request.formData();

        let {data, error} = await event.locals.sb.rpc("get_posts_with_user_id").eq("id", id).single();

        if(data){
            if(formData.get('title').length > 0){
                data.title = formData.get('title');
            }
            if(formData.get('description').length > 0){
                data.description = formData.get('description');
            }
            if(formData.get('tags').length > 0){
                data.tags = formData.get('tags');
            }
            if(formData.get('url').length > 0){
                data.url = formData.get('url');
            }
    
            delete data['uid'];
            delete data['num_id'];
            delete data['created_at'];
            delete data['updated_at'];
            delete data['views'];
            delete data['id'];
    
            ({error} = await event.locals.sb.from("Posts").update(data).eq('id',id));
            if(error){
                console.log(error);
            }
        }
    },
    delete: async(event)=>{
        let id = event.params.slug;
        const formData = await event.request.formData();

        let {error} = await event.locals.sb.from("Posts").delete().eq('id', id);
        if(error){
            console.log(error);
        }
        else{
            throw redirect(303, "/");
        }

    }
}