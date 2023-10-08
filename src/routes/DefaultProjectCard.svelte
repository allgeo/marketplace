<!-- DefaultProjectCard.svelte -->
<script>
    export let title;
    export let description;
    export let link;
    export let tag;
    export let userFirstLetter;
    export let user;
    export let views;

    let tagsArray = tag.split(/,| /).filter(tagItem => tagItem.trim() !== '');
</script>

    <div class="h-40 p-2 mb-1 rounded-md bg-lime-100">
        <div class="flex items-center justify-between">
            <!-- Left side - user avatar and information -->
            <div class="flex items-center">
                <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-black rounded-full">
                    <span class="font-medium text-white">{userFirstLetter}</span>
                </div>
                <span class="ml-2 text-sm text-gray-600">Posted by {user}</span>
            </div>
          
            <!-- Right side - views -->
            <div class="flex items-center">
                <span class="mr-1 text-sm">{views}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </div>
        
        <!-- Title -->
        <h2 class="mt-2 font-semibold text-md ">{title}</h2>
        
        <!-- Description -->
        <!-- <p class="mt-2 ">{description}</p> -->
        
        <!-- Tag -->
        <div class="mt-2">
            {#each tagsArray as tagItem}
                <span class="px-2 py-1 text-[10px] text-black rounded-md bg-secondary mr-2">{tagItem}</span>
            {/each}
        </div>
    </div>
