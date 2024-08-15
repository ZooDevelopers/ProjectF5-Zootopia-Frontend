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
  background-color: #f9f9f9; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  width: 18rem;
  margin: 20px auto; 
}

.card:hover {
  transform: translateY(-10px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.card-img-top {
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px;
  height: 200px; 
  object-fit: cover; 
  width: 100%;
}

.card-body {
  padding: 20px; 
  text-align: center; 
}

.card-name {
  font-weight: 600;
  font-size: 1.2em;
  color: #333; 
  margin-bottom: 10px; 
}

.card-family {
  font-size: 1em;
  color: #666; 
  margin-bottom: 10px;
}

.card-gender,
.card-date {
  font-size: 0.9em;
  color: #888; 
}

.card-gender {
  margin-bottom: 10px;
}
</style>