<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      totalItems: {
        type: Number,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        default: 8, // Asegúrate de que este valor coincide con el que usas en el componente principal
      }
    },
    computed: {
      totalPages() {
        const pages = Math.ceil(this.totalItems / this.itemsPerPage);
        console.log('Total de páginas calculadas:', pages);
        return pages;
      }
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          console.log('Avanzando a la página:', this.currentPage + 1);
          this.$emit('update:currentPage', this.currentPage + 1);
        } else {
          console.log('Botón "Siguiente" está deshabilitado');
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          console.log('Retrocediendo a la página:', this.currentPage - 1);
          this.$emit('update:currentPage', this.currentPage - 1);
        } else {
          console.log('Botón "Anterior" está deshabilitado');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 0 5px;
    padding: 5px 10px;
  }
  </style>
  