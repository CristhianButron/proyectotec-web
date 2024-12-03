<template>
    <div class="form-container">
      <h2>{{ pasantia?.idpasantia ? 'Editar Pasantía' : 'Nueva Pasantía' }}</h2>
      <form @submit.prevent="save">
        <label for="empresa">Empresa:</label>
        <input v-model="form.empresa" type="text" id="empresa" required />
  
        <label for="descripcion">Descripción:</label>
        <textarea v-model="form.descripcion" id="descripcion" required></textarea>
  
        <label for="fecha_inicio">Fecha de Inicio:</label>
        <input v-model="form.fecha_inicio" type="date" id="fecha_inicio" required />
  
        <label for="fecha_final">Fecha Final:</label>
        <input v-model="form.fecha_final" type="date" id="fecha_final" required />
  
        <button type="submit">Guardar</button>
        <button type="button" @click="$emit('close')">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from './services/api';
  
  export default {
    props: {
      pasantia: Object, // La pasantía actual que se edita (si existe)
    },
    data() {
      return {
        form: {
          empresa: '',
          descripcion: '',
          fecha_inicio: '',
          fecha_final: '',
        },
      };
    },
    watch: {
      // Copia los datos de la pasantía recibida a `form` si existe
      pasantia: {
        immediate: true,
        handler(newValue) {
          if (newValue) {
            this.form = { ...newValue };
          }
        },
      },
    },
    methods: {
      async save() {
        try {
          if (this.form.idpasantia) {
            // Si existe un ID, actualizamos
            await api.update(this.form.idpasantia, this.form);
          } else {
            // Si no existe un ID, creamos uno nuevo
            await api.create(this.form);
          }
          this.$emit('save'); // Emite un evento para que el componente padre recargue la lista
          this.$emit('close'); // Cierra el formulario
        } catch (error) {
          console.error('Error al guardar la pasantía:', error);
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  /* Contenedor del formulario */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ocupa toda la altura de la ventana */
    background-color: #f0f4f8; /* Color de fondo suave */
  }
  
  /* Formulario */
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    color: #4a90e2;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  
  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  textarea {
    resize: none;
  }
  
  button {
    padding: 10px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #357ab8;
  }
  
  button:active {
    background-color: #2c5e91;
  }
  
  button[type="button"] {
    background-color: #f44336;
  }
  
  button[type="button"]:hover {
    background-color: #d32f2f;
  }
  </style>
  