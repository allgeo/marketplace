<script>
  import {enhance} from "$app/forms";
  export let data;

  </script>
  
  
  <div class="p-2 mb-2 bg-white border rounded-lg shadow-md w-fit border-lime-100">
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
      <label for="" class="mb-2 text-xs text-gray-400">description</label>
      <p class="mt-">{data.post.description}</p>
    </div>
  
    <!-- Tag -->
    <div class="mt-2">
      <label for="" class="mb-2 text-xs text-gray-400">tags</label>
      <span class="px-2 py-1 text-sm text-white rounded-md bg-lime-500">{data.post.tags}</span>
    </div>

    <div class="mt-2">
      {#if data?.post.uid === data.session.user.id}
        <form method="POST" action="?/edit" use:enhance>

          <label for="alias">Change display name:</label>
          <input type="text" name="alias"><br>

          <label for="description">Change description:</label>
          <textarea name="description"></textarea><br>

          <label for="new_tag">Add tag</label>
          <input type="text" name="new_tag"><br>

          <label for="bulk_tag">Replace ALL tags</label>
          <input type="text" name="bulk_tag"><br>

          <input type="submit" class="text-white bg-black">
        </form>
        <br>
        <form method="POST" action="?/cleartags" use:enhance>
          <input type="submit" value="Clear ALL user tags" class="text-white bg-black">
        </form>
      {/if}
    </div>

  </div>