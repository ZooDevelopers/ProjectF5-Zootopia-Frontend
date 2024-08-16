<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { login } from '../api/auth';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          await login(this.username, this.password);
          this.$router.push('/animals'); // Redirige a la página de animales después del login exitoso
        } catch (error) {
          console.error('Error de autenticación:', error);
        }
      }
    }
  }
  </script>
  