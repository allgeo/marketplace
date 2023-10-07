<script>
	import { sessionStore } from '$lib/store/sessionStore';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data;
	export let form;

	onMount(() => {
		sessionStore.set(data.session);
		setTimeout(() => {
			sessionStore.set(data.session);
			if (!data.session) {
				window.location.href = '/login';
			}
		}, 500);

	});

	// React to changes in sessionStore
	$: if ($sessionStore) {
		console.log($sessionStore);
	}
</script>



	<!-- <div class="flex justify-center">
		{#if data.session}
		  <p>Welcome, <span class="px-2 py-1 text-green-600 rounded-md"> {data.session.user.user_metadata.name}</span>. Start your open source contribution today!</p>
		{/if}
	  </div>

	<div class="search">
		<h1>Search for postings:</h1>
		<form method="post" action="?/search">
			<input type="text" name="terms" style="border: 1px solid">
			<input type="submit" Value="Search">
		</form>
		
		<br>
		<h2>Search for users:</h2>
		<form method="post" action="?/searchuser">
			<input type="text" name="terms" style="border: 1px solid">
			<input type="submit" Value="Search">
		</form>
	</div>

	<div class="posts">
		<ul>
			{#if form?.results}
			<p>Search results:</p>
			{#each form.results as result}
			<li>
				📮<a class="underline" href="/forum/{result.id}">{result.title}</a>
			</li>
			{/each}
			{/if}
		</ul>
	</div> -->

	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-2 p-6 ">
			{#if data.session}
			<div class="">
				<h2 class="text-5xl">
					Search For Projects:
				</h2>
			</div>
			{/if}
	
			<div class="p-6">
				<div class="mb-4 search">
					<form method="post" action="?/search" class="flex items-center space-x-2">
						<input type="text" name="terms" class="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-secondary" placeholder="Search...">
						<button type="submit" class="px-4 py-2 rounded bg-secondary">
							Search
						</button>
					</form>
				</div>
				
				<div class="posts">
					<ul>
						{#if form?.results}
						<p class="text-gray-700">Search Results:</p>
						{#each form.results as result}
						<li class="text-blue-700">
							<a class="underline" href="/forum/{result.id}">{result.title}</a>
						</li>
						{/each}
						{/if}
					</ul>
				</div>
			</div>

			<h2 class="text-5xl">
				Search For Users:
			</h2>

			<div class="p-6">
				<div class="mb-4 user">
					<form method="post" action="?/searchuser" class="flex items-center space-x-2">
						<input type="text" name="terms" class="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-secondary" placeholder="Search users...">
						<button type="submit" class="px-4 py-2 rounded bg-secondary">
							Search
						</button>
					</form>
				</div>
				
				<div class="users">
					<ul>
						{#if form?.user}
						<p class="text-gray-700">User search results</p>
						{#each form.user as user}
						<li>
							<a class="underline" href="/user/{user.id}">{user.name}</a>
							<p>Description: {user.description}</p>
							<p>Tags: {user.tags}</p>
						</li>
						{/each}
						{/if}
					</ul>
				</div>
			</div>


		</div>
	</div>
