<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<section>
  {#each data.blogList.contents as blog}
    <article>
      <a href={`/${blog.id}`}><h2>{blog.title}</h2></a>
    </article>
  {/each}
</section>