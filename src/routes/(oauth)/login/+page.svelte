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


<div class="relative max-w-6xl pt-8">
	<h1 class="font-bold text-[10rem] leading-none ">
	  <span class=" leading"> Open-source</span>
	  <span class="text-black leading text-7xl bg-secondary"> Made</span> Easier!
	</h1>
	<div class="py-6 ">
	  <p class="text-xl font-thin w-fit">Start your open source journey today.</p>
	</div>
  
	<div class="flex gap-4 justify-left">
		<form class="" method="POST" use:enhance={submitSocialLogin}>
		  <button class="px-1 py-1 text-lg font-bold duration-300 ease-in-out bg-black text-secondary hover:text-lime-500" formaction="?/login&provider=google">
			sign-in
		  </button>
		</form>
	  </div>
	  
  
	<!-- <img src="/git-branch.png" alt="" class="left-[47.8rem] top-[10.5rem] absolute lg:block md:hidden"> -->
	<!-- <div class="absolute rounded-full bg-lime-200 bottom-52 right-20 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div> -->
	
    <img src="./branch-face.png" class="absolute w-auto sm:hidden lg:block -bottom-32 -right-56 h-96" alt="">
	

	<!-- <div class="absolute bottom-96 right-96">
		<svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><mask id=":rq:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#:rq:)"><rect width="36" height="36" fill="#bffa36"></rect><rect x="0" y="0" width="36" height="36" transform="translate(6 -2) rotate(296 18 18) scale(1.2)" fill="#c0e289" rx="6"></rect><g transform="translate(0 -4) rotate(6 18 18)"><path d="M15 21c2 1 4 1 6 0" stroke="#000000" fill="none" stroke-linecap="round"></path><rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
        <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><mask id=":rj:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#:rj:)"><rect width="36" height="36" fill="#94b053"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-4 8) rotate(168 18 18) scale(1)" fill="#bffa37" rx="36"></rect><g transform="translate(0 4) rotate(-8 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
        <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><mask id=":r1p:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#:r1p:)"><rect width="36" height="36" fill="#caf729"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-3 -3) rotate(67 18 18) scale(1.1)" fill="#bffa36" rx="36"></rect><g transform="translate(-3 -6) rotate(7 18 18)"><path d="M15 20c2 1 4 1 6 0" stroke="#000000" fill="none" stroke-linecap="round"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
	</div> -->

  </div>
  

