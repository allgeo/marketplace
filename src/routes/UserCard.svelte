<script>
    export let description;
    export let tag;
    export let userFirstLetter;
    export let user;
</script>

<div class="p-2 mb-2 bg-white border rounded-lg shadow-md border-lime-100">
    <!-- User avatar -->
    <div class="flex items-center space-x-2">
        <a href="/">
            <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secondary">
                <span class="font-medium text-black">{userFirstLetter}</span>
            </div>
        </a>
        <span class="text-sm ">{user}</span>
    </div>
    
    <!-- Description/Bio -->
    <p class="mt-2 ">{description}</p>
    
    <!-- Tag -->
    <div class="mt-2">
        <span class="px-2 py-1 text-sm text-white rounded-md bg-lime-500">{tag}</span>
    </div>
</div>
