<script>
	import { sessionStore } from '$lib/store/sessionStore';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import ProjectCard from './ProjectCard.svelte';
	import UserCard from './UserCard.svelte';

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

<!-- ORIGINAL  -->
<!-- <div class="grid grid-cols-3 gap-4">
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
</div> -->

<p class="flex justify-center mb-2 bg-black text-rose-500">The borders are there to visualize the grid system, delete after</p>
<!-- NEW FLEX-GRID SYSTEM -->

<div class="grid grid-cols-3 grid-rows-1 gap-4">
    <!-- Left div (independent) -->
    <div class="col-span-2 col-start-1 overflow-hidden border border-blue-100">
        <div class="flex flex-wrap overflow-hidden">
			<!-- Search for projects -->
			<div class="w-full mb-1">
					{#if data.session}
						<h2 class="mb-4 text-4xl">
							Search for Projects
						</h2>
					{/if}
					<div class="mb-4 search">
						<form method="post" action="?/search" class="flex items-center space-x-2">
							<input type="text" name="terms" class="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-secondary" placeholder="E.g, Rust...">
							<button type="submit" class="px-4 py-2 rounded bg-secondary">
								Search
							</button>
						</form>
					</div>
			</div>
			<!-- Projects results -->
			<div class="w-full mb-1">
				<div class="posts">
					<ul>
						{#if form?.results}
						<p class="mb-2 text-gray-400">Search Results</p>
						{#each form.results as result}
						<a class="" href="/forum/{result.id}">
							<li class="text-blue-700">
								<ProjectCard
									title={result.title}
									description={result.desc}
									tag={result.tags}
									userFirstLetter={result.name.charAt(0)}
									user={result.name}
								/>
							</li>
						</a>
						{/each}
						{/if}
					</ul>
				</div>
			</div>
		</div>
    </div>

    <!-- Right div (independent) -->
    <div class="col-span-1 col-start-3 overflow-hidden border border-blue-100">
        <div class="flex flex-wrap overflow-hidden">
			<!-- Search for user -->
			<div class="w-full mb-1">
				<h2 class="mb-4 text-4xl">
					Search for User
				</h2>
				<div class="mb-4 user">
					<form method="post" action="?/searchuser" class="flex items-center space-x-2">
						<input type="text" name="terms" class="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-secondary" placeholder="E.g, Eric...">
						<button type="submit" class="px-4 py-2 rounded bg-secondary">
							Search
						</button>
					</form>
				</div>
			</div>
			<!-- User results -->
			<div class="w-full mb-1">
				<div class="users">
					<ul>
						{#if form?.user}
						<p class="mb-2 text-gray-400">Search Results</p>
						{#each form.user as user}
						<a class="" href="/user/{user.id}"> 
							<li>
								<UserCard
									description={user.description}
									tag={user.tags}
									userFirstLetter={user.name.charAt(0)}
									user={user.name}
								/>
							</li>
						</a>
						{/each}
						{/if}
					</ul>
				</div>
			</div>
		</div>
    </div>
</div>

