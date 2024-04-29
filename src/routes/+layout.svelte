<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { setupViewTransition } from "sveltekit-view-transition";

  setupViewTransition();

  let lastScrollY = 0;
  let isScrollingDown = false;

  onMount(() => {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.pageYOffset;
      isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
    });
  });
</script>

<main>
  <header style=" top: {isScrollingDown ? '-50px' : '0'}; ">
    <a href="{base}/"
      ><Icon icon="material-symbols:home-app-logo" height={30} /></a
    >
  </header>
  <div>
    <slot />
  </div>
</main>

<style lang="scss">
  :global(body) {
    margin: 0;
    background-color: #f0f0f0;
  }

  main {
    font-family: "M PLUS 1p", sans-serif;

    header {
      width: 100%;
      background-color: #6deeff;
      padding: 1em 5em;
      color: #1f1f1f;
      position: fixed;
      transition: top 0.3s;

      a {
        color: rgb(29, 76, 95);
        text-decoration: none;
        display: flex;
        align-items: center;
        width: fit-content;
      }

      @media (max-width: 768px) {
        padding: 1em 1.5em;
      }
    }

    div {
      margin-top: 5em;
      padding: 1em 5em;
    }

    @media (max-width: 768px) {
      div {
        padding: 2em;
      }
    }
  }
</style>
