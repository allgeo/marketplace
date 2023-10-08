<script>
  import {enhance} from "$app/forms";
  export let data;

  function formatTimestamp(timestamp) {
    const dateObj = new Date(timestamp);
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = dateObj.toISOString().split('T')[0];
    return `${time}, ${date}`;
  }
  console.log(data);
  let tagsArray = data.post.tags.split(/,| /).filter(tagItem => tagItem.trim() !== '');

</script>

<div class="flex justify-center">
  <div class="w-2/3 p-2 mb-2 bg-white border rounded-lg shadow-md border-lime-100">
    
    <div class="flex justify-between">
      <!-- Title -->
      <div class="my-2">
        <label for="" class="text-xs text-gray-400">Title</label>
        <p class="">{data.post.title}</p>
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

      {#if data.post.uid === data.session.user.id}
      <div class="my-2 bg-gray-300"> <!--TEMP GRAY BG FOR VISIBLITY, REPLACE CSS W/SMTH THAT LOOKS GOOD INSTEAD-->
        <form method="POST" action="?/edit" use:enhance>
          <label for="title" class="block mb-2 font-bold rounded order-gray-300 ">Title</label>
          <input type="text" name="title">
          <label for="description" class="block mb-2 font-bold rounded order-gray-300 ">Description</label>
          <textarea name="description"></textarea>
          <label for="tags" class="block mb-2 font-bold rounded order-gray-300 ">Tags</label>
          <input type="text" name="tags">
          <label for="url" class="block mb-2 font-bold rounded order-gray-300 ">URL</label>
          <input type="text" name="url">
          <div class="flex justify-start mt-4">
            <button type="submit" class="px-1 py-1 text-sm text-black duration-300 ease-in-out rounded-md bg-secondary hover:bg-lime-500">
                <span class="px-4 py-4"> Edit post </span>
              </button>
        </div>
        </form>
      </div>
      {/if}

  </div>
  
</div>
