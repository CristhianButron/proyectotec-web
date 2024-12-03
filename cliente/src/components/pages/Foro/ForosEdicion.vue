<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">Inicio</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/GetForo">Foros</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/PostForo">Crear Foro</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/ForosEdit">Editar Foros</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Edit Foro Page Content -->
      <div class="edit-foro-page">
        <h1 class="title">Editar o Eliminar Foro</h1>
  
        <!-- Lista de Foros -->
        <div class="foro-list">
          <div v-if="foros.length > 0">
            <ul>
              <li v-for="foro in foros" :key="foro.idforo" class="foro-item">
                <span class="foro-title">{{ foro.nombre }} ({{ foro.autor }})</span>
                <div>
                  <button @click="editForo(foro.idforo)" class="btn btn-info btn-sm mx-2">Editar</button>
                  <button @click="deleteForo(foro.idforo)" class="btn btn-danger btn-sm mx-2">Eliminar</button>
                </div>
              </li>
            </ul>
          </div>
          <p v-else class="loading-message">Cargando foros...</p>
        </div>
  
        <!-- Edit Form -->
        <div v-if="foro" class="edit-form">
          <h2>Editar Foro</h2>
          <form @submit.prevent="updateForo">
            <div class="form-group">
              <label for="nombre">Nombre del Foro</label>
              <input type="text" id="nombre" v-model="foro.nombre" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="descripcion">Descripción</label>
              <textarea id="descripcion" v-model="foro.descripcion" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label for="autor">Autor</label>
              <input type="text" id="autor" v-model="foro.autor" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import RequestHandler from '../../../services/RequestHandler.mjs';
  
  export default {
    data() {
      return {
        foros: [],  // Lista de foros
        foro: null, // Foro actual a editar
      };
    },
    mounted() {
      this.fetchForos();  // Cargar la lista de foros al cargar el componente
    },
    methods: {
      // Método para obtener la lista de foros
      async fetchForos() {
        const requestHandler = new RequestHandler();
        try {
          const response = await requestHandler.getRequest('/api/foros');
          this.foros = response;  // Guardar la lista de foros
        } catch (error) {
          console.error('Error al obtener los foros:', error);
        }
      },
      
      // Método para obtener los detalles de un foro específico por ID
      async fetchForo(foroId) {
        const requestHandler = new RequestHandler();
        try {
          const response = await requestHandler.getRequest(`/api/foros/${foroId}`);
          this.foro = response;  // Establecer el foro a editar
        } catch (error) {
          console.error('Error al obtener el foro:', error);
        }
      },
  
      // Método para editar el foro
      async editForo(foroId) {
        this.fetchForo(foroId);  // Cargar el foro para editar
      },
  
      // Método para actualizar el foro
      async updateForo() {
        const foroId = this.foro.idforo;
        const requestHandler = new RequestHandler();
        try {
          const response = await requestHandler.putRequest(`/api/foros/${foroId}`, this.foro);
          console.log('Foro actualizado:', response);
          this.$router.push('/ForosEdit');  // Volver a la lista de foros
        } catch (error) {
          console.error('Error al actualizar el foro:', error);
        }
      },
  
      // Método para eliminar un foro
      async deleteForo(foroId) {
        const requestHandler = new RequestHandler();
        try {
          await requestHandler.deleteRequest(`/api/foros/${foroId}`);
          console.log('Foro eliminado');
          this.fetchForos();  // Recargar la lista de foros
        } catch (error) {
          console.error('Error al eliminar el foro:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Navbar Styling */
  .navbar {
    background-color: #f8f9fa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .navbar .navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    color: #007bff;
  }
  
  .navbar-nav .nav-link {
    font-size: 1.1rem;
    padding: 10px 15px;
  }
  
  .navbar-nav .nav-link:hover {
    background-color: #e9ecef;
    color: #007bff;
  }
  
  .navbar-nav .nav-link:focus {
    outline: none;
  }
  
  /* Edit Foro Page Styling */
  .edit-foro-page {
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    margin-top: 30px;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    color: #343a40;
    margin-bottom: 20px;
  }
  
  .foro-list {
    margin-bottom: 30px;
  }
  
  .foro-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .foro-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .foro-title {
    font-weight: bold;
    color: #007bff;
  }
  
  .foro-item button {
    margin-left: 10px;
  }
  
  .loading-message {
    text-align: center;
    font-size: 1.2rem;
    color: #6c757d;
  }
  
  /* Edit Form Styling */
  .edit-form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .edit-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-control {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 100%;
  }
  
  button {
    margin-top: 15px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>
  