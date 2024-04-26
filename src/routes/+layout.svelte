<script lang="ts">
</script>

<main>
  <header>
    <a href="/">Home</a>
  </header>
  <div>
    <slot />
  </div>
</main>

<style lang="scss">
  main {
    font-family: "M PLUS 1p", sans-serif;

    header {
      background-color: #f2df36;
      padding: 1em 5em;
      color: #1f1f1f;

      a {
        color: #1f1f1f;
        text-decoration: none;
        font-size: 1.5em;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    div {
      padding: 1em 5em;
    }
  }
</style>
