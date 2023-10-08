<script>
  export let href;
  export let text;
</script>

<a href={href} class="text-sm transition-all duration-300 ease-in-out group ">
  <span class="rounded bg-slate-100 w-fit py-1 px-2 bg-gradient-to-r from-secondary to-lime-500 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_1px]">
    {text}
  </span>
</a>