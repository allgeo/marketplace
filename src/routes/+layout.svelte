<script>
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data;
	//console.log(data.session);

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="dot">
	<Navbar data={data.session} />
	<main class="max-w-[90rem] h-screen mx-auto mt-8"> 
	  <slot />
	</main>	
</div>

