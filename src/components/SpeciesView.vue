<template>
  <div>
    <h1>Lista de Especies</h1>
    <div class="card-container">
      <Card v-for="species in speciesList" :key="species.id" :species="species" />
      <p v-if="speciesList.length === 0">No se encontraron especies.</p>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'; 
import { getSpecies } from '@/api/species'; 

export default {
  components: {
    Card
  },
  data() {
    return {
      speciesList: [] 
    };
  },
  async mounted() {
    try {
      const response = await getSpecies(); 
      console.log('Datos recibidos:', response.data); 
      this.speciesList = response.data; 
    } catch (error) {
      console.error('Error al obtener la lista de especies:', error); 
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

p {
  margin-top: 16px;
}
</style>
