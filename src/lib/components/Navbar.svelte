<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { sessionStore } from '$lib/store/sessionStore';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	let data;

	const submitLogout = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();

		if (error) {
			console.log(error);
		}

		cancel();
		window.location.href = '/login';
	};

	$: if ($sessionStore) {
		console.log($sessionStore);
		data = $sessionStore;
	}

	console.log(data)
</script>

<nav class="flex flex-col px-6 py-4 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-center">
	<div class="mb-2 sm:mb-0">
	  <button
		on:click={() => {
		  goto('/');
		}}
		class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
	  >
		Marketplace
	  </button>
	</div>
	{#if data}
	  <div class="text-center sm:flex sm:justify-center sm:items-center">
		<a href="/about" class="mb-2 text-lg no-underline text-blue-dark sm:mb-0">About Us</a>
	  </div>
	  <div class="flex items-center">
		<form
		  action="/logout"
		  method="POST"
		  use:enhance={submitLogout}
		  class="text-lg no-underline text-grey-darkest hover:text-blue-dark"
		>
		  <button
			type="submit"
			class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-rose-200 hover:bg-gray-400"
		  >Logout</button>
		</form>
		<button class="ml-4 text-lg no-underline text-grey-darkest hover:text-blue-dark">
		  {data.user.user_metadata.name}
		</button>
	  </div>
	{:else}
	  <div class="flex items-center justify-center">
		<a href="/about" class="text-lg no-underline text-blue-dark">About Us</a>
	  </div>
	{/if}
  </nav>
  
