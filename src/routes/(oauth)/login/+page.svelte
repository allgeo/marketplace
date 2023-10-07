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


<div class="relative max-w-6xl pt-8">
	<h1 class="font-bold text-[10rem] leading-none ">
	  <span class=" leading"> Open-source</span>
	  <span class="text-black leading text-7xl bg-secondary"> Made</span> Easier!
	</h1>
	<div class="py-6 ">
	  <p class="text-xl font-thin w-fit">Start your open source contribution today.</p>
	</div>
  
	<div class="flex gap-4 justify-left">
	  <form action="?/login" method="POST" class="">
		<form class="" method="POST" use:enhance={submitSocialLogin}>
		  <button class="px-1 py-1 text-lg font-bold duration-300 ease-in-out bg-black text-secondary hover:text-lime-500" formaction="?/login&provider=google">
			sign-in
		  </button>
		</form>
	  </form>
	</div>
  
	<img src="/git-branch.png" alt="" class="left-[47.8rem] top-[10.5rem] absolute lg:block md:hidden">


  
	<div class="absolute rounded-full bg-lime-200 -bottom-8 left-20 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
  </div>
  

