<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';
	import { onDestroy, onMount } from 'svelte';

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider
		});
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithProvider('google');
				break;
			default:
				break;
		}
		cancel();
	};

	export let data;
	onMount(() => {
		if (data.session) {
			window.location.href = ('/');
		}
	});
</script>


<div class="max-w-4xl pt-8 ">
	<h1 class="font-bold text-9xl">
		Open-source <span class="text-7xl text-secondary"> Made</span> Easier!
	</h1>
	<p class="py-6 text-xl font-thin">
		Start your open source contribution today.
	</p>
	<div class="flex gap-4 justify-left">
		<form action="?/login" method="POST" class="">
			<form class="" method="POST" use:enhance={submitSocialLogin}>
				<button class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500" formaction="?/login&provider=google">
					sign-in
				</button>
			</form>
		</form>
	</div>
</div>

