<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { TextFormat, MainElement } from "$lib/components/pageData";
  export let content: TextFormat[] | MainElement[] = [];
  export let iconSize: number = 20;
</script>

{#each content as subItem}
  {#if subItem.type === "text"}
    {subItem.text}
  {:else if subItem.type === "u"}
    <u>{subItem.content.text}</u>
  {:else if subItem.type === "s"}
    <s>{subItem.content.text}</s>
  {:else if subItem.type === "em"}
    <em>{subItem.content.text}</em>
  {:else if subItem.type === "strong"}
    <strong>{subItem.content.text}</strong>
  {:else if subItem.type === "br"}
    <br />
  {:else if subItem.type === "code"}
    <code>{subItem.content.text}</code>
  {:else if subItem.type === "a"}
    <a href={subItem.href} target="_blank" rel="noopener noreferrer">
      {subItem.content.text}
    </a>
  {:else if subItem.type === "span"}
    <Icon icon={subItem.content.content} width={iconSize} height={iconSize} />
  {/if}
{/each}
