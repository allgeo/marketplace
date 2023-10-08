
<script>
    import {enhance} from '$app/forms';
    export let data;

    //Send other person's uid to server to send the msg
    let ouid = data.messages[0].receiver_uid === data.session.user.id ? data.messages[0].sender_uid : data.messages[0].receiver_uid;

</script>

<div class="w-full mb-1">
    <div class="users">
        <ul>
            {#if data?.messages}
            <h1 class="text-xl">Messenger: {data.messages[0].name}</h1>
            <br>
            {#each data.messages as person}
                <li>
                    <span>{person.name}:</span>
                    <br>
                    <span>{person.message}</span>
                </li>
            {/each}
            {/if}
        </ul>
        <form method="POST" action="?/send" use:enhance>
            <input type="hidden" name="ouid" bind:value="{ouid}">
            <textarea name="message" class="block text-sm  bg-gray-300"></textarea>
            <input type="submit">
        </form>
    </div>
</div>