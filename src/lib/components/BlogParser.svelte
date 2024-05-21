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
      <span class="wrapper answer-wrap">
        <span class="toggle" class:open={showAnswerCover}></span>
        <button class="answer-open" on:click={toggleAnswerCover}
          >答えを見る</button
        ><br />
        {#if showAnswerCover}
          <div class="answer-cover" transition:slide>
            <span class="answer">{@html subItem.content.content}</span>
          </div>
        {/if}
      </span>
    {:else if subItem.content.type === "hint"}
      <span class="wrapper hint-wrap">
        <span class="toggle" class:open={showAnswerCover}></span>
        <button class="hint-open" on:click={toggleAnswerCover}
          >ヒントを見る</button
        ><br />
        {#if showAnswerCover}
          <div class="hint-cover" transition:slide>
            <span class="hint">{@html subItem.content.content}</span>
          </div>
        {/if}
      </span>
    {:else if subItem.content.type === "info"}
        <div class='info-{subItem.content.content.type}'>
          <strong>{subItem.content.content.content.title}</strong>
          <br />
          {subItem.content.content.content.main}
        </div>
    {/if}
  {/if}
{/each}

<style lang="scss">
  @import "svelte-materialify/src/styles/tools/colors";
  @import "svelte-materialify/src/styles/tools/elevation";
  .wrapper {
    display: block;
    margin: 10px 0;
    padding: 10px;
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

  .answer-wrap {
    background-color: material-color("red", "lighten-4");
    border: 2px solid material-color("red", "lighten-1");
  }

  .hint-wrap {
    background-color: material-color("yellow", "lighten-4");
    border: 2px solid material-color("yellow", "lighten-1");
  }

  .info-info {
    padding: 10px;
    background-color: material-color("light-blue", "lighten-5");
    border: 2px solid material-color("light-blue", "lighten-1");
    border-radius: 5px;

    strong {
      color: material-color("light-blue", "darken-1");
    }
  }

  .info-comment {
    padding: 10px;
    background-color: material-color("orange", "lighten-5");
    border: 2px solid material-color("orange", "lighten-1");
    border-radius: 5px;

    strong {
      color: material-color("orange", "darken-1");
    }
  }

  .info-important {
    padding: 10px;
    background-color: material-color("purple", "lighten-5");
    border: 2px solid material-color("purple", "lighten-1");
    border-radius: 5px;

    strong {
      color: material-color("purple", "darken-1");
    }
  }
</style>
