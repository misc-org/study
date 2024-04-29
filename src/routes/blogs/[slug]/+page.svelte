<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  import { onMount, onDestroy } from 'svelte';
  let isExpanded = false;
  let expandedImgSrc = '';

  let observer: MutationObserver;

  onMount(() => {
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const images = document.querySelectorAll('img');
          images.forEach((img) => {
            img.addEventListener('click', () => {
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
    <div class="overlay {isExpanded ? 'show' : ''}" on:click={closeOverlay}>
      {#if isExpanded}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="expanded-img" src={expandedImgSrc} />
      {/if}
    </div>
    <span>{@html data.detail.content}</span>
  </div>
</section>

<style lang="scss">
  section {
    padding: 1em 5em;

    h1 {
      margin: 1em 0;
      margin-bottom: 1.5em;
      background-color: #6deeff;
      padding: 0.5em 1em;
      color: #1f1f1f;
      border-radius: 0.2em;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 0;

      h1 {
        font-size: 1.5em;
        padding: 0.5em;
      }
    }
  }

  :global(p) {
    line-height: 1.5em;
    margin: 2em 0;
  }

  :global(a) {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
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

  :global(h1) {
    font-size: 2.5em;
  }
  :global(h2) {
    margin: 1em 0;
    &::before {
      content: "#";
      margin-right: 0.5em;
    }
  }
  :global(h3) {
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

  :global(pre > code::before) {
    content: "```" attr(data-lang);
  }

  :global(pre > code::after) {
    content: "```";
  }

  :global(hr::after) {
    content: "* * *";
  }

  :global(hr) {
    border: none;
  }
</style>
