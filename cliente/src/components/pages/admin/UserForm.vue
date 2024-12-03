<template>
    <div class="form-container">
      <form @submit.prevent="save">
        <h2>{{ user?.idusuario ? "Editar Usuario" : "Crear Usuario" }}</h2>
  
        <label for="nombre">Nombre:</label>
        <input v-model="localUser.nombre" type="text" id="nombre" required />
  
        <label for="apellido">Apellido:</label>
        <input v-model="localUser.apellido" type="text" id="apellido" required />
  
        <label for="correo">Correo:</label>
        <input v-model="localUser.correo" type="email" id="correo" required />
  
        <label for="celular">Celular:</label>
        <input v-model="localUser.celular" type="text" id="celular" required />
  
        <label for="rol">Rol:</label>
        <input v-model="localUser.rol" type="text" id="rol" required />
  
        <label for="password">Contraseña:</label>
        <input v-model="localUser.password" type="password" id="password" required />
  
        <button type="submit">Guardar</button>
        <button type="button" @click="$emit('close')">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: {
      user: Object,
    },
    data() {
      return {
        localUser: this.user || {
          idusuario: null,
          nombre: "",
          apellido: "",
          correo: "",
          celular: "",
          rol: "",
          password: "",
        },
      };
    },
    methods: {
      async save() {
        try {
          if (this.localUser.idusuario) {
            await axios.put(
              `http://localhost:3000/api/usuarios/${this.localUser.idusuario}`,
              this.localUser
            );
          } else {
            await axios.post("http://localhost:3000/api/usuarios", this.localUser);
          }
          this.$emit("save");
          this.$emit("close");
        } catch (error) {
          console.error("Error al guardar el usuario:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  button:nth-child(2) {
    background-color: #f44336;
  }
  </style>
  