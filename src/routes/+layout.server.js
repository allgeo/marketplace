import { getServerSession } from "@supabase/auth-helpers-sveltekit"

export async function load(event) {
	console.log("Ran layout load")
	let session = await getServerSession(event);
	
	return {
		session: session,
	}
}
