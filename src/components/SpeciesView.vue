<template>
  <div>
    <h1>Lista de Especies</h1>
    <div class="card-container">
      <Card 
        v-for="species in speciesData.content" 
        :key="species.id" 
        :species="species" 
        @speciesDeleted="removeSpecies" 
      />
      <p v-if="speciesData.content.length === 0">No se encontraron especies.</p>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 0">Anterior</button>
      <span>Página {{ currentPage + 1 }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage >= totalPages - 1">Siguiente</button>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'; 
import { getSpecies } from '../api/species'; 

export default {
  components: {
    Card
  },
  data() {
    return {
      speciesData: {
        content: [],
        totalPages: 1
      },
      currentPage: 0,
      size: 8
    };
  },
  async mounted() {
    await this.fetchSpeciesData();
  },
  methods: {
    async fetchSpeciesData() {
      try {
        const response = await getSpecies(this.currentPage, this.size); 
        this.speciesData = response.data;
        console.log('Datos recibidos:', this.speciesData);
      } catch (error) {
        console.error('Error al obtener la lista de especies:', error); 
      }
    },
    async nextPage() {
      if (this.currentPage < this.speciesData.totalPages - 1) {
        this.currentPage += 1;
        await this.fetchSpeciesData();
      }
    },
    async prevPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
        await this.fetchSpeciesData();
      }
    },
    removeSpecies(id) {
      this.speciesData.content = this.speciesData.content.filter(species => species.id !== id);
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #c0c0c0;
  cursor: not-allowed;
}

.pagination span {
  align-self: center;
}
</style>
