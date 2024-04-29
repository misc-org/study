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

<main data-theme="skeleton">
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
  @import 'svelte-materialify/src/styles/tools/colors';

  :global(body) {
    margin: 0;
    background-color: material-color('light-blue', 'lighten-5');
    width: 100%;
  }

  main {
    font-family: "M PLUS 1p", sans-serif;
    width: 100%;

    header {
      width: 100%;
      background-color: material-color('light-blue', 'base');
      padding: 1em 5em;
      position: fixed;
      transition: top 0.3s;
      z-index: 9999;

      a {
        color: material-color('light-blue', 'lighten-5');
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
      width: 100%;
    }

    @media (max-width: 768px) {
      div {
        padding: 1.2em;
      }
    }
  }
</style>
