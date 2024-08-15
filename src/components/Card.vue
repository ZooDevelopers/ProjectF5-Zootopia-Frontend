<template>
    <div class="card" style="width: 18rem;">
      <img :src="species.imageUrl" class="card-img-top" alt="Imagen de {{ species.name }}">
      <div class="card-body">
        <h5 class="card-name">Name: {{ species.name }}</h5>
        <h5 class="card-family">Family: {{ species.family }}</h5>
        <h5 class="card-gender">Gender: {{ species.gender }}</h5>
        <h5 class="card-date">Date of Entry: {{ species.dateOfEntry }}</h5>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      species: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-name, .card-family, .card-gender, .card-date {
    margin-bottom: 0.5rem;
  }
  </style>
  