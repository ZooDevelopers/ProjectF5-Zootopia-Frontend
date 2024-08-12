<script setup>
import HeaderOtherPages from '@/components/HeaderOtherPages.vue';
import Login from '@/components/Login.vue';
import { ref } from 'vue';

</script>

<template>
  <main>
    <HeaderOtherPages />
    
  </main>

 
</template>
<style scoped>
main{
  background-image: url(../../public/img/dashboard.jpg);
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center center;
  height: 100vh; 
  margin: 0; 

}
</style>