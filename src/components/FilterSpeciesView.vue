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
  import Card from '@/components/Card.vue'; 
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
  </style>
  