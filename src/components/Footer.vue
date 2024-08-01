<template>
  <footer class="footer mt-auto py-3 border-top">
    <div class="container d-flex flex-wrap justify-content-between align-items-center">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"></svg>
        </a>
        <span class="mb-3 mb-md-0 text-muted" id="zoocoders">© Zoocoders</span>
      </div>

      <ul class="nav col-md-4 list-unstyled mb-0 social-icons" style="display: flex;">
        <li class="mb-2">
          <a class="text-muted" href="#" aria-label="Instagram">
            <img src="/src/components/icons/Instagram.svg" alt="Instagram" width="24" height="24">
          </a>
        </li>
        <li class="mb-2">
          <a class="text-muted" href="#" aria-label="Facebook">
            <img src="/src/components/icons/Facebook.svg" alt="Facebook" width="24" height="24">
          </a>
        </li>
        <li class="mb-2">
          <a class="text-muted" href="#" aria-label="Twitter">
            <img src="/src/components/icons/Twitter.svg" alt="Twitter" width="24" height="24">
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    background-color: #D9D9D9;
    color: black !important;
    position:absolute;
    bottom: 0;
    width: 100%;
    margin-top: auto;
  }
  
  #zoocoders{
    font-size: 30px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .social-icons li {
    display: flex;
    justify-items: baseline; 
  }

  .social-icons li img {
    display: block; 
  }


  
</style>
