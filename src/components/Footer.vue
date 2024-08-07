<template>
  <footer class="footer mt-auto py-3 border-top">
    <div class="container d-flex flex-wrap justify-content-between align-items-center">
      <div class="d-flex align-items-center mb-3 mb-md-0">
        <a href="/" class="me-2 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"></svg>
        </a>
        <span class="text-muted" id="zoocoders">© Zoocoders</span>
      </div>

      <ul class="nav list-unstyled mb-0 social-icons d-flex">
        <li class="ms-3">
          <a class="text-muted" href="#" aria-label="Instagram">
            <img src="/src/components/icons/Instagram.svg" alt="Instagram" width="24" height="24">
          </a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="#" aria-label="Facebook">
            <img src="/src/components/icons/Facebook.svg" alt="Facebook" width="24" height="24">
          </a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="#" aria-label="Twitter">
            <img src="/src/components/icons/Twitter.svg" alt="Twitter" width="24" height="24">
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
  }

  .footer {
    background-color: #D9D9D9;
    color: black !important;
    width: 100%;
    margin-top: auto;
  }

  #zoocoders {
    font-size: 30px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 576px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  .text-muted {
    color: black !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .bi {
    fill: currentColor;
  }

  .nav {
    padding: 0;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }

  @media (min-width: 576px) {
    .social-icons {
      justify-content: flex-end;
      padding-top: 0;
    }
  }

  .social-icons li {
    display: flex;
    justify-content: center;
    margin-left: 15px;
  }

  .social-icons li img {
    display: block; 
  }
</style>
