<script lang="ts">
  import { CodeBlock } from "@skeletonlabs/skeleton";
  import { setupHighlightJs } from "$lib/components/blogPage";
  import BlogParser from "$lib/components/BlogParser.svelte";
  import ImagePaeser from "$lib/components/ImageParser.svelte";
  import TableParser from "$lib/components/TableParser.svelte";

  setupHighlightJs();

  import type { PageData } from "./$types";
  export let data: PageData;

  import { onMount, onDestroy } from "svelte";
  import { parser, type MainElement } from "$lib/components/pageData";
  let isExpanded = false;
  let expandedImgSrc = "";

  let observer: MutationObserver;

  let content: MainElement[] = [];
  let isContentLoaded = false;

  let tableOfContents: any[] = [];

  onMount(async () => {
    if (data && data.detail) {
      parser(data.detail.content, content);
      tableOfContents = content
        .map((item, index) => {
          if (item.type === "h2" || item.type === "h3") {
            return { ...item, number: index };
          }
          return null;
        })
        .filter(Boolean);
      isContentLoaded = true;
    }
  });

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

  let iconSize: number = 20;

  onMount(() => {
    const width = window.innerWidth;
    if (width <= 480) {
      iconSize = 15;
    } else if (width <= 768) {
      iconSize = 15;
    } else {
      iconSize = 20;
    }
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

<svelte:head>
  {#if data && data.detail}
    <title>MISCTUDY - {data.detail.title}</title>
  {/if}
</svelte:head>

<section>
  {#if data && data.detail}
    <h1>{data.detail.title}</h1>
    {#if tableOfContents.length > 0}
      <nav>
        <h2>目次</h2>
        <ul>
          {#each tableOfContents as item (item.number)}
            <li class={item.type}>
              <a href={"#" + item.type + "-" + item.number}>
                {#each item.content as subItem}
                  {#if subItem.type === "text"}
                    {subItem.text}
                  {/if}
                {/each}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
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
        {#each content as item}
          {#if item.type === "h2"}
            <h2>
              {#each item.content as subItem}
                {#if subItem.type === "text"}
                  {subItem.text}
                {/if}
              {/each}
            </h2>
          {:else if item.type === "h3"}
            <h3>
              {#each item.content as subItem}
                {#if subItem.type === "text"}
                  {subItem.text}
                {/if}
              {/each}
            </h3>
          {:else if item.type === "h4"}
            <h4>
              {#each item.content as subItem}
                {#if subItem.type === "text"}
                  {subItem.text}
                {/if}
              {/each}
            </h4>
          {:else if item.type === "p"}
            {#if item.style}
            <p style='{item.style.map(({property, value}) => `${property}: ${value}`).join("; ")}'>
                <BlogParser content={item.content} {iconSize} />
              </p>
            {:else}
              <p>
                <BlogParser content={item.content} {iconSize} />
              </p>
            {/if}
          {:else if item.type === "pre"}
            <pre><code
                >{#each item.content as subItem}{subItem.code}{/each}</code
              ></pre>
          {:else if item.type === "figure"}
            <figure>
              <ImagePaeser content={item.content} />
            </figure>
          {:else if item.type === "ul"}
            <ul>
              {#each item.content as subItem}
                <li>
                  {#if Array.isArray(subItem.li)}
                    <BlogParser content={subItem.li} {iconSize} />
                  {/if}
                </li>
              {/each}
            </ul>
          {:else if item.type === "ol"}
            <ol>
              {#each item.content as subItem}
                <li>
                  {#if Array.isArray(subItem.li)}
                    <BlogParser content={subItem.li} {iconSize} />
                  {/if}
                </li>
              {/each}
            </ol>
          {:else if item.type === "blockquote"}
            <blockquote>
              {#each item.content as subItem}
                {#if subItem.type === "p"}
                  <p>
                    <BlogParser content={subItem.content} {iconSize} />
                  </p>
                {/if}
              {/each}
            </blockquote>
          {:else if item.type === "div"}
            <div class="codeblock-wrap">
              {#if item.content.filename}
                <div>{item.content.filename}</div>
              {/if}
              <CodeBlock
                language={item.content.lang}
                code={item.content.code}
              />
            </div>
          {:else if item.type === "table"}
            <table>
              {#each item.content.tbody as subItem}
                <tr>
                  {#each subItem.content as subSubItem}
                    {#if subSubItem.type === "th"}
                      <th>
                        <TableParser content={subSubItem.content} {iconSize} />
                      </th>
                    {:else if subSubItem.type === "td"}
                      <td>
                        <TableParser content={subSubItem.content} {iconSize} />
                      </td>
                    {/if}
                  {/each}
                </tr>
              {/each}
            </table>
          {:else if item.type === "hr"}
            <hr />
          {/if}
        {/each}
      {/if}
    </span>
  </div>
</section>

<style lang="scss">
  @use "./index.scss" as *;
  @import "svelte-materialify/src/styles/tools/colors";
  @import "svelte-materialify/src/styles/tools/elevation";

  :global(html) {
    scroll-padding-top: 50px;
  }

  section {
    padding: 1em 4em;
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
              margin-left: 0.5em;
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

  @media (max-width: 1200px) {
    section {
      padding: 1em;

      h1 {
        font-size: 1.5em;
        padding: 0.5em;
      }

      span {
        padding: 1.5em;
      }
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
