<script>
  import Footer from "./footer.svelte";
  import Head from "./head.svelte";
  import Header from "./header.svelte";
  import Snow from "./snow.svelte";

  export let content, layout, env, allContent, allLayouts;
</script>

<html lang="en">
  <Head title={content.filename} {env} />
  <body>
    <main class="main">
      <Snow />
      <Header />
      <svelte:component
        this={layout}
        {...content.fields}
        {allContent}
        {allLayouts}
        {content}
      />
      <Footer />
    </main>
  </body>
</html>
