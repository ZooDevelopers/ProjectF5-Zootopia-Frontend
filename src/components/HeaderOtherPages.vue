<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="header">
    <RouterLink to="/dashboard" class="logo">ZooCoders</RouterLink>
    <nav :class="['nav', { open: menuOpen }]">
      <RouterLink to="/list" class="nav-item">List</RouterLink>
      <RouterLink to="/filter" class="nav-item">Filter</RouterLink>
      <RouterLink to="/addspecies" class="nav-item">Add Species</RouterLink>
    </nav>
    <div class="hamburger" @click="toggleMenu">
      &#9776;
    </div>
    <div class="profile-icon">
      <img src="/src/components/icons/Login.svg" alt="Profile">
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
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.nav-item {
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
  transition: color 0.3s;
  margin: 0 60px;
}

.nav-item:hover {
  color: #b79663;
}

.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

.profile-icon {
  display: flex;
  align-items: center;
}

.profile-icon img {
  width: 32px;
  height: 32px;
}

@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background-color: #d3d3d3;
    width: 200px;
    transform: translateX(100%);
    border-radius: 10px;
    padding: 10px;
  }
  

  .nav.open {
    transform: translateX(0);
  }

  .nav-item {
    margin: 10px 0;
  }

  .hamburger {
    display: block;
  }

  .profile-icon {
    position: absolute;
    top: 10px;
    right: 20px;
  }
}
</style>
