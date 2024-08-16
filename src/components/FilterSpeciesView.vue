<template>
    <div>
      <h1>Filtrar Especies por Familia</h1>
      <div class="filter-form">
        <label for="family">Familia:</label>
        <input v-model="filter.family" id="family" type="text" placeholder="Ingrese la familia" />
  
        <button @click="applyFilter">Aplicar Filtros</button>
      </div>
  
      <div class="card-container">
        <Card v-for="species in filteredSpecies" :key="species.id" :species="species" />
        <p v-if="filteredSpecies.length === 0">No se encontraron especies.</p>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue'; 
  import { filterSpecies } from '../api/species';
  
  export default {
    components: {
      Card
    },
    data() {
      return {
        filter: {
          family: ''
        },
        filteredSpecies: []
      };
    },
    methods: {
      async applyFilter() {
        try {
          const response = await filterSpecies(this.filter.family);
          this.filteredSpecies = response.data;
        } catch (error) {
          console.error('Error al aplicar los filtros:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
.species-filter-container {
  background-color: #f9f9f9; /* Fondo gris claro */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  max-width: 800px;
  margin: 0 auto;
  text-align: center; /* Centrar el contenido */
}

h1 {
  color: #333; /* Texto gris oscuro */
  margin-bottom: 1rem;
}

.filter-form {
  margin-bottom: 2rem;
  background-color: #ffffff; /* Fondo blanco para el formulario */
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

.filter-form label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666; /* Texto gris medio */
}

.filter-form input {
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.filter-form button {
  background-color: #999c99; /* Botón verde suave */
  color: rgb(46, 44, 44);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.filter-form button:hover {
  background-color: #454645; 
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center; 
}

.card-container p {
  color: #888; 
  font-size: 1.2rem;
}
</style>