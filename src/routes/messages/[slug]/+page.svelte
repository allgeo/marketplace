
<script>
    export let data;

</script>

<div class="w-full mb-1">
    <div class="users">
        <ul>
            {#if data?.messages}
            <h1 class="text-xl">Messenger: {data.messages[0].name}</h1>
            <br>
            {#each data.messages as person}
                <li>
                    {person.name}
                    <br>
                    {person.message}
                </li>
            {/each}
            {/if}
        </ul>
    </div>
</div>