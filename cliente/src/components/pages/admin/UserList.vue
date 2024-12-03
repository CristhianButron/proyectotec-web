<template>
  <div>
    <h1>Gestión de Usuarios y Alumnos</h1>

    <!-- Sección de usuarios -->
    <div>
      <h2>Usuarios</h2>
      <button @click="openUserForm()">Agregar Usuario</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Celular</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.idusuario">
            <td>{{ user.idusuario }}</td>
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.correo }}</td>
            <td>{{ user.celular }}</td>
            <td>{{ user.rol }}</td>
            <td>
              <button @click="openUserForm(user)">Editar Usuario</button>
              <button @click="deleteUser(user.idusuario)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Sección de alumnos -->
    <div>
      <h2>Alumnos</h2>
      <button @click="openAlumnoForm()">Agregar Alumno</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Carrera</th>
            <th>Sociedad Científica</th>
            <th>Fecha Ingreso</th>
            <th>Usuario ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alumno in alumnos" :key="alumno.idalumno">
            <td>{{ alumno.idalumno }}</td>
            <td>{{ alumno.carrera }}</td>
            <td>{{ alumno.sociedad_cientifica ? 'Sí' : 'No' }}</td>
            <td>{{ alumno.fecha_ingreso }}</td>
            <td>{{ alumno.Usuario_idusuario }}</td>
            <td>
              <button @click="openAlumnoForm(alumno)">Editar Alumno</button>
              <button @click="deleteAlumno(alumno.idalumno)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Formulario Usuario -->
    <UserForm
      v-if="showUserForm"
      :user="selectedUser"
      @close="closeUserForm"
      @save="fetchUsers"
    />

    <!-- Formulario Alumno -->
    <AlumnoForm
      v-if="showAlumnoForm"
      :usuarioId="selectedUsuarioId"
      @close="closeAlumnoForm"
      @save="fetchAlumnos"
    />
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "./UserForm.vue";
import AlumnoForm from "./AlumnoForm.vue";

export default {
  data() {
    return {
      users: [],
      alumnos: [],
      showUserForm: false,
      selectedUser: null,
      showAlumnoForm: false,
      selectedUsuarioId: null,
    };
  },
  components: {
    UserForm,
    AlumnoForm,
  },
  methods: {
    // Fetching users and alumnos from the server
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3000/api/usuarios");
        this.users = response.data;
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    },
    async fetchAlumnos() {
      try {
        const response = await axios.get("http://localhost:3000/api/alumnos");
        this.alumnos = response.data;
      } catch (error) {
        console.error("Error al cargar alumnos:", error);
      }
    },

    // User Form management
    openUserForm(user = null) {
      this.selectedUser = user;
      this.showUserForm = true;
    },
    closeUserForm() {
      this.selectedUser = null;
      this.showUserForm = false;
    },
    async deleteUser(id) {
      if (confirm("¿Seguro que quieres eliminar este usuario?")) {
        try {
          await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
          this.fetchUsers();
        } catch (error) {
          console.error("Error al eliminar usuario:", error);
        }
      }
    },

    // Alumno Form management
    openAlumnoForm(usuarioId = null) {
      this.selectedUsuarioId = usuarioId;
      this.showAlumnoForm = true;
    },
    closeAlumnoForm() {
      this.selectedUsuarioId = null;
      this.showAlumnoForm = false;
    },
    async deleteAlumno(id) {
      if (confirm("¿Seguro que quieres eliminar este alumno?")) {
        try {
          await axios.delete(`http://localhost:3000/api/alumnos/${id}`);
          this.fetchAlumnos();
        } catch (error) {
          console.error("Error al eliminar alumno:", error);
        }
      }
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchAlumnos();
  },
};
</script>

<style scoped>
/* Agregar estilos generales */
button {
  margin: 5px;
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

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-top: 20px;
}

table {
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
