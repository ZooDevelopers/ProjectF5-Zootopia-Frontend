<template>
    <div>
      <h1>Lista de Especies</h1>
      <ul v-if="speciesList.length > 0">
        <li v-for="species in speciesList" :key="species.id">
          {{ species.name }}
          {{ species.type }}
          {{ species.family}}
          {{ species.gender }}
          {{ species.dateOfEntry }}
        </li>
      </ul>
      <p v-else>
        No se encontraron especies.
      </p>
    </div>
  </template>
  
  <script>
  import { getSpecies } from '@/api/species'; // Asegúrate de que la ruta sea correcta
  
  export default {
    data() {
      return {
        speciesList: [] // Almacena la lista de especies
      };
    },
    async mounted() {
      try {
        const response = await getSpecies(); // Llama a la función para obtener especies
        this.speciesList = response.data; // Asigna los datos a la propiedad speciesList
      } catch (error) {
        console.error('Error al obtener la lista de especies:', error); // Maneja errores
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  h1 {
    font-size: 24px;
  }
  </style>
  