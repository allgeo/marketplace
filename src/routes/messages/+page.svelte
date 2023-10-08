<!--This page should display the users that've messaged this person (i.e portal to message room)-->

<script>
	import { tick } from 'svelte';

    export let data;
    //console.log(data);
    let uid = "";
    let form;
    async function test(ouid){
        uid = ouid;
        await tick();
        form.requestSubmit()
    }
  </script>
  
  <form method="POST" action="/messages/messenger?/talk" bind:this={form}>
    <input type="hidden" name="uid" bind:value={uid}>
    </form>

  <div class="w-full mb-1">
    <div class="users">
        <ul>
            {#if data?.messages}
            <p class="mb-2 text-gray-400">Messages:</p> <!--Change to some kinda clickable thing isntead for accessability-->
            {#each data.messages as person}
                <li on:click={test(person.ouid)}>
                    {person.name}: <br>
                    {person.message}
                </li>
            {/each}
            {/if}
        </ul>
    </div>
</div>