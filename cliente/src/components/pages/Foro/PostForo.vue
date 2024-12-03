<template>
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
          this.$router.push({ name: 'ForosList' }); // Redirigir al listado de foros (si está implementado)
          alert('Foro creado exitosamente');
        } catch (error) {
          console.error('Error al crear foro:', error);
          alert('Hubo un error al crear el foro');
        }
      },
    },
  };
  </script>
  
  <style scoped>
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
  