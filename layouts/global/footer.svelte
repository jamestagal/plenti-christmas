<footer>
  <ul id="media">
    <li style="--clr:#dfe6e9;">
      <a href="https://github.com/jamestagal" target="_blank"
        ><i class="fa-brands fa-github"></i></a
      >
    </li>
    <li style="--clr:#dfe6e9;">
      <a href="https://www.linkedin.com/in/benjaminjameswaller/" target="_blank"
      ><i class="fa-brands fa-linkedin"></i></a
    >
     <!--    <a href="https://plenti.co/" target="_blank">
          <img
            class="avatar d-block mr-2"
            src="https://avatars.githubusercontent.com/u/54673306?s=64&amp;v=4"
            width="32"
            height="32"
            alt="@plentico"
          /></a
        > --><br />
      </li>

    <li style="--clr:#dfe6e9;">
      <a href="https://edtechdesigner.io/" target="_blank"
        ><i class="fa-solid fa-globe"></i></a
      >
    </li>

  </ul>
  <div class="text-center">
    <p style="color: #dfe6e9;">
      Made with <i class="fa-solid fa-heart" style="color: red;"></i> by
      Benjamin Waller <br/>
      Powered by
      <a target="_blank" rel="noopener" href="https://plenti.co/">Plenti</a>
      and
      <a target="_blank" rel="noopener" href="https://svelte.dev/">Svelte</a>
      <br /> &copy; 2023 | All Rights Reserved
    </p>
  </div>
</footer>

<style>
  a {
    text-decoration: none;
    color: red;
  }

  .text-center {
    text-align: center;
  }
  footer {
    position: relative;
    width: 100%;
    background: #212121;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #media {
    position: relative;
    display: flex;
    gap: 20px;
  }
  #media li {
    position: relative;
    list-style: none;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
  }
  #media li a {
    position: relative;
    text-decoration: none;
    color: var(--clr);
    z-index: 10;
    font-size: 2em;
    transition: 0.5s ease-in-out;
  }
  #media li:hover {
    z-index: 100000;
    transform: scale(0.75);
    transform: translateY(-10px);
  }
  #media li::before {
    content: "";
    position: absolute;
    inset: 30px;
    box-shadow:
      0 0 0 10px var(--clr),
      0 0 0 20px var(--bg),
      0 0 0 22px var(--clr);
    transition: 0.5s;
  }
  #media li:hover::before {
    inset: 0px;
  }
  #media li::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--bg);
    transform: rotate(45deg);
  }
</style>
