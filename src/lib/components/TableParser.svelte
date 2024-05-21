<script lang="ts">
  import BlogParser from "./BlogParser.svelte";
  import ImagePaeser from "./ImageParser.svelte";
  import type { TextFormat, MainElement } from "$lib/components/pageData";

  export let content: TextFormat[] | MainElement[] = [];
  export let iconSize: number = 20;
</script>

{#each content as item}
  {#if item.type === "p"}
    <p>
      <BlogParser content={item.content} {iconSize} />
    </p>
  {/if}
  {#if item.type === "figure"}
    <figure>
      <ImagePaeser content={item.content} />
    </figure>
  {/if}
{/each}
