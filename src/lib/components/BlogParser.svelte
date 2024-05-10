<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { TextFormat, MainElement } from "$lib/components/pageData";
  import { slide } from "svelte/transition";
  export let content: TextFormat[] | MainElement[] = [];
  export let iconSize: number = 20;

  let showAnswerCover = false;
  function toggleAnswerCover() {
    showAnswerCover = !showAnswerCover;
  }
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
    {#if subItem.content.type === "icon"}
      <Icon icon={subItem.content.content} width={iconSize} height={iconSize} />
    {:else if subItem.content.type === "answer"}
      <span class="answer-wrap">
        <span class="toggle" class:open={showAnswerCover}></span>
        <button
          class="answer-open"
          on:click={toggleAnswerCover}>答えを見る</button
        ><br />
        {#if showAnswerCover}
          <div class="answer-cover" transition:slide>
            <span class="answer">{subItem.content.content}</span>
          </div>
        {/if}
      </span>
    {/if}
  {/if}
{/each}

<style lang="scss">
  @import "svelte-materialify/src/styles/tools/colors";
  @import "svelte-materialify/src/styles/tools/elevation";
  .answer-wrap {
    display: block;
    margin: 10px 0;
    background-color: material-color("light-blue", "lighten-5");
    padding: 10px;
    border: 2px solid material-color("light-blue", "lighten-1");
    border-radius: 5px;

    :global(.toggle) {
      &::before {
        display: inline-block;
        content: "";
        width: 10px;
        height: 10px;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #000 transparent transparent transparent;
        transition: transform 0.3s ease-in-out;
        transform: rotate(-90deg);
      }
    }

    :global(.open)::before {
      transform: rotate(0deg);
    }

    button {
      width: calc(100% - 20px);
      text-align: left;
    }
  }
  .answer-cover {
  }
  .answer {
  }
</style>
