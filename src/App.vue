<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/SpeciesList.vue'
import Footer from './components/Footer.vue';

import Login from './components/Login.vue';
import HeaderLogin from './components/HeaderLogin.vue';
</script>

<template>
  <header>
    
  </header>
<Login/>
  <RouterView />
  <Footer/>
</template>

<style scoped>

</style>
