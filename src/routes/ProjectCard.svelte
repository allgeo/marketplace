<script>
    export let title;
    export let description;
    export let tag;
    export let userFirstLetter;
    export let user;
    export let views;
</script>

<div class="p-2 mb-2 bg-white border rounded-lg shadow-md border-lime-100">
    <!-- User avatar -->
    <div class="flex items-center space-x-2">
        <a href="/">
            <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secondary">
                <span class="font-medium text-black">{userFirstLetter}</span>
            </div>
        </a>
        <span class="text-sm text-gray-600">Posted by {user}</span>
        <span class="text-sm">Views: {views}</span>
    </div>
    
    <!-- Title -->
    <h2 class="mt-2 text-xl font-semibold ">{title}</h2>
    
    <!-- Description -->
    <p class="mt-2 ">{description}</p>
    
    <!-- Tag -->
    <div class="mt-2">
        <span class="px-2 py-1 text-sm text-black rounded-md bg-secondary">{tag}</span>
    </div>
</div>
