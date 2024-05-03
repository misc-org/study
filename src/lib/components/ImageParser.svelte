<script lang="ts">
  import type { FigureElement } from "$lib/components/pageData";

  export let content: FigureElement;
</script>

{#if content.a}
  <a href={content.a} target="_blank" rel="noopener noreferrer">
    <img
      src={content.img}
      alt={content.alt}
      width={content.width}
      height={content.height}
    />
  </a>
{:else}
  <img
    src={content.img}
    alt={content.alt}
    width={content.width}
    height={content.height}
  />
{/if}
