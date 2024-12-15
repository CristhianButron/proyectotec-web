
<template>
  <div class="form-container">
    <h2>{{ graduado?.idgraduado ? 'Editar Graduado' : 'Nuevo Graduado' }}</h2>
    <form @submit.prevent="save">
      <label for="alumno">Alumno:</label>
      <select v-model="form.alumno_idalumno" id="alumno" required>
        <option v-for="alumno in alumnos" :key="alumno.idalumno" :value="alumno.idalumno">
          {{ alumno.nombre }}
        </option>
      </select>

      <label for="fecha_graduacion">Fecha de Graduación:</label>
      <input v-model="form.fecha_graduacion" type="date" id="fecha_graduacion" required />

      <button type="submit">Guardar</button>
      <button type="button" @click="$emit('close')">Cancelar</button>
    </form>
  </div>
</template>

<script>
import api from './services/api';

export default {
  props: {
    graduado: Object, // El graduado actual que se edita (si existe)
  },
  data() {
    return {
      form: {
        alumno_idalumno: '',
        fecha_graduacion: '',
      },
      alumnos: [], // Lista de alumnos para seleccionar
    };
  },
  async created() {
    try {
      const response = await api.get('/api/alumnos');
      this.alumnos = response.data;
    } catch (error) {
      console.error('Error al cargar los alumnos:', error);
    }
  },
  watch: {
    // Copia los datos del graduado recibido a `form` si existe
    graduado: {
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
        if (this.form.idgraduado) {
          // Si existe un ID, actualizamos
          await api.update(this.form.idgraduado, this.form);
        } else {
          // Si no existe un ID, creamos uno nuevo
          await api.create(this.form);
        }
        this.$emit('save'); // Emite un evento para que el componente padre recargue la lista
        this.$emit('close'); // Cierra el formulario
      } catch (error) {
        console.error('Error al guardar el graduado:', error);
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

input, select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
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