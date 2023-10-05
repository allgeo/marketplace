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

<div>
	<div class="flex justify-center">
		{#if data.session}
		  <p>Welcome, <span class="px-2 py-1 text-green-600 rounded-md"> {data.session.user.user_metadata.name}</span>. Start your open source contribution today!</p>
		{/if}
	  </div>

	<div class="search">
		<form method="post" action="?/search">
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
	</div>
	  
</div>
