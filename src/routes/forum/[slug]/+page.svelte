<script>
  import {enhance} from "$app/forms";
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  export let data;

  function formatTimestamp(timestamp) {
    const dateObj = new Date(timestamp);
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = dateObj.toISOString().split('T')[0];
    return `${time}, ${date}`;
  }

  let tagsArray = data.post.tags.split(/,| /).filter(tagItem => tagItem.trim() !== '');

</script>

<div class="flex justify-center">
  <div class="w-2/3 p-2 mb-2 bg-white border rounded-lg shadow-md border-lime-100">
    
    <div class="flex justify-between">
      <!-- Title -->
      <div class="my-2">
        <label for="" class="text-xs text-gray-400">Title</label>
        <p class="font-bold">{data.post.title}</p>
      </div>
      
      <!-- User avatar -->
      <div class="my-2">
        <div class="flex items-center space-x-2">
          <a href="/user/{data.post.num_id}">
        <span for="" class="text-xs text-gray-400">by</span>
        <span class="text-sm text-gray-600">{data.post.name}</span>
            <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secondary">
              <span class="font-medium text-black">{data.post.name.charAt(0)}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Description -->
    <div class="my-2">
      <label for="" class="text-xs text-gray-400">description</label>
      <p class="">{data.post.description}</p>
    </div>
  
    <!-- URL -->
    <div class="my-2">
      <label for="" class="text-xs text-gray-400">URL</label>
      <a class=" hover:underline" target="_blank" href={data.post.url}>{data.post.url}</a>
    </div>
  
    <!-- Tag -->
    <div class="mt-2">
      {#each tagsArray as tagItem}
          <span class="px-2 py-1 text-[10px] text-black rounded-md bg-secondary mr-2">{tagItem}</span>
      {/each}
    </div>
      <!-- Latest update -->
      <div class="my-2">
        <label for="" class="text-xs text-gray-400">updated-at</label>
        <p class="">{formatTimestamp(data.post.updated_at)}</p>
      </div>

      <!-- EDIT POST -->
      {#if data.post.uid === data.session.user.id}
      <Accordion class="mt-4 border rounded-lg">
        <AccordionItem open>
          <svelte:fragment slot="summary"><p class="mt-2 text-gray-600">Update post</p></svelte:fragment>
          <svelte:fragment slot="content">
              <form method="POST" action="?/edit" use:enhance>
                  <label for="title" class="mb-2 text-xs text-gray-400" >Change title</label>
                  <input type="text" name="title" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="New project name"><br>
      
                  <label for="description" class="mb-2 text-xs text-gray-400" >Change description</label>
                  <textarea name="description" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="New project description"></textarea><br>
      
                  <label for="tags" class="mb-2 text-xs text-gray-400">Change tag</label>
                  <input type="text" name="tags" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="New project tags"><br>
      
                  <label for="url" class="mb-2 text-xs text-gray-400">Change URL</label>
                  <input type="text" name="url" class="w-full px-3 py-2 mb-2 border rounded focus:outline-secondary" placeholder="New project URL"><br>
                      
                  <div class="flex justify-between mt-2">
                    <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
                      <span class="px-4 py-4">Submit</span>
                    </button>
      
                    <form method="post" action="?/delete">
                      <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out bg-red-300 rounded-md hover:bg-red-400 ">
                        <span class="px-2 py-4">Delete post</span>
                      </button>
                    </form>
                  </div>
                </form>
              </svelte:fragment>
            </AccordionItem>
          </Accordion>
      {/if}

  </div>

</div>


