<script>
  export let env;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <!--=============== FAVICON ===============-->
  <link rel="shortcut icon" href="media/img/favicon.png" type="image/x-icon" />

  <!--=============== REMIXICONS ===============-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.6.0/remixicon.css"
  />

  <!--=============== CSS ===============-->
  <link rel="stylesheet" href="global.css" />
  <link rel="stylesheet" href="footer.css" />
  <title>Responsive christmas website | H5P Advent Calendar</title>

  <script type="module" src={`/${env.entrypointJS}/core/main.js`}></script>

  <!--=============== H5P Resizer JS ===============-->
  <script type="module" src="https://eddesignanu.h5p.com/js/h5p-resizer.js" charset="UTF-8">
  </script>
  <!--=============== MAIN JS ===============-->
  <script type="module" src="/js/main.js"></script>
  <!-- <link rel="icon" type="image/svg+xml" href="/media/logo.svg" /> -->
  <link rel="stylesheet" href={`/${env.entrypointJS}/bundle.css`} />
</head>
