<template>
  <div class="form-wrapper">
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" required>
        </div>

        <div class="form-group">
          <label for="type">Type</label>
          <input type="text" class="form-control" id="type" v-model="formData.type" required>
        </div>

        <div class="form-group">
          <label for="family">Family</label>
          <input type="text" class="form-control" id="family" v-model="formData.family" required>
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender" class="form-control" v-model="formData.gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div class="form-group">
          <label for="date-of-entry">Date of Entry</label>
          <input type="date" class="form-control" id="date-of-entry" v-model="formData.dateOfEntry" required>
        </div>

        <div class="form-group">
          <label for="image-url">Image URL</label>
          <input type="text" class="form-control" id="image-url" v-model="formData.imageUrl">
        </div>

        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        type: '',
        family: '',
        gender: '',
        dateOfEntry: '',
        imageUrl: ''
      },
      apiUrl: '/api/v1/species'
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.formData.dateOfEntry) {
        alert('Please provide a date of entry.');
        return;
      }
      try {
        const response = await axios.post(this.apiUrl, this.formData);
        console.log('Species created:', response.data);
        this.resetForm();
        alert('Species successfully created!');
      } catch (error) {
        let errorMessage = 'An error occurred while creating the species.';

        if (error.response) {
          // El servidor respondió con un estado de error
          console.error('Error response:', error.response);
          errorMessage = error.response.data.message || 'Error: ' + error.response.status;
        } else if (error.request) {
          // No se recibió respuesta del servidor
          console.error('Error request:', error.request);
          errorMessage = 'No response received from the server.';
        } else {
          // Error en la configuración de la solicitud
          console.error('Error message:', error.message);
          errorMessage = error.message || 'Unexpected error occurred.';
        }

        alert(errorMessage);
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        type: '',
        family: '',
        gender: '',
        dateOfEntry: '',
        imageUrl: ''
      };
    }
  }
};
</script>



<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
}

.form-container {
  background-color: #d9d9d9;
  padding: 30px; 
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px; 
  width: 100%; 
  margin: 0 auto; 
}

.form-group {
  margin-bottom: 20px;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #000;
  font-size: 14px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
}

input::placeholder {
  color: #999;
}

.submit-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  width: auto;
  padding: 10px 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #e0e0e0;
}
</style>
