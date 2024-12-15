<template>
    <div>
      <!-- Navbar -->
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
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Foros Page Content -->
      <div class="foros-page">
        <h1 class="title">Foros</h1>
        <div class="foro-container" v-if="foros.length > 0">
          <div v-for="foro in foros" :key="foro.id" class="foro-card">
            <h2 class="foro-name">{{ foro.nombre }}</h2>
            <p class="foro-author">Autor: {{ foro.autor }}</p>
            <p class="foro-description">{{ foro.descripcion }}</p>
            <p class="foro-date">Fecha de inicio: {{ foro.fecha_inicio }}</p>
            <p  class="switch">
              <input type="checkbox" >
              <span class="slider round"></span> </p>
          </div>
        </div>
        <p v-else>Cargando foros...</p>
      </div>
    </div>
  </template>
  
  <script>
  import RequestHandler from '../../../services/RequestHandler.mjs';
  
  export default {
    data() {
      return {
        foros: [],
      };
    },
    mounted() {
      this.fetchForos();
    },
    methods: {
      async fetchForos() {
        const requestHandler = new RequestHandler();
        try {
          const response = await requestHandler.getRequest('/api/foros');
          this.foros = response;
        } catch (error) {
          console.error('Error al obtener los foros:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Navbar Styling */
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
  
  /* Foros Page Styling */
  .foros-page {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .foro-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .foro-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .foro-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .foro-name {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .foro-author,
  .foro-description,
  .foro-date {
    font-size: 1rem;
    color: #555;
  }
  </style>
  