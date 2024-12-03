<template>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul class="navbar-nav">
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

    <!-- Foros Page Content -->
    
    <div class="post-foro-page">
      <h1 class="title">Crear Foro</h1>
  
      <div class="form-container">
        <form @submit.prevent="submitForo" class="foro-form">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre del Foro</label>
            <input v-model="foro.nombre" type="text" class="form-control" id="nombre" required />
          </div>
          <div class="mb-3">
            <label for="autor" class="form-label">Autor</label>
            <input v-model="foro.autor" type="text" class="form-control" id="autor" required />
          </div>
          <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción</label>
            <textarea v-model="foro.descripcion" class="form-control" id="descripcion" rows="4" required></textarea>
          </div>
          <div class="mb-3">
            <label for="fecha_inicio" class="form-label">Fecha de Inicio</label>
            <input v-model="foro.fecha_inicio" type="date" class="form-control" id="fecha_inicio" required />
          </div>

  
          <button type="submit" class="btn btn-primary">Crear Foro</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import RequestHandler from '../../../services/RequestHandler.mjs';

  export default {
    data() {
      return {
        foro: {
          nombre: '',
          autor: '',
          descripcion: '',
          fecha_inicio: '',
        },
      };
    },
    methods: {
      async submitForo() {
        const requestHandler = new RequestHandler();
        try {
          // Enviar solicitud POST a la API
          const response = await requestHandler.postRequest('/api/foros', this.foro);
          console.log(response);
          this.$router.push({ name: 'ForosList' }); // Redirigir al listado de foros (si está implementado)
          
        } catch (error) {
          console.error('Error al crear foro:', error);
          
        }
      },
    },
  };
  </script>
  
  <style scoped>

.navbar {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar .navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  padding: 10px 15px;
}

.navbar-nav .nav-link:hover {
  background-color: #e9ecef;
}

  .post-foro-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .form-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .foro-form {
    display: flex;
    flex-direction: column;
  }
  
  .foro-form .mb-3 {
    margin-bottom: 1.5rem;
  }
  
  button {
    align-self: center;
  }
  </style>
  