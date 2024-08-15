<template>
    <div>
      <h1>Filtrar Especies por Familia</h1>
      <div class="filter-form">
        <label for="family">Familia:</label>
        <input v-model="filter.family" id="family" type="text" placeholder="Ingrese la familia" />
  
        <button @click="applyFilter">Aplicar Filtros</button>
      </div>
  
      <div class="card-container">
        <div class="card" v-for="species in filteredSpecies" :key="species.id" style="width: 18rem;">
          <img :src="species.imageUrl" class="card-img-top" alt="Imagen de {{ species.name }}">
          <div class="card-body">
            <h5 class="card-name">Name: {{ species.name }}</h5>
            <h5 class="card-family">Family: {{ species.family }}</h5>
            <h5 class="card-gender">Gender: {{ species.gender }}</h5>
            <h5 class="card-date">Date of Entry: {{ species.dateOfEntry }}</h5>
          </div>
        </div>
        <p v-if="filteredSpecies.length === 0">No se encontraron especies.</p>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import { filterSpecies } from '../api/species'; // Ajusta la ruta según tu estructura de proyecto
  
  export default {
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
  };
  </script>
  
  <style scoped>
.filter-form {
  margin-bottom: 1rem;
}

.filter-form label {
  display: block;
  margin: 0.5rem 0;
}

.filter-form input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
}

.card-body {
  padding: 1rem;
}

.card-name, .card-family, .card-gender, .card-date {
  margin-bottom: 0.5rem;
}
</style>
