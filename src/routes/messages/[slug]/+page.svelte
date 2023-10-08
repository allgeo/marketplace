
<script>
    export let data;
    export let form;

    console.log(data);
    console.log(form);
</script>

<div class="w-full mb-1">
    <div class="users">
        <ul>
            {#if form?.messages}
            <h1 class="text-xl">Messenger: {form.messages[0].name}</h1>
            <br>
            {#each form.messages as person}
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