<script setup>
import HeaderOtherPages from '@/components/HeaderOtherPages.vue';
import { ref } from 'vue';
import CounterSpecies from '@/components/CounterSpecies.vue'

</script>

<template>
  <main>
    <HeaderOtherPages />
    <CounterSpecies />
    
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