<template>
    <div class="form-wrapper">
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="Enter name" required>
          </div>
          <div class="form-group">
            <label for="type">Type</label>
            <input type="text" class="form-control" id="type" v-model="formData.type" placeholder="Enter type" required>
          </div>
          <div class="form-group">
            <label for="family">Family</label>
            <select class="form-control" id="family" v-model="formData.family" required>
              <option value="">Select family</option>
              <option>Felidos</option>
              <option>Canidos</option>
              <option>Reptiles</option>
              <option>Leporidae</option>
            </select>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <input type="text" class="form-control" id="gender" v-model="formData.gender" placeholder="Enter gender" required>
          </div>
          <div class="form-group">
            <label for="admission-date">Admission Date</label>
            <input type="date" class="form-control" id="admission-date" v-model="formData.admissionDate" required>
          </div>
          <div class="form-group">
            <label for="image-url">Image URL</label>
            <input type="url" class="form-control" id="image-url" v-model="formData.imageUrl" placeholder="Enter image URL" required>
          </div>
          <div class="submit-container">
            <button type="submit" class="submit-button">Submit</button>
          </div>
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
          admissionDate: '',
          imageUrl: ''
        }
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('http://localhost:8080/api/v1/species', this.formData);
          console.log('Species created:', response.data);
          // Optionally, reset the form or navigate to a different view
          this.resetForm();
        } catch (error) {
          console.error('Error creating species:', error);
        }
      },
      resetForm() {
        this.formData = {
          name: '',
          type: '',
          family: '',
          gender: '',
          admissionDate: '',
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
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
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
  