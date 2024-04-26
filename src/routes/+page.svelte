<script lang="ts">
  import type { PageData } from "./$types";
  import { base } from "$app/paths";

  export let data: PageData;
</script>

<section>
  {#each data.blogList.contents as blog}
    <article>
      <a href="{base}/{blog.id}"><h2>{blog.title}</h2></a>
    </article>
  {/each}
</section>
