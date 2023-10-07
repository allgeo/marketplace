<!--This page should display the users that've messaged this person (i.e portal to message room)-->

<script>
    export let data;
    console.log(data);
  </script>
  
  
  <div class="w-full mb-1">
    <div class="users">
        <ul>
            {#if data?.messages}
            <p class="mb-2 text-gray-400">Messages:</p>
            {#each data.messages as person}
            <a class="" href="/messages/{person.id}"> 
                <li>
                    Your message:{person.message}
                </li>
            </a>
            {/each}
            {/if}
        </ul>
    </div>
</div>