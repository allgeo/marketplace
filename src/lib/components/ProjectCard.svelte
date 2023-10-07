<script>
    export let title;
    export let description;
    export let tag;
    export let user;
</script>

<div class="bg-red-300 ">
    <a href="/">
        <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secondary">
            <span class="font-medium text-black">{user}</span>
        </div>
    </a>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{tag}</p>
</div>