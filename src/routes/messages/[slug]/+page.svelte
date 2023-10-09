<script>
    import { enhance } from '$app/forms';
    export let data;

    // Send other person's uid to the server to send the msg
    let ouid = data.messages[0].receiver_uid === data.session.user.id ? data.messages[0].sender_uid : data.messages[0].receiver_uid;
</script>

<div class="w-1/2 p-4 mb-4 bg-gray-100 rounded-lg">
    <div class="users">
        <ul >
            {#if data?.messages}
            <h1 class="mb-4 text-xl font-semibold">{data.othername}</h1>
            {#each data.messages as person}
                <li class="flex items-center justify-between">
                    <div>
                        <span class="text-xs font-semibold text-gray-400">{person.name}</span><br> <!--show "you" instead of pereson.name for the person receiving? -->
                        <span class="text-sm ">{person.message}</span>
                    </div>
                </li>
            {/each}
            {/if}
        </ul>
        <form method="POST" action="?/send" use:enhance class="flex mt-2">
            <input type="hidden" name="ouid" bind:value="{ouid}">
            <textarea name="message" class="block w-full p-2 mr-2 text-sm bg-gray-300 rounded-lg focus:outline-secondary" placeholder="Enter your message"></textarea>
            <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
                <span class="px-4 py-4"> send </span>
            </button>
        </form>
    </div>
</div>
