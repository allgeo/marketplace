<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { sessionStore } from '$lib/store/sessionStore';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import LinkUnderlined  from './LinkUnderlined.svelte';	
	import {page} from "$app/stores";


	export let data;

	const submitLogout = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();

		if (error) {
			console.log(error);
		}

		cancel();
		window.location.href = '/login';
	};

	$: if ($sessionStore) {
		//console.log($sessionStore);
		data = $sessionStore;
	}

	function goMain(){
		goto('/');
	}

</script>
  
  <header class="">
    <nav class="flex items-center justify-between py-6 mx-auto max-w-[90rem]">
      <div class="flex flex-1">
        <a href="/" class="-m-1.5 p-1.5 ">
			<!-- <img class="inline-block w-auto h-6" src="/branch.png" alt=""> -->
			<span class="text-lg font-bold bg-black text-secondary">marketplace</span> 
        </a>
      </div>
      {#if data}	
        <div class="flex rounded gap-x-12">
            <LinkUnderlined text="Home" href="/" />
            <LinkUnderlined text="About us" href="/about" />
        </div>
        <div class="flex items-center justify-end flex-1 gap-x-6">
			<a href="/messages">
				<button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
					<span class="px-4 py-4"> messages </span>
				</button>
			</a>
			<a href="/create">
				<button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
					<span class="px-4 py-4"> post </span>
				</button>
			</a>
			<form action="/logout" method="POST" use:enhance={submitLogout}>
				<button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out bg-red-300 rounded-md hover:bg-red-400">
					<span class="px-4 py-4"> sign-out </span>
				  </button>
			</form>
			<a href="#">
				<!-- <img class="w-10 h-10 rounded-full ring-2 ring-secondary" src="https://source.boringavatars.com/beam/44/Stefan?colors=a3e635,cbf684,d0ff84" alt="avatar"> -->
				<!-- <img class="w-10 h-10 rounded-full ring-2 ring-secondary" src="https://source.boringavatars.com/beam/44/Stefan?colors=a3e635,cbf684,d0ff84" alt="avatar"> -->

				<div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-black rounded-full">
					<span class="font-medium text-white">{data.user.user_metadata.name.charAt(0)}</span>
				</div>
			</a>
		</div>
		
      {:else}
			<!-- <div class="flex items-center justify-end flex-1 gap-x-6">
				{#if $page.url.pathname != "/login"}
				<form action="/login" method="POST" use:enhance={submitLogout}>
					<button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
						<span class="px-4 py-4"> sign-in </span>
					</button>
				</form>
				{/if}
			</div> -->

    	{/if}
    </nav>
  </header> 
  