<script>
  import {enhance} from "$app/forms";
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';


  export let data;
</script>


  <div class="flex justify-center">
    <div class="w-1/3 p-2 mb-2 bg-white border rounded-lg shadow-md border-lime-100">
      <!-- User avatar -->
      <div class="my-2">
        <label for="" class="mb-2 text-xs text-gray-400 ">name</label>
        <div class="flex items-center space-x-2">
            <a href="/">
                <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secondary">
                    <span class="font-medium text-black">{data.post.name.charAt(0)}</span>
                </div>
            </a>
            <span class="text-sm text-gray-600">{data.post.name}</span>
        </div>
      </div>
    
      <!-- Description -->
      <div class="my-2">
        <label for="" class="mb-2 text-xs text-gray-400">bio</label>
        <p class="mt-">{data.post.description}</p>
      </div>
    
      <!-- Tag -->
      <div class="mt-2">
        <label for="" class="mb-2 text-xs text-gray-400">tags</label>
        <span class="px-2 py-1 text-sm text-white rounded-md bg-lime-500">{data.post.tags}</span>
      </div>
      
      <!-- EDIT Accordian drop down-->
      <!-- Accordian test -->
      <Accordion class="mt-4 border rounded-lg">
        <AccordionItem open>
          <svelte:fragment slot="summary"><p class="mt-2 text-gray-600">Edit Profile</p></svelte:fragment>
          <svelte:fragment slot="content">
            <div class="edit-profile">
              {#if data?.post.uid === data.session.user.id}
                <form method="POST" action="?/edit" use:enhance>
      
                  <label for="alias" class="mb-2 text-xs text-gray-400" >Change display name</label>
                  <input type="text" name="alias" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="Bob123"><br>
      
                  <label for="description" class="mb-2 text-xs text-gray-400" >Change bio</label>
                  <textarea name="description" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="I love opensource!"></textarea><br>
      
                  <label for="new_tag" class="mb-2 text-xs text-gray-400">Add tag</label>
                  <input type="text" name="new_tag" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="datascience, machine-learning"><br>

                  <label for="bulk_tag" class="mb-2 text-xs text-gray-400">Replace all tags</label>
                  <input type="text" name="bulk_tag" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="Bob123">
                      
                  <div class="flex justify-between mt-2">
                    <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
                      <span class="px-4 py-4"> submit </span>
                    </button>
  
                    <form method="POST" action="?/cleartags" use:enhance>
                      <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out bg-red-300 rounded-md hover:bg-red-400 ">
                        <span class="px-2 py-4">clear all tags</span>
                      </button>
                    </form>
                  </div>

                  
                </form>
              {:else}

      <form method="POST" action="?/msg">
        <label for="message">Send a message:</label>
        <textarea name="message" class="block w-full rounded-lg text-sm bg-gray-300"></textarea>
        <input type="submit" value="Send" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
      </form>

      {/if}
              
    </div>
          </svelte:fragment>
        </AccordionItem>
      </Accordion>


    </div>
</div>