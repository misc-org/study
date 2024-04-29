<script lang="ts">
  import { CodeBlock } from "@skeletonlabs/skeleton";
  import hljs from "highlight.js/lib/core";
  import { storeHighlightJs } from "@skeletonlabs/skeleton";
  storeHighlightJs.set(hljs);

  import xml from "highlight.js/lib/languages/xml";
  import css from "highlight.js/lib/languages/css";
  import json from "highlight.js/lib/languages/json";
  import javascript from "highlight.js/lib/languages/javascript";
  import typescript from "highlight.js/lib/languages/typescript";

  import "highlight.js/styles/tokyo-night-dark.css";

  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);

  import type { PageData } from "./$types";
  export let data: PageData;
  console.log(data);

  import { onMount, onDestroy } from "svelte";
  let isExpanded = false;
  let expandedImgSrc = "";

  let observer: MutationObserver;

  type ContentItem =
    | { type: "code"; language: string; code: string; filename?: string }
    | { type: "html"; html: string };

  let content: ContentItem[] = [];
  let isContentLoaded = false;

  onMount(async () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.detail.content, "text/html");

    Array.from(doc.body.childNodes).forEach((node) => {
      if (node instanceof Element && node.hasAttribute("data-filename")) {
        const filename = node.getAttribute("data-filename") || "";
        const codeElement = node.querySelector("code");
        if (codeElement) {
          const language = codeElement.className.replace("language-", "");
          const code: string = codeElement.textContent
            ? codeElement.textContent
            : "";

          content.push({ type: "code", language, code, filename });
        }
      } else if (node instanceof Element) {
        content.push({ type: "html", html: node.outerHTML });
      }
    });
    isContentLoaded = true;
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
          {:else}
            {@html item.html}
          {/if}
        {/each}
      {/if}
    </span>
  </div>
</section>

<style lang="scss">
  @import "svelte-materialify/src/styles/tools/colors";
  @import "svelte-materialify/src/styles/tools/elevation";

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

  :global(.filename) {
    font-family: "M PLUS 1 Code", monospace;
    width: fit-content;
    font-size: 0.9em;
    color: #1f1f1f;
    padding: 0.5em;
    margin-bottom: 0.5em;
    background-color: #f0f0f0;
    border-radius: 0.2em;
  }

  :global(.codeblock) {
    padding: 1em;
    background-color: #1f1f1f;
    border-radius: 0.5em;

    :global(.codeblock-header) {
      position: relative;
      margin-bottom: 1em;

      :global(.codeblock-language) {
        color: material-color("light-blue", "lighten-5");
        font-size: 0.9em;
        padding: 0.2em;
      }
      :global(button) {
        background-color: #fff;
        color: #1f1f1f;
        padding: 0.2em;
        border-radius: 0.2em;
        border: none;
        cursor: pointer;
        font-size: 0.9em;
        position: absolute;
        right: 0em;
        top: 0em;
      }
    }

    :global(pre) {
      padding: 1em;
      overflow: auto;

      :global(code) {
        color: #fff;
        font-family: "M PLUS 1 Code", monospace;

        @media (max-width: 768px) {
          font-size: 0.9em;
        }
      }
    }
  }

  :global(pre) {
    padding: 1em;
    background-color: #1f1f1f;
    border-radius: 0.5em;

    :global(code) {
      color: #fff;
      font-family: "M PLUS 1 Code", monospace;

      @media (max-width: 768px) {
        font-size: 0.9em;
      }
    }
  }

  :global(p) {
    line-height: 1.5em;
    margin: 2em 0;

    @media (max-width: 768px) {
      font-size: 0.9em;
    }

    :global(code) {
      background-color: #1f1f1f;
      color: #fff;
      padding: 0.3em;
      margin: 0 0.3em;
      border-radius: 0.2em;
      font-family: "M PLUS 1 Code", monospace;

      @media (max-width: 768px) {
        font-size: 0.9em;
      }
    }
  }

  :global(a) {
    color: material-color("light-blue", "darken-3");
    text-decoration: underline;
  }
  :global(img) {
    max-width: 50%;
    height: auto;
    transition: transform 0.3s;
    cursor: pointer;
  }

  :global(.overlay) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    z-index: 9999;
    pointer-events: none;
    transition: background 0.3s;
  }

  :global(.overlay.show) {
    background: rgba(0, 0, 0, 0.2);
    pointer-events: auto;
  }

  .expanded-img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
  }

  :global(h2) {
    margin: 1em 0;
    border-bottom: 4px solid material-color("light-blue", "lighten-4");

    @media (max-width: 768px) {
      font-size: 1.2em;
    }

    &::before {
      content: "#";
      margin-right: 0.5em;
    }
  }
  :global(h3) {
    margin: 1em 0;
    border-bottom: 3px solid material-color("light-blue", "lighten-5");

    @media (max-width: 768px) {
      font-size: 1em;
    }

    &::before {
      content: "##";
      margin-right: 0.5em;
    }
  }

  :global(counter-style unordered-list) {
    system: cyclic;
    symbols: "-";
    suffix: " ";
  }

  :global(ul > li) {
    list-style-type: unordered-list;

    @media (max-width: 768px) {
      font-size: 0.9em;
    }
  }

  :global(counter-style ordered-list) {
    system: cyclic;
    symbols: "1";
    suffix: ". ";
  }

  :global(ol > li) {
    list-style-type: ordered-list;
  }

  :global(ul),
  :global(ol) {
    list-style-position: inside;
  }

  :global(hr::after) {
    content: "* * *";
  }

  :global(hr) {
    border: none;
  }
</style>
