<script>
    export let data;
</script>


<h1 class="text-xl font-bold">{data.post.title}</h1>

<br>

<p>Posted by: {data.post.name}</p>

<br>

<div class="forum_posts">
  <p>Last update: {data.post.updated_at}</p>
  <br>
  <p>Tags: {data.post.tags}</p>
  <br>
  <p>{data.post.desc}</p>
  <br>



</div>
