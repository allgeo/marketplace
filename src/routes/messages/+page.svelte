<!-- This page should display the users that've messaged this person (i.e portal to message room) -->
<script>
    export let data;
</script>

<div class="w-1/3 mb-4">
    <div class="users">
        <ul>
            {#if data?.messages}
            <p class="mb-2 text-lg font-semibold text-gray-400">All Messages</p>
                {#each data.messages as person}
                <a class="block p-4 mb-4 transition duration-300 ease-in-out bg-white rounded-lg shadow-md border-lime-100 hover:bg-gray-100" href="/messages/{person.id}">
                    <li class="flex items-center justify-between">
                        <div>
                            <span class="text-lg font-semibold text-gray-800">{person.name}</span><br>
                            <span class="text-sm text-gray-600">{person.message}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline-block w-6 h-6 ml-2 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </li>
                </a>
                
                {/each}
            {/if}
        </ul>
    </div>
</div>