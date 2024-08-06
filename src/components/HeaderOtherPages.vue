<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <RouterLink to="/dashboard" class="logo">ZooCoders</RouterLink>
    <nav class="nav">
      
      <RouterLink to="/list" class="nav-item">List</RouterLink>
      <RouterLink to="/filter" class="nav-item">Filter</RouterLink>
      <RouterLink to="/addspecies" class="nav-item">Add Species</RouterLink>
    </nav>
    <div class="profile-icon">
      <img src="/src/components/icons/Login.svg" alt="">
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d3d3d3;
  padding: 10px 20px;
  border-bottom: 2px solid #0078d4;
}

.logo {
  font-size: 48px;
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.nav {
  display: flex;
}

.nav-item {
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold; /* Make the font weight bolder */
  transition: color 0.3s;
  margin: 0 60px; /* Add margin to each nav item for spacing */

}

.nav-item:hover {
  color: #b79663;
}

.profile-icon {
  display: flex;
  align-items: center;
}

.profile-icon svg {
  fill: black;
}
</style>

    