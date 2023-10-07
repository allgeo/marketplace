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
		console.log($sessionStore);
		data = $sessionStore;
	}

	function goMain(){
		goto('/');
	}

</script>

<!-- <nav class="flex flex-col px-6 py-4 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-center">
	<div class="mb-2 sm:mb-0">
	  <button
		on:click={goMain}
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
  </nav> -->
  
  <header class="bg-white">
    <nav class="flex items-center justify-between p-6 px-8 mx-auto max-w-[90rem]">
      <div class="flex flex-1">
        <a href="/" class="-m-1.5 p-1.5">
           <span class="text-lg text-white bg-black">Marketplace</span> 
          <!-- <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
        </a>
      </div>
      {#if data}
        <div class="flex gap-x-12">
            <LinkUnderlined text="home" href="/" />
            <LinkUnderlined text="about-us" href="/about" />
        </div>
        <div class="flex items-center justify-end flex-1 gap-x-6">
			<form action="/logout" method="POST" use:enhance={submitLogout}>
				<button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out bg-red-300 rounded-md hover:bg-red-400">
					<span class="px-4 py-4"> sign-out </span>
				  </button>
			</form>
			<a href="#">
				<div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-black rounded-full">
					<span class="font-medium text-white">{data.user.user_metadata.name.charAt(0)}</span>
				</div>
			</a>
		</div>
		
      {:else}
	  <div class="flex gap-x-12">
		<LinkUnderlined text="about-us" href="/about" />
	</div>
	{#if $page.url.pathname != "/login"}
	<div class="flex items-center justify-end flex-1 gap-x-6">
		<form action="/login" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
				<span class="px-4 py-4"> sign-in </span>
			  </button>
		</form>
	</div> 
	{/if}

    {/if}
    </nav>
  </header> 
  