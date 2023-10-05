<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';
	import { onDestroy, onMount } from 'svelte';
	import { sessionStore } from '$lib/store/sessionStore';
	import { goto } from '$app/navigation';

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

<section class="h-screen">
	<div class="px-6 py-24 ">
		<div class="flex justify-center">
			<!-- <h1 class="mb-4 text-xl font-semibold">Login with Google!</h1> -->
		</div>
		<div class="flex flex-wrap items-center justify-center ">
			<!-- Right column container with form -->
			<div class="md:w-8/12 lg:ml-6 lg:w-5/12">
				<form action="?/login" method="POST" class="">
					<div class="flex items-center justify-center">
						<form class="" method="POST" use:enhance={submitSocialLogin}>
							<button class="flex items-center justify-center underline underline-offset-2" formaction="?/login&provider=google">
								<img
									src="google.png"
									class="h-12 mr-2"
									alt=""
								/>
								Signin with Google
							</button>
						</form>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>

</style>
