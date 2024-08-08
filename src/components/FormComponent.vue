<template>
    <div class="form-wrapper">
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">NAME</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="type">TYPE</label>
            <input type="text" class="form-control" id="type" v-model="formData.type" placeholder="Enter type">
          </div>
          <div class="form-group">
            <label for="family">FAMILY</label>
            <select class="form-control" id="family" v-model="formData.family">
              <option value="">Select family</option>
              <option>Felidos</option>
              <option>Canidos</option>
              <option>Reptiles</option>
              <option>Leporidae</option>
            </select>
          </div>
          <div class="form-group">
            <label for="gender">GENDER</label>
            <input type="text" class="form-control" id="gender" v-model="formData.gender" placeholder="Enter gender">
          </div>
          <div class="form-group">
            <label for="admission-date">ADMISSION DATE</label>
            <input type="date" class="form-control" id="admission-date" v-model="formData.admissionDate">
          </div>
          <div class="submit-container">
            <button type="submit" class="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          type: '',
          family: '',
          gender: '',
          admissionDate: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.formData);
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d3d3d3;
    padding: 10px;
  }
  
  .header .logo h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .header .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }
  
  .header .nav-links li a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
  
  .header .nav-links li a.active {
    color: #d1a24c;
  }
  
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
    display: flex;
    margin-bottom: 5px;
    font-weight: bold;
    color: #000000;
    font-size: 14px;
  }
  
  input,
  select {
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    font-size: 14px;
    background-color: #FFFFFF;
    border-radius: 20px;
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
    padding: 20px 70px;
    background-color: #FFFFFF;
    border: 1px solid #ddd;
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #e0e0e0;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  .footer .social-icons a img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  </style>
  