<script lang="ts">
  import type { PageData } from "./$types";
  import { base } from "$app/paths";

  export let data: PageData;
</script>

<section>
  {#each data.blogList.contents as blog}
    <article>
      <h2><a href="{base}/blogs/{blog.id}">{blog.title}</a></h2>
    </article>
  {/each}
</section>

<style lang="scss">
  @import "svelte-materialify/src/styles/tools/colors";
  article {
    margin: 1em 0;
  }

  h2 {
    font-size: 1.5em;
    margin: 1em 0;
    border-bottom: 4px solid material-color("light-blue", "lighten-4");

    a {
      text-decoration: none;
      color: material-color("light-blue", "darken-3");
    }

    @media (max-width: 768px) {
      font-size: 1.2em;
    }

    &::before {
      content: "#";
      margin-right: 0.5em;
    }
  }
</style>
