<template>
  <div>
    <h1>Lista de Especies</h1>
    <div class="card-container">
      <Card v-for="species in paginatedSpecies" :key="species.id" :species="species" />
      <p v-if="speciesList.length === 0">No se encontraron especies.</p>
    </div>
    
    <!-- Componente de paginación -->
    <Pagination
      :currentPage.sync="currentPage"
      :totalItems="speciesList.length"
      :itemsPerPage="itemsPerPage"
    />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'; 
import Pagination from '@/components/Pagination.vue';
import { getSpecies } from '@/api/species'; 

export default {
  components: {
    Card,
    Pagination
  },
  data() {
    return {
      speciesList: [], // Lista completa de especies
      currentPage: 1, // Página actual
      itemsPerPage: 8, // Número de elementos por página
    };
  },
  computed: {
    // Lista de especies para mostrar en la página actual
    paginatedSpecies() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      console.log('Paginando especies desde', start, 'hasta', end);
      return this.speciesList.slice(start, end);
    }
  },
  async mounted() {
    try {
      const response = await getSpecies(); 
      console.log('Datos recibidos:', response.data); 
      this.speciesList = response.data; 
    } catch (error) {
      console.error('Error al obtener la lista de especies:', error); 
    }
  },
  watch: {
    currentPage(newPage) {
      console.log('Página actualizada a:', newPage);
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
