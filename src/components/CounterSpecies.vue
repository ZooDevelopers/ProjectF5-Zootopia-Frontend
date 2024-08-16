<template>
  <div class="counter-container">
    <div class="counter-box">
      <h2 class="counter-header">Species List</h2>
      <h3>Total Species: {{ speciesCount }}</h3>
      <button @click="fetchSpeciesCount">Refresh Count</button>
    </div>
  </div>
</template>
<script>
import { getSpecies } from '../api/species';  // Asegúrate de que la ruta al archivo species.js es correcta

export default {
  data() {
    return {
      speciesCount: 0
    };
  },
  methods: {
    async fetchSpeciesCount() {
      try {
        const response = await getSpecies();
        this.speciesCount = response.data.length;  // Asume que la respuesta es una lista de especies
      } catch (error) {
        console.error("Error fetching species count:", error);
      }
    }
  },
  created() {
    // Llama al método para cargar el conteo de especies al montar el componente
    this.fetchSpeciesCount();
  }
};
</script>




<style scoped>
.counter-container {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  margin-top: 0;
  padding-top: 20px; 
  width: 100%; 
}

.counter-box {
  background-color: rgba(197, 191, 191, 0.392);
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.counter-header {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #777;
}
</style>
