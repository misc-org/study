<script lang="ts">
  import { CodeBlock } from "@skeletonlabs/skeleton";
  import { setupHighlightJs } from "$lib/components/blogPage";

  setupHighlightJs();

  import type { PageData } from "./$types";
  export let data: PageData;

  import { onMount, onDestroy } from "svelte";
  import { parser, type ContentItem } from "$lib/components/pageData";
  let isExpanded = false;
  let expandedImgSrc = "";

  let observer: MutationObserver;

  let content: ContentItem[] = [];
  let isContentLoaded = false;

  let tableOfContents: ContentItem[] = [];

  onMount(async () => {
    parser(data.detail.content, content);
    tableOfContents = content.filter(
      (item) => item.type === "h2" || item.type === "h3",
    );
    isContentLoaded = true;
  });

  let h = -1;
  function countHeading(item) {
    if (item.type === "h2") {
      h++;
      return `h2-${h}`;
    } else if (item.type === "h3") {
      h++;
      return `h3-${h}`;
    }
  }

  onMount(() => {
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const images = document.querySelectorAll("img");
          images.forEach((img) => {
            img.addEventListener("click", () => {
              isExpanded = true;
              expandedImgSrc = img.src;
            });
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  function closeOverlay() {
    isExpanded = false;
  }
</script>

<section>
  <h1>{data.detail.title}</h1>
  {#if tableOfContents.length > 0}
    <nav>
      <h2>目次</h2>
      <ul>
        {#each tableOfContents as item, i}
          <li>
            {#if item.type === "h2"}
              <a href="#h2-{i}">{item.text}</a>
            {:else if item.type === "h3"}
              <a href="#h3-{i}" class="level2">{item.text}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
  <div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="overlay {isExpanded ? 'show' : ''}" on:click={closeOverlay}>
      {#if isExpanded}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="expanded-img" src={expandedImgSrc} />
      {/if}
    </div>
    <span>
      {#if isContentLoaded}
        {#each content as item (item)}
          {#if item.type === "code"}
            <p class="filename">{item.filename}</p>
            <CodeBlock language={item.language} code={item.code} />
          {:else if item.type === "h2"}
            <h2 id={countHeading(item)}>{item.text}</h2>
          {:else if item.type === "h3"}
            <h3 id={countHeading(item)}>{item.text}</h3>
          {:else if item.type === "html"}
            {@html item.html}
          {/if}
        {/each}
      {/if}
    </span>
  </div>
</section>

<style lang="scss">
  @use "../index.scss" as *;
  @import "svelte-materialify/src/styles/tools/colors";
  @import "svelte-materialify/src/styles/tools/elevation";

  :global(html) {
    scroll-padding-top: 50px;
  }

  section {
    padding: 1em 5em;
    width: 100%;

    h1 {
      margin: 1em 0;
      margin-bottom: 1.5em;
      background-color: material-color("light-blue", "accent-1");
      padding: 0.5em 1em;
      color: #1f1f1f;
      border-radius: 0.2em;
      font-size: 2em;
      @include elevation(5);
    }

    nav {
      margin-bottom: 1.5em;

      h2 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5em;

          a {
            color: #1f1f1f;
            font-size: 1.2em;

            &.level2 {
              margin-left: .5em;
            }
          }
        }
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      width: 100%;
      padding: 5em;
      background-color: #fff;
      border-radius: 0.5em;
      @include elevation(5);
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 0;

      h1 {
        font-size: 1.2em;
        padding: 0.5em;
      }

      span {
        padding: 1.5em;
      }
    }
  }
</style>
