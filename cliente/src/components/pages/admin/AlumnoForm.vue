<template>
    <div class="form-container">
      <form @submit.prevent="save">
        <h2>{{ alumno?.idalumno ? "Editar Alumno" : "Crear Alumno" }}</h2>
  
        <label for="carrera">Carrera:</label>
        <input v-model="localAlumno.carrera" type="text" id="carrera" required />
  
        <label for="sociedad_cientifica">Sociedad Científica:</label>
        <input v-model="localAlumno.sociedad_cientifica" type="checkbox" id="sociedad_cientifica" />
  
        <label for="fecha_ingreso">Fecha Ingreso:</label>
        <input v-model="localAlumno.fecha_ingreso" type="date" id="fecha_ingreso" required />
  
        <label for="Usuario_idusuario">ID Usuario:</label>
        <input v-model="localAlumno.Usuario_idusuario" type="number" id="Usuario_idusuario" required />
  
        <button type="submit">Guardar</button>
        <button type="button" @click="$emit('close')">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: {
      usuarioId: Number,
    },
    data() {
      return {
        localAlumno: {
          idalumno: null,
          carrera: "",
          sociedad_cientifica: false,
          fecha_ingreso: "",
          Usuario_idusuario: this.usuarioId,
        },
      };
    },
    methods: {
      async save() {
        try {
          if (this.localAlumno.idalumno) {
            await axios.put(
              `http://localhost:3000/api/alumnos/${this.localAlumno.idalumno}`,
              this.localAlumno
            );
          } else {
            await axios.post("http://localhost:3000/api/alumnos", this.localAlumno);
          }
          this.$emit("save");
          this.$emit("close");
        } catch (error) {
          console.error("Error al guardar el alumno:", error);
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
  