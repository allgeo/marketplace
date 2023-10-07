import { supabaseClient } from "$lib/supabase";

export async function load(){
    const { data } = await supabaseClient.from("Forum").select();
    return{
        entries: data ?? [],
    };
}

function parseTerms(terms){
    //Add support for not, or, etc. (Default is AND for every term in search)
    let t = terms.split(" ");
    let output = "";
    t.forEach(function(item, index, arr){//"AND"s all terms
        if(index === 0){
            output += item;
        }
        else{
            output += " & " + item;
        }
    });

    return output;
}

export const actions = {
    search: async (event) => {
        //Get posted form data
		const formData = await event.request.formData();
        const query = formData.get('terms');
        let data = [];
        //If query exists
        if(query != null){
            //console.log(parseTerms(query));
            //Select using parsed query
            data = await event.locals.sb.from("Posts").select().textSearch('fts', parseTerms(query));
        }
        //console.log(data.data);
        return{
            results: data.data,
        };
	},
    searchuser: async (event) => {
        //Get posted form data
		const formData = await event.request.formData();
        const query = formData.get('terms');
        let data = [];
        //If query exists

        if(query != null){
            //console.log(parseTerms(query));
            //Select using parsed query
            data = await event.locals.sb.from("Users").select().textSearch('fts', parseTerms(query));
        }
        return{
            user: data.data,
        };
	}
};