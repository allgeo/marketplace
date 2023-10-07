<script>
  export let data;
</script>


<div class="p-2 mb-2 bg-white border rounded-lg shadow-md w-fit border-lime-100">
  <!-- User avatar -->
  <div class="my-2">
    <label for="" class="text-xs text-gray-400">posted-by</label>
    <div class="flex items-center space-x-2">
        <a href="/">
            <div class="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-secondary">
                <span class="font-medium text-black">{data.post.name.charAt(0)}</span>
            </div>
        </a>
        <span class="text-sm text-gray-600">{data.post.name}</span>
    </div>
  </div>
  
  <!-- Latest update -->
  <div class="my-2">
    <label for="" class="text-xs text-gray-400">updated-at</label>
    <p class="">{data.post.updated_at}</p>
  </div>

  <!-- Description -->
  <div class="my-2">
    <label for="" class="text-xs text-gray-400">description</label>
    <p class="mt-">{data.post.description}</p>
  </div>

  <!-- Tag -->
  <div class="mt-2">
    <label for="" class="text-xs text-gray-400">tags</label><br>
    <span class="px-2 py-1 text-sm text-white rounded-md bg-lime-500">{data.post.tags}</span>
  </div>
</div>
