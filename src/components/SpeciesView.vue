<template>
  <div>
    <h1>Lista de Especies</h1>
    <div class="card-container">
      <div class="card" v-for="species in speciesList" :key="species.id" style="width: 18rem;">
        <img :src="species.imageUrl" class="card-img-top" alt="Imagen de {{ species.name }}">
        <div class="card-body">
          <h5 class="card-name">Name: {{ species.name }}</h5>
          <h5 class="card-type">Type: {{ species.type }}</h5>
          <h5 class="card-family">Family: {{ species.family }}</h5>
          <h5 class="card-gender">Gender: {{ species.gender }}</h5>
          <h5 class="card-date">Date of Entry: {{ species.dateOfEntry }}</h5>
        </div>
      </div>
      <p v-if="speciesList.length === 0">No se encontraron especies.</p>
    </div>
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
      console.log('Datos recibidos:', response.data); // Debug para ver los datos
      this.speciesList = response.data; // Asigna los datos a la propiedad speciesList
    } catch (error) {
      console.error('Error al obtener la lista de especies:', error); // Maneja errores
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

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.card-body {
  padding: 16px;
}

h1 {
  font-size: 24px;
  margin-bottom: 24px;
}

.card-name,
.card-type,
.card-family,
.card-gender,
.card-date {
  margin: 8px 0;
}

p {
  margin-top: 16px;
}
</style>
